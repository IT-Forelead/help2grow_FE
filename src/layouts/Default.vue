<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="flex w-full">
    <main class="flex-1 px-6 py-8">
      <h1 class="mb-12 text-lg font-bold uppercase">{{ route.meta.title }}</h1>
      <RouterView />
    </main>
  </div>
</template>
