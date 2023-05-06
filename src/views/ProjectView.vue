<script setup lang="ts">
import NavbarLayout from '@/layouts/NavbarLayout.vue'
</script>

<template>
  <div class="min-h-full">
    <NavbarLayout />

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {{ $route.name }}
      </div>
    </main>
  </div>
</template>
