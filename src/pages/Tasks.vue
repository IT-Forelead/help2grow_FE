<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useMMStore } from '../stores/mm.store';
import AddTask from '../components/must/AddTask.vue';
import AddTagsToTask from '../components/must/AddTagsToTask.vue';

const tasks = computed(() => useMMStore().tasks?.reverse())

const selectedTask = computed(() => useMMStore().selectedTask)

const selectTask = (task) => {
  useMMStore().setSelectedTask(task)
}

const showUpdate = ref(false)

watch(() => selectedTask.value, (val) => {
  if (val) {
    showUpdate.value = true
  } else {
    showUpdate.value = false
  }
})
onMounted(() => {
  useMMStore().setSelectedTask(null)
})
</script>
<template>
  <div class="p-3 m-3">
    <div class="grid grid-cols-3 gap-5">
      <div class="p-3 border rounded-lg h-fit">
        <AddTagsToTask v-if="showUpdate" />
        <AddTask v-else />
      </div>
      <div class="col-span-2 p-2 border rounded-lg">
        <div class="flex items-center justify-between">
          <h1 class="text-green-500">Tip: If you want to add or change task tags, click the task field.</h1>
          <h1 class="font-bold">Total: {{ tasks.length }}</h1>
        </div>
        <div class="flex flex-wrap max-h-screen gap-3 mt-5 overflow-auto">
          <div v-for="(t, idx) in tasks" :key="idx" @click="selectTask(t)"
            class="w-full p-2 border rounded-lg cursor-pointer h-fit hover:border-green-400"
            :class="{ 'border-green-500': t?.id === selectedTask?.id }">
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