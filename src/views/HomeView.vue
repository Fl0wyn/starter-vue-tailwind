<script setup lang="ts">
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import NavbarLayout from '@/layouts/NavbarLayout.vue'
import { useAppStore } from '@/stores/index'
const message = useAppStore().app_title
</script>

<template>
  <div class="min-h-full">
    <NavbarLayout />

    <HeaderNavbar :message="message" />

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>
