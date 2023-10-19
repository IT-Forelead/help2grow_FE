<script setup>
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect'
import { useMMStore } from '../../stores/mm.store';
const skills = ref(
  [
    "Git",
    "Linux",
    "PostgreSQL",
    "SQL",
    "Docker",
    "Atlassian Jira",
    "AWS",
    "Kubernetes",
    "Kafka",
    "ClickHouse",
    "GraphQL",
    "Jira",
    "NoSQL",
    "Elasticsearch",
    "DevOps",
    "GitHub",
    "WebSockets",
    "Redis",
    "Grafana",
    "Cassandra",
    "Оптимизация кода",
    "Apollo",
    "Kanban",
    "REST API",
    "SCALA",
    "Работа в команде"
  ]
)
const name = ref('')
const selected = ref([])
const customSkills = ref([])
const customSkill = ref(null)

const addToSkillSelected = () => {
  if (customSkill.value) {
    customSkills.value.push(...customSkill.value?.split(','))
    customSkill.value = ''
  }
}

const addJuniorForAssignTask = () => {
  if (name.value && selected.value.length > 0) {
    useMMStore().setTAJunior({
      name: name.value,
      skills: [...selected.value, ...customSkills.value]
    })
  }
}
</script>
<template>
  <div class="my-3">
    <div class="flex items-center justify-between">
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname</label>
      <span
        class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Junior</span>
    </div>
    <input type="text" id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="John" v-model="name" required>
    <Multiselect v-model="selected" :options="skills" :mode="'tags'"
      class="my-3 rounded-lg bg-gray-100/75 multiselect-blue" />
    <div class="flex items-center justify-center mb-3 space-x-2">
      <input type="text" id="stack"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add other skill (optional)" v-model="customSkill">
      <button @click="addToSkillSelected()"
        class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-green-900">+</button>
    </div>
    <button @click="addJuniorForAssignTask()"
      class="w-full focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900">Add</button>
  </div>
</template>

<style scoped>
.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
}
</style>