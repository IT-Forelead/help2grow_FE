<script setup>
import { computed } from 'vue';
import JuniorTACard from '../components/must/JuniorTACard.vue';
import { useMMStore } from '../stores/mm.store';
import { LoremIpsum } from "lorem-ipsum";

const taJunior = computed(() => useMMStore().taJunior)

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});



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
          <div v-for="(i, idx) in Math.floor(Math.random() * 50)" :key="idx" class="w-full p-1 border rounded-lg h-fit">
            <h1 class="font-bold">{{ lorem.generateSentences(1) }}</h1>
            <p>{{ lorem.generateWords(Math.floor(Math.random() * 20)) }}</p>
            <div>
              <span
                class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{{ lorem.generateWords(1) }}</span>
              <span
                class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{ lorem.generateWords(1) }}</span>
              <span
                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{{ lorem.generateWords(1) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>