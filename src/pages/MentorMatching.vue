<script setup>
import { computed, ref } from 'vue';
import SeniorCard from '../components/must/SeniorCard.vue';
import { useMMStore } from '../stores/mm.store';
import JuniorCard from '../components/must/JuniorCard.vue';

const seniors = computed(() => useMMStore().seniors)
const junior = computed(() => useMMStore().junior)

const isMatching = ref(false)
const matchMentor = () => {
  isMatching.value = true
  setTimeout(() => {
    isMatching.value = false
  }, 1000)
}
</script>

<template>
  <div class="grid grid-cols-3 px-8 space-x-5 mt-5">
    <div class="space-y-10">
      <div class="p-3 border shadow-lg rounded-xl">
        <SeniorCard />
      </div>
      <div class="p-3 border shadow-lg rounded-xl">
        <div v-if="junior" class="relative">
          <div @click="useMMStore().clearJunior()"
            class="absolute top-0 text-red-500 cursor-pointer right-1 hover:scale-105">x</div>
          {{ junior }}
          <button v-if="isMatching"
            class="w-full disabled focus:outline-none text-white bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            Matching Mentor...
          </button>          
          <button v-else @click="matchMentor()"
            class="w-full cursor-pointer focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900">
            Match Mentor
          </button>
        </div>
        <JuniorCard v-else />
      </div>
    </div>
    <div class="grid grid-cols-2 col-span-2 gap-3">
      <div v-for="(s, idx) in seniors" :key="idx" class="p-3 border shadow-lg rounded-xl">
        <h1>{{ s }}</h1>
      </div>
    </div>
  </div>
</template>
<style scoped></style>