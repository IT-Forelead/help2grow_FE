<script setup>
import { reactive, ref } from 'vue'
import SpinnersRingResizeIcon from '../assets/icons/SpinnersRingResizeIcon.vue'

const isLoading = ref(false)

const submitForm = reactive({
    email: '',
    password: ''
})

const clearForm = () => {
    submitForm.email = ''
    submitForm.password = ''
}

</script>

<template>
    <main class="flex items-center h-screen overflow-hidden bg-white">
        <div class="flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6">
            <router-link to="/">
                <div class="flex items-center justify-center space-x-2">
                    <img src="/logo.png" alt="logo" class="w-12" />
                    <div class="text-2xl font-bold leading-none text-black whitespace-nowrap">
                        Help to Grow
                    </div>
                </div>
            </router-link>
            <div class="relative mt-12 sm:mt-16 z-[1]">
                <svg viewBox="0 0 1090 1090" aria-hidden="true" fill="none" preserveAspectRatio="none" width="1090"
                    height="1090"
                    class="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto">
                    <circle cx="545" cy="545" r="544.5"></circle>
                    <circle cx="545" cy="545" r="480.5"></circle>
                    <circle cx="545" cy="545" r="416.5"></circle>
                    <circle cx="545" cy="545" r="352.5"></circle>
                </svg>
                <h1 class="text-2xl font-medium tracking-tight text-center text-gray-900">
                    Sign in to account
                </h1>
                <p class="mt-3 text-lg text-center text-gray-600">
                    Don't have an account?
                    <router-link to="/sign-up" class="text-blue-500">Sign up</router-link>
                    for a free trial.
                </p>
            </div>
            <div
                class="-mx-4 z-[2] mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24 rounded-xl">
                <div class="space-y-6">
                    <div>
                        <label for="email" class="block mb-2 text-base font-semibold text-gray-900">
                            Email address
                        </label>
                        <input v-model="submitForm.email" id="email" type="email"
                            class="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-2.5 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter your email">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-base font-semibold text-gray-900">
                            Password
                        </label>
                        <input v-model="submitForm.password" id="password" type="password"
                            class="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-2.5 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter your password">
                    </div>
                </div>
                <button v-if="!isLoading" @click="signIn()"
                    class="inline-flex items-center justify-center rounded-lg p-2.5 text-base font-semibold bg-blue-600 text-white hover:bg-blue-800 mt-8 w-full cursor-pointer"
                    type="submit">
                    Sign in to account
                </button>
                <button v-else
                    class="inline-flex items-center justify-center space-x-2 rounded-lg p-2.5 text-base font-semibold bg-blue-800 text-white mt-8 w-full cursor-default">
                    <SpinnersRingResizeIcon class="w-6 h-6 text-white" />
                    <span>Sign in to account</span>
                </button>
            </div>
        </div>
    </main>
</template>
<style scoped></style>