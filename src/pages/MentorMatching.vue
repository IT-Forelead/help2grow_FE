<script setup>
import { computed, ref } from 'vue';
import SeniorCard from '../components/must/SeniorCard.vue';
import { useMMStore } from '../stores/mm.store';
import JuniorCard from '../components/must/JuniorCard.vue';
import UserIcon from '../assets/icons/UserIcon.vue'
import axios from 'axios'

const seniors = computed(() => useMMStore().seniors?.reverse())
const fseniors = computed(() => useMMStore().fseniors)
const junior = computed(() => useMMStore().junior)

const isMatching = ref(false)
const isMatchClicked = ref(false)
const matchMentor = () => {
  isMatchClicked.value = true
  isMatching.value = true
  seniors.value?.map(async (s) => {
    await axios.post('http://89.223.122.5:5600/ai/skills-match',
      {
        "senior_skills": s?.skills,
        "junior_skill": junior.value?.skills[0],
        "similarity_threshold": 0.5
      }
    ).then((res) => {
      useMMStore().findSeniors({
        ...res?.data,
        ...s
      })
    })
  })
  setTimeout(() => {
    isMatching.value = false
  }, 1000)
}

const clear = () => {
  useMMStore().clearJunior()
  useMMStore().clearfSeniors()
  isMatchClicked.value = false
}

</script>

<template>
  <div class="grid grid-cols-3 px-8 mt-5 space-x-5">
    <div class="space-y-3">
      <div class="p-3 border shadow-lg rounded-xl">
        <SeniorCard />
      </div>
      <div class="p-3 border shadow-lg rounded-xl">
        <div v-if="junior" class="relative">
          <div @click="clear()" class="absolute top-0 text-red-500 cursor-pointer right-1 hover:scale-105">x</div>
          <div class="flex items-center justify-between mb-2">
            <div class="p-2 bg-gray-100 rounded-full">
              <UserIcon class="w-10 h-10" />
            </div>
          </div>
          <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">{{ junior?.name }}</a>
          </p>
          <p class="mb-3 text-sm font-normal">
            <a href="#" class="hover:underline">@{{ junior?.name }}</a>
          </p>
          <p class="mb-4 text-sm">Junior's skills</p>
          <div class="flex mb-5 text-sm">
            <div v-for="(skill, idx) in junior?.skills" class="capitalize">
              <span v-if="idx % 2 === 0"
                class="bg-green-100 text-green-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full">
                {{ skill }}
              </span>
              <span v-else class="bg-orange-100 text-orange-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full">
                {{ skill }}
              </span>
            </div>
          </div>
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
    <div v-if="isMatchClicked" class="grid grid-cols-2 col-span-2 gap-3 max-h-[90vh] overflow-auto px-5">
      <div v-for="(s, idx) in fseniors" :key="idx" class="p-3 border border-green-500 shadow-lg h-fit rounded-xl">
        <div class="flex items-center justify-between mb-2">
          <div class="p-2 bg-gray-100 rounded-full">
            <UserIcon class="w-10 h-10" />
          </div>
          <div>
            <div class="text-white bg-blue-700 font-medium rounded-lg text-xs px-3 py-1.5 ">Senior</div>
          </div>
        </div>
        <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
          <a href="#">{{ s?.name }}</a>
        </p>
        <p class="mb-3 text-sm font-normal">
          <a href="#" class="hover:underline">@{{ s?.name }}</a>
        </p>
        <p class="mb-4 text-sm">Developer's skills</p>
        <div class="flex flex-wrap gap-2 text-sm">
          <div v-for="(skill, idx) in s?.skills" class="capitalize">
            <span v-if="idx % 2 === 0"
              class="bg-blue-100 text-blue-800 text-base font-medium px-2.5 py-0.5 rounded-full">
              {{ skill }}
            </span>
            <span v-else class="bg-red-100 text-red-800 text-base font-medium px-2.5 py-0.5 rounded-full">
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="p-1 px-2 my-1 bg-green-100 border border-green-600 rounded-lg">
          <p>
            <span class="font-medium">Matched skill(s): </span>
            <span v-for="(sk, idx) in s?.MATCH_SKILL" :key="idx"
              class="uppercase bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              {{ sk }}
            </span>
          </p>
          <p>
            <span class="font-medium">Matched skill(s) similarity: </span>
            <span class="text-xl font-bold">{{ (s?.MATCH_SKILL_SIMILARITY * 100)?.toFixed(2) }}</span>%
          </p>
          <p>
            <span class="font-medium">Similarity: </span>
            <span class="text-xl font-bold">{{ (s?.SIMILARITY * 100)?.toFixed(2) }}</span>%
          </p>
        </div>
      </div>
    </div>
    <div v-else class="grid grid-cols-2 col-span-2 gap-2 max-h-[95vh] overflow-auto px-5">
      <div v-for="(s, idx) in seniors" :key="idx" class="p-3 border border-gray-200 shadow-lg shadow-gray-500/10 h-fit rounded-xl">
        <div class="flex items-center space-x-2">
          <UserIcon class="w-10 h-10 p-1 bg-gray-100 rounded-full" />
          <div>
            <div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
              {{ s?.name }}
            </div>
            <div class="text-sm font-normal">
              Senior developer
            </div>
          </div>
        </div>
        <div class="mb-2 text-base text-gray-900">Developer's skills</div>
        <div class="flex flex-wrap gap-2 text-sm">
          <div v-for="(skill, idx) in s?.skills" class="capitalize">
            <span v-if="idx % 2 === 0"
              class="bg-blue-100 text-blue-800 text-base font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
              {{ skill }}
            </span>
            <span v-else class="bg-red-100 text-red-800 text-base font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>