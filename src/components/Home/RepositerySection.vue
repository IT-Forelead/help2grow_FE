<script setup>
import GithubIcon from '../../assets/icons/GithubIcon.vue'
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue'

</script>

<template>
    <section class="pt-14 md:pt-28">
        <div
            class="relative px-8 py-16 mx-auto overflow-hidden text-white z-[6] bg-blue-950 max-w-7xl rounded-2xl md:px-24 backround">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div class="">
                    <h3 class="text-4xl font-semibold leading-10 -tracking-[0.01em] mb-2">
                        Start building today
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Unmatched access to money movement, bank accounts, card networks, and bank capital. You're in the
                        driver's seat to build your own products, on your terms, without layers in between.
                    </p>
                </div>
                <div class="flex flex-col justify-center space-y-4">
                    <div
                        class="flex items-center justify-between z-[7] px-6 py-4 rounded-lg shadow-sm cursor-pointer bg-white/5 hover:bg-white/10">
                        <div class="flex items-center space-x-2">
                            <GithubIcon class="w-8 h-8" />
                            <div>
                                <h3 class="font-medium text-white">
                                    Github
                                </h3>
                                <p class="text-sm text-white/70">Repository for Frontend</p>
                            </div>
                        </div>
                        <CaretRightIcon class="w-6 h-6" />
                    </div>
                    <div
                        class="flex items-center justify-between z-[7] px-6 py-4 rounded-lg shadow-sm cursor-pointer bg-white/5 hover:bg-white/10">
                        <div class="flex items-center space-x-2">
                            <GithubIcon class="w-8 h-8" />
                            <div>
                                <h3 class="font-medium text-white">Github</h3>
                                <p class="text-sm text-white/70">Repository for Backend</p>
                            </div>
                        </div>
                        <CaretRightIcon class="w-6 h-6" />
                    </div>
                    <div
                        class="flex items-center justify-between z-[7] px-6 py-4 rounded-lg shadow-sm cursor-pointer bg-white/5 hover:bg-white/10">
                        <div class="flex items-center space-x-2">
                            <GithubIcon class="w-8 h-8" />
                            <div>
                                <h3 class="font-medium text-white">Github</h3>
                                <p class="text-sm text-white/70">Repository for AI</p>
                            </div>
                        </div>
                        <CaretRightIcon class="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.backround::after {
    content: "";
    -webkit-mask-image: url('/waves.svg');
    -webkit-mask-size: 64px 32px;
    -webkit-mask-repeat: repeat;
    -webkit-mask-position: center center;
    background-repeat: repeat;
    background-position: center center;
    background-size: 64px, 32px;
    position: absolute;
    inset: 0px;
    opacity: 0.4;
}

.backround::before {
    content: "";
    width: 100%;
    height: 60%;
    background-image: linear-gradient(133deg, rgba(30, 65, 153, 1) 12%, rgba(148, 239, 183, 1) 97%);
    opacity: 0.4;
    filter: blur(100px);
    position: absolute;
    left: 50%;
    margin-left: -50%;
    bottom: -50%;
}</style>