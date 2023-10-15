<script setup>
import { computed, ref } from 'vue';
import SeniorCard from '../components/must/SeniorCard.vue';
import { useMMStore } from '../stores/mm.store';
import JuniorCard from '../components/must/JuniorCard.vue';
import UserIcon from '../assets/icons/UserIcon.vue'
import axios from 'axios'

const seniors = computed(() => useMMStore().seniors)
const fseniors = computed(() => useMMStore().fseniors)
const junior = computed(() => useMMStore().junior)

const isMatching = ref(false)
const matchMentor = () => {
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
          <div @click="clear()"
            class="absolute top-0 text-red-500 cursor-pointer right-1 hover:scale-105">x</div>
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
    <div v-if="fseniors?.length > 0" class="grid grid-cols-2 col-span-2 gap-3">
      <div v-for="(s, idx) in fseniors" :key="idx" class="p-3 border shadow-lg rounded-xl">
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
        <div class="flex text-sm">
          <div v-for="(skill, idx) in s?.skills" class="capitalize">
            <span v-if="idx % 2 === 0"
              class="bg-blue-100 text-blue-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full">
              {{ skill }}
            </span>
            <span v-else class="bg-red-100 text-red-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full">
              {{ skill }}
            </span>
          </div>
        </div>
        <pre>{{ s }}</pre>
      </div>
    </div>
    <div v-else class="grid grid-cols-2 col-span-2 gap-3">
      <div v-for="(s, idx) in seniors" :key="idx" class="p-3 border shadow-lg rounded-xl">
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
        <div class="flex text-sm">
          <div v-for="(skill, idx) in s?.skills" class="capitalize">
            <span v-if="idx % 2 === 0"
              class="bg-blue-100 text-blue-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full">
              {{ skill }}
            </span>
            <span v-else class="bg-red-100 text-red-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>