<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})
</script>

<template>
  <div class="mt-16 sm:mt-24 flex flex-col items-center">
    <h1 class="text-4xl">
      Contact
    </h1>
    <p class="mt-8 px-4 text-xl max-w-screen-md text-center">
      We are super excited to bring you more features, and showcase the power⚡
      of Supabase that range from Huge Application, to Small Indie Project.

      <br>
      <br>

      So, if you have any
      <span> feedback </span>, <span> ideas </span>, or
      <span> collaboration opportunity </span>, feel free to reach out to us at
      <a
        class="text-emerald-400 underline underline-offset-2 underline-emerald-400"
        href="mailto:admin@madewithsupabase.com"
      >admin@madewithsupabase.com</a>!

      <br>
      <br>
      Your contribution means a lot to us! 💚
    </p>

    <div class="mt-8">
      <router-link
        class="px-6 py-3 rounded-lg bg-gray-400 hover:bg-gray-500 transition"
        to="about"
      >
        About
      </router-link>
    </div>
  </div>
</template>

<style scoped>
span {
  @apply text-emerald-400;
}
</style>
