<script setup>

</script>

<template>
    <section id="header" class="relative w-full pt-14">
        <div class="relative z-10 max-w-6xl px-6 mx-auto mb-12">
            <div class="flex items-center max-w-screen-sm mb-8 space-x-2">
                <div class="w-2 h-4 inline-block rounded-[1px] bg-gradient-to-b from-[#4575cd] to-[#7ea7e9]"></div>
                <p class="text-base font-semibold leading-5 text-gray-800 -tracking-wide">
                    IT-ForeLead LLC.
                </p>
            </div>
            <h1 class="text-5xl tracking-tight font-semibold mb-4">
                <span class="text-blue-600">Help to grow</span>
                <span class="text-4xl">- это новаторская платформа, призванная способствовать обмену знаниями и наставничеству в сообществе программистов.</span>
            </h1>
            <p size="500" class="text-2xl text-gray-600 leading-8 -tracking-[0.01em]">
                Это динамичная экосистема, где младшие разработчики могут учиться у опытных профессионалов, а старшие могут предлагать обзоры кода и получать вознаграждение. Наша платформа также включает в себя передовые алгоритмы сопоставления ИИ для объединения наставников (старших разработчиков) с подопечными на основе их предпочтительных стеков программирования.
            </p>
        </div>
        <div class="flex justify-center">
            <div class="relative z-10 overflow-hidden w-[960px] h-[540px] rounded-lg">
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
</style>