<script setup>
import UserIcon from '../assets/icons/UserIcon.vue'

</script>

<template>
    <header class="w-full bg-base-100">
        <div class="container mx-auto navbar">
            <div class="flex-1">
                <a class="text-xl normal-case btn btn-ghost">Help2Grow</a>
            </div>
            <div class="flex-none gap-2">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full">
                            <UserIcon class="w-8 h-8" />
                        </div>
                    </label>
                    <ul tabindex="0"
                        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a>
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped></style>