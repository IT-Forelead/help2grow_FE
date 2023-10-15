<script setup>
import TranslateIcon from '../assets/icons/TranslateIcon.vue'

</script>

<template>
    <div class="relative z-10 px-4 py-2 text-center text-white bg-cyan-950">
        <h4 class="text-sm font-medium leading-4">
            Проект «Help to Grow» создан для конкурса President Tech Award
        </h4>
    </div>
    <header class="py-4 text-gray-900 bg-white z-[99999] sticky top-0 left-0">
        <div class="flex items-center justify-between max-w-6xl mx-auto">
            <a href="/">
                <div class="font-semibold text-blue-600 uppercase tracking-[-.01em] -space-x-0.5">
                    <span class="text-[2rem]">H</span>
                    <span class="text-[2.1rem]">e</span>
                    <span class="text-[2.2rem]">l</span>
                    <span class="text-[2.3rem]">p</span>
                    <span class="text-[2.4rem]">2</span>
                    <span class="text-[2.5rem]">G</span>
                    <span class="text-[2.6rem]">r</span>
                    <span class="text-[2.7rem]">o</span>
                    <span class="text-[2.8rem]">w</span>
                </div>
            </a>
            <div>
                <ul class="flex items-center justify-center space-x-1">
                    <!-- <li>
                        <a href="/"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Главная
                        </a>
                    </li> -->
                    <li>
                        <a href="/mentor-matching"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Подбор наставников
                        </a>
                    </li>
                    <li>
                        <a href="/task-assignment"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Назначение задачи
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="px-4 py-2 text-base font-medium text-gray-900 border border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5 hover:border-gray-200">
                            Link 3
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-end space-x-2">

                <div class="flex items-center px-4 py-2 space-x-1 border border-white border-solid rounded-lg cursor-pointer hover:bg-black/5 hover:border-gray-200">
                    <TranslateIcon class="w-5 h-5" />
                    <span
                        class="text-base font-normal text-gray-900 whitespace-nowrap">
                        Русский
                    </span>
                </div>

                <a href="/sign-in"
                    class="px-4 py-2 text-base font-medium text-gray-900 border border-gray-200 border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-black/5">
                    Войти
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped></style>