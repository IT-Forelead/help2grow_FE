<script setup>
import TranslateIcon from '../assets/icons/TranslateIcon.vue'

</script>

<template>
    <div class="relative z-10 px-4 py-2 text-center text-white bg-cyan-950">
        <h4 class="text-sm font-medium leading-4">
            Project "Help to Grow" for the President Tech Award contest
        </h4>
    </div>
    <header class="py-2 text-gray-900 bg-white z-[99999] sticky top-0 left-0">
        <div class="flex items-center justify-between max-w-6xl mx-auto">
            <a href="/">
                <div class="font-semibold text-blue-600 uppercase tracking-[-.01em]">
                    <span class="text-[1rem]">H</span>
                    <span class="text-[1.1rem]">e</span>
                    <span class="text-[1.2rem]">l</span>
                    <span class="text-[1.3rem]">p</span>
                    <span class="text-[1.4rem]">2</span>
                    <span class="text-[1.5rem]">G</span>
                    <span class="text-[1.6rem]">r</span>
                    <span class="text-[1.7rem]">o</span>
                    <span class="text-[1.8rem]">w</span>
                </div>
            </a>
            <div>
                <ul class="flex items-center justify-center space-x-1">
                    <li>
                        <router-link to="/mentor-matching"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Mentor matching
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/tasks"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Categorization of tasks
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/task-assignment"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Task assignment
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-end space-x-2">

                <div
                    class="flex items-center px-4 py-2 space-x-1 border border-white border-solid rounded-lg cursor-pointer hover:bg-black/5 hover:border-gray-200">
                    <TranslateIcon class="w-5 h-5" />
                    <span class="text-base font-normal text-gray-900 whitespace-nowrap">
                        English
                    </span>
                </div>

                <a href="/sign-in"
                    class="px-4 py-2 text-base font-medium text-gray-900 border border-gray-200 border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5">
                    Sign in
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
.router-link-active {
    background-color: rgb(0 0 0 / 0.05);
    border-color: rgb(229 231 235 / 1);
}
</style>