<script setup>
import { computed } from 'vue';
import JuniorTACard from '../components/must/JuniorTACard.vue';
import { useMMStore } from '../stores/mm.store';

const tasks = computed(() => useMMStore().tasks?.reverse())
const taJunior = computed(() => useMMStore().taJunior)

</script>
<template>
  <div class="p-3 m-3">
    <div class="grid grid-cols-3 gap-5">
      <div class="p-3 border rounded-lg">
        <JuniorTACard :mode="'assign'" />
      </div>
      <div class="col-span-2 p-2 border rounded-lg">
        <div class="flex items-center justify-center">
          <div v-for="(s, idx) in taJunior?.skills" :key="idx" class="p-1 px-3 mx-1 border rounded-full h-fit">
            {{ s }}
          </div>
        </div>
        <div class="flex flex-wrap max-h-screen gap-3 mt-5 overflow-auto">
          <div v-for="(t, idx) in tasks" :key="idx"
            class="w-full p-2 border rounded-lg cursor-pointer h-fit hover:border-green-400">
            <h1 class="font-bold">{{ t?.id }}</h1>
            <h1 class="font-bold">{{ t?.title }}</h1>
            <p>{{ t?.desc }}</p>
            <span v-for="(tt, idx) in t?.tags" :key="idx">
              <span v-if="idx % 2 === 0"
                class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {{ tt }}
              </span>
              <span v-else
                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                {{ tt }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>