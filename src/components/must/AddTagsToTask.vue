<script setup>
import { computed, onMounted, ref } from 'vue';
import Multiselect from '@vueform/multiselect'
import { useMMStore } from '../../stores/mm.store';
const tags = ref(
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
const title = ref('')
const desc = ref('')
const selected = ref([])
const customSkills = ref([])
const customSkill = ref(null)

const addToTagsSelected = () => {
  if (customSkill.value) {
    customSkills.value.push(...customSkill.value?.split(','))
    customSkill.value = ''
  }
}

const selectedTask = computed(() => useMMStore().selectedTask)

const updateTaskFn = () => {
  if (title.value && (selected.value.length > 0 || customSkills.value.length > 0)) {
    useMMStore().updateTask({
      id: selectedTask.value?.id,
      title: title.value,
      desc: desc.value,
      tags: [...selected.value, ...customSkills.value]
    })
    title.value = ''
    selected.value = []
    customSkill.value = ''
    customSkills.value = []
    useMMStore().setSelectedTask(null)
  }
}


onMounted(() => {
  title.value = selectedTask.value?.title
  desc.value = selectedTask.value?.desc
  customSkill.value = selectedTask.value?.tags?.join(', ')
})
</script>
<template>
  <div class="my-3">
    <div class="flex items-center justify-between">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task title</label>
      <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">TASK</span>
    </div>
    <input type="text" id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Create button ui component..." v-model="title" required>
    <textarea
      class="bg-gray-50 border border-gray-300 mt-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter task description here..." v-model="desc"></textarea>
    <Multiselect v-model="selected" :options="tags" :mode="'tags'"
      class="my-3 rounded-lg bg-gray-100/75 multiselect-blue" />
    <div class="flex items-center justify-center mb-3 space-x-2">
      <input type="text" id="stack"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add other tags (optional)" v-model="customSkill">
      <button @click="addToTagsSelected()"
        class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-green-900">+</button>
    </div>
    <p class="mb-2 text-gray-600">Hint: You can add several tags with comma (,). <br> Etc: Scala, js,...</p>
    <button @click="updateTaskFn()"
      class="w-full focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
      Update task
    </button>
  </div>
</template>

<style scoped>
.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
}
</style>