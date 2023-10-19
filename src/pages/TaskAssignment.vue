<script setup>
import { computed, ref } from 'vue';
import JuniorTACard from '../components/must/JuniorTACard.vue';
import { useMMStore } from '../stores/mm.store';
import axios from 'axios';
import UserIcon from '../assets/icons/UserIcon.vue';

const tasks = computed(() => useMMStore().tasks?.reverse())
const taJunior = computed(() => useMMStore().taJunior)
const ftasks = computed(() => useMMStore().ftasks)

const isMatching = ref(false)
const isMatchClicked = ref(false)
const matchTasks = () => {
  isMatchClicked.value = true
  isMatching.value = true
  tasks.value?.map(async (task) => {
    await axios.post('http://89.223.122.5:5600/ai/skills-match',
      {
        "senior_skills": task?.tags,
        "junior_skill": taJunior.value?.skills[0],
        "similarity_threshold": 0.5
      }
    ).then((res) => {
      useMMStore().findTask({
        ...res?.data,
        ...task
      })
    })
  })
  setTimeout(() => {
    isMatching.value = false
  }, 1000)
}

const clear = () => {
  useMMStore().clearTaJunior()
  useMMStore().clearftasks()
  isMatchClicked.value = false
}

</script>
<template>
  <div class="p-3 m-3">
    <div class="grid grid-cols-3 gap-5">
      <div class="p-3 border rounded-lg">
        <div v-if="taJunior" class="relative">
          <div @click="clear()"
            class="absolute top-0 text-red-500 cursor-pointer right-1 hover:scale-105">x</div>
          <div class="flex items-center justify-between mb-2">
            <div class="p-2 bg-gray-100 rounded-full">
              <UserIcon class="w-10 h-10" />
            </div>
          </div>
          <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">{{ taJunior?.name }}</a>
          </p>
          <p class="mb-3 text-sm font-normal">
            <a href="#" class="hover:underline">@{{ taJunior?.name }}</a>
          </p>
          <p class="mb-4 text-sm">Junior's skills</p>
          <div class="flex mb-5 text-sm">
            <div v-for="(skill, idx) in taJunior?.skills" class="capitalize">
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
            Finding task...
          </button>
          <button v-else @click="matchTasks()"
            class="w-full cursor-pointer focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900">
            Find Task
          </button>
        </div>
        <JuniorTACard v-else />
      </div>
      <div class="col-span-2 p-2 border rounded-lg">
        <div class="flex items-center justify-center">
          <div v-for="(s, idx) in taJunior?.skills" :key="idx" class="p-1 px-3 mx-1 border rounded-full h-fit">
            {{ s }}
          </div>
        </div>
        <div v-if="!isMatchClicked" class="flex flex-wrap max-h-screen gap-3 mt-5 overflow-auto">
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
        <div v-else class="flex flex-wrap max-h-screen gap-3 mt-5 overflow-auto">
          <div v-for="(t, idx) in ftasks" :key="idx"
            class="w-full p-2 border border-green-400 rounded-lg cursor-pointer h-fit">
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
            <div class="p-1 px-2 my-1 bg-green-100 border border-green-600 rounded-lg">
              <p>
                <span class="font-medium">Matched skill(s): </span>
                <span v-for="(ta, idx) in t?.MATCH_SKILL" :key="idx"
                  class="uppercase bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  {{ ta }}
                </span>
              </p>
              <p>
                <span class="font-medium">Matched skill(s) similarity: </span>
                <span class="text-xl font-bold">{{ (t?.MATCH_SKILL_SIMILARITY * 100)?.toFixed(2) }}</span>%
              </p>
              <p>
                <span class="font-medium">Similarity: </span>
                <span class="text-xl font-bold">{{ (t?.SIMILARITY * 100)?.toFixed(2) }}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>