import { useSupabaseServer } from "~~/composables/supabase-server"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const { slug } = getQuery(event)
  const client = useSupabaseServer(event)

  if (slug) {
    const { data, error } = await client
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single()

    if (data) {
      const url = `https://social-saas.vercel.app/api/template/FViQTcv7mzE?text=${
        data.title
      }&image=${data.images?.[0]}&author=${
        data.twitter ? "by " + data.twitter : "_"
      }`
      const arrayBuffer = (await $fetch(url, {
        responseType: "arrayBuffer",
      })) as ArrayBuffer
      const buffer = new Uint8Array(arrayBuffer)

      res.statusCode = 200
      res.setHeader(
        "Cache-Control",
        `public, immutable, no-transform, s-maxage=604800, max-age=604800`
      )
      res.setHeader("Content-Type", "image/png")
      res.end(buffer)
    } else {
      res.statusCode = 500
      res.setHeader("Content-Type", "text/html")
      res.end("<p>Sorry, no project found</p>")
    }
  } else {
    res.statusCode = 500
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>")
  }
})
