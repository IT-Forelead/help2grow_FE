<script setup>
import GithubIcon from '../../assets/icons/GithubIcon.vue'

</script>

<template>
    <section id="header" class="relative w-full pt-14">
        <div class="relative z-10 max-w-6xl px-6 mx-auto mb-12">
            <div class="flex items-center max-w-screen-sm mb-4 space-x-2 md:mb-8">
                <div class="w-2 h-4 inline-block rounded-[1px] bg-gradient-to-b from-[#4575cd] to-[#7ea7e9]"></div>
                <p class="text-base font-semibold leading-5 text-gray-800 -tracking-wide">
                    IT-ForeLead LLC.
                </p>
            </div>
            <h1 class="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
                <span class="mr-1 text-blue-600">Help to grow</span>
                <span class="text-2xl text-black md:text-4xl">
                    is an innovative platform designed to promote knowledge sharing and mentorship within the coding community.
                </span>
            </h1>
            <p size="500" class="text-xl md:text-2xl text-gray-600 leading-8 -tracking-[0.01em]">
                It's a dynamic ecosystem where junior developers can learn from seasoned professionals, and seniors can offer code reviews and earn compensation. Our platform also incorporates advanced AI matching algorithms to pair mentors (senior developers) with mentees based on their preferred programming stacks.
            </p>
            <!-- <div class="flex flex-col gap-3 mt-4 md:flex-row">
                <a href=""
                    class="inline-flex items-center justify-center px-4 space-x-1 text-sm font-medium text-white rounded-lg outline-none cursor-pointer hover:bg-blue-900 btn-shadow-effect bg-blue-950 btn-shadow h-9 whitespace-nowrap">
                    <GithubIcon class="w-6 h-6 mr-1" />
                    Repository for Frontend
                </a>
                <a href=""
                    class="inline-flex items-center justify-center px-4 space-x-1 text-sm font-medium text-white rounded-lg outline-none cursor-pointer hover:bg-blue-900 btn-shadow-effect bg-blue-950 btn-shadow h-9 whitespace-nowrap">
                    <GithubIcon class="w-6 h-6 mr-1" />
                    Repository for Backend
                </a>
                <a href=""
                    class="inline-flex items-center justify-center px-4 space-x-1 text-sm font-medium text-white rounded-lg outline-none cursor-pointer hover:bg-blue-900 btn-shadow-effect bg-blue-950 btn-shadow h-9 whitespace-nowrap">
                    <GithubIcon class="w-6 h-6 mr-1" />
                    Repository for AI
                </a>
            </div> -->
        </div>
        <div class="flex justify-center">
            <div class="relative z-10 overflow-hidden w-[342px] h-[184px] md:w-[960px] md:h-[540px] rounded-lg">
                <img src="/header-image.jpg" class="w-full rounded-lg" alt="IT-Forelead">
            </div>
        </div>
        <div class="absolute inset-0 overflow-hidden -bottom-20 -top-20">
            <div class="absolute top-1/2 left-1/2 w-[150vw] h-[1000px] hue-rotate-0 background-gradient">
                <div
                    class="absolute inset-0 bg-[url(/guilloche.svg)] bg-repeat bg-right-top bg-[length:20px_20px] mix-blend-overlay">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.background-gradient {
    transform: translate3d(-50%, -50%, 0px);
    -webkit-mask-image: radial-gradient(farthest-side at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    background-image: linear-gradient(90deg, rgba(126, 167, 233, 1), rgba(124, 239, 183), 1);
}

.btn-shadow-effect {
  box-shadow: 0 4px 4px rgba(8, 8, 8, .08), 0 1px 2px rgba(8, 8, 8, .2), inset 0 6px 12px rgba(255, 255, 255, .12), inset 0 1px 1px rgba(255, 255, 255, .2);
}
</style>