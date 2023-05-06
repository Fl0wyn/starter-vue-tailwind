<script setup lang="ts">
import { RouterLink } from 'vue-router'

const items = {
  code: '404',
  message: 'Page not found',
  detail: 'Sorry, we couldn’t find the page you’re looking for.',
  button: 'Go back home'
}
</script>

<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600">{{ items.code }}</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {{ items.message }}
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">{{ items.detail }}</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink
          to="/"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <div class="flex items-center">
            {{ items.button }}
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
