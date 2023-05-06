<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <!--   <div class="flex items-center min-h-screen justify-center">
    <div class="p-8 shadow flex flex-col items-center">
      <img class="h-12" src="./assets/logo.svg" alt="Logo Vue 3" />
      <RouterView />
      <button class="bg-[#41b883] hover:bg-[#34495e] hover:text-white rounded-full px-3 py-1" v-if="$route.path === '/'">
        <RouterLink to="/page2">Go to page 2</RouterLink>
      </button>
    </div>
  </div> -->
</template>
