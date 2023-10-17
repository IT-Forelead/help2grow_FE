<script setup>
import PhoneIcon from '../assets/icons/PhoneIcon.vue'
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue'
import InstagramIcon from '../assets/icons/InstagramIcon.vue'
import TelegramIcon from '../assets/icons/TelegramIcon.vue'

</script>

<template>
    <footer class="mt-0 bg-white md:mt-24">
        <div class="container py-12 mx-auto">
            <div class="grid grid-cols-2 gap-6 md:gap-12 md:grid-cols-4">
                <div class="col-span-2 px-6">
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
                    <p class="w-full text-base text-gray-600 md:w-2/3">
                        «Grow-Together» — это ваш путь к росту, сотрудничеству и успеху в мире программирования.
                    </p>
                </div>
                <div class="col-span-2 px-6 md:col-span-1">
                    <h5 class="mb-4 text-lg font-medium leading-5 text-gray-600 md:mb-6">
                        Категории
                    </h5>
                    <ul class="space-y-2">
                        <li class="text-base text-gray-600">
                            <a href="/mentor-matching" class="inline-block text-gray-900 duration-200 cursor-pointer hover:text-blue-600">
                                Подбор наставников
                            </a>
                        </li>
                        <li class="text-base text-gray-600">
                            <a href="/task-assignment" class="inline-block text-gray-900 duration-200 cursor-pointer hover:text-blue-600">
                                Назначение задачи
                            </a>
                        </li>
                        <!-- <li class="text-base text-gray-600">
                            <a href="#" class="inline-block text-gray-900 duration-200 cursor-pointer hover:text-blue-600">
                                Link 3
                            </a>
                        </li> -->
                    </ul>
                </div>
                <div class="col-span-2 px-6 md:col-span-1">
                    <h5 class="mb-4 text-lg font-medium leading-5 text-gray-600 md:mb-6">
                        Контакты
                    </h5>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-2">
                            <PhoneIcon class="w-6 h-6 text-gray-600" />
                            <span class="text-base text-gray-900">
                                99 446-12-30
                            </span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <LinkedinIcon class="w-6 h-6 text-gray-600" />
                            <a href="https://www.linkedin.com/company/it-forelead" target="_blank"
                                class="inline-block text-gray-900 duration-200 cursor-pointer hover:text-blue-600">
                                @itforelead
                            </a>
                        </li>
                        <li class="flex items-center space-x-2">
                            <InstagramIcon class="w-6 h-6 text-gray-600" />
                            <a href="https://www.instagram.com/itforelead" target="_blank"
                                class="inline-block text-gray-900 duration-200 cursor-pointer hover:text-blue-600">
                                @itforelead
                            </a>
                        </li>
                        <li class="flex items-center space-x-2">
                            <TelegramIcon class="w-6 h-6 text-gray-600" />
                            <a href="https://t.me/itforelead" target="_blank"
                                class="inline-block text-gray-900 duration-200 cursor-pointer hover:text-blue-600">
                                @itforelead
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center py-4 border-t border-gray-900/10">
                <span class="text-sm text-gray-900">
                    <a href="http://it-forelead.uz" class="cursor-pointer hover:text-[#0167F3]">
                        IT-ForeLead
                    </a>
                    © 2023. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>