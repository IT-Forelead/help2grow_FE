<script setup>

</script>

<template>
    <section class="pt-28">
        <div class="relative mx-auto overflow-hidden bg-blue-950 text-white z-[6] max-w-7xl rounded-2xl py-16 px-24 backround">
            <div class="max-w-3xl">
                <div class="flex items-center max-w-screen-sm mb-8 space-x-2">
                    <div class="w-2 h-4 inline-block rounded-[1px] bg-gradient-to-b from-[#4575cd] to-[#7ea7e9]"></div>
                    <p class="text-base font-semibold leading-5 text-white -tracking-wide">
                        Преимущества
                    </p>
                </div>
                <h2 class="mb-4 text-3xl font-semibold leading-10 tracking-tight">
                    Мы с нуля разработали платформу,
                    <span class="text-white/50">
                        которая может стать решением проблем, с которыми сталкиваются все молодые программисты.
                    </span>
                </h2>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-3 lg:gap-8">
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">01</div>
                    <h3 class="text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Сотрудничество над проектами
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Платформа одновременно служит инкубатором для инновационных проектов в области кодирования. «Grow-Together» публикует идеи кодирования с множеством задач, которые необходимо реализовать. И наставники, и подопечные могут сотрудничать в этих реальных проектах, способствуя практическому применению знаний и опыта.
                    </p>
                </div>
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">02</div>
                    <h3 class="text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Взаимодействие с сообществом
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Процветающий форум сообщества позволяет пользователям участвовать в обсуждениях, задавать вопросы и делиться идеями. Этот открытый диалог не только создает поддерживающее сообщество, но и облегчает обмен знаниями, выходящий за рамки наставничества.
                    </p>
                </div>
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">03</div>
                    <h3 class="text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Сотрудничество в проектах
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Платформа одновременно служит инкубатором инновационных проектов в области кодирования. «Grow-Together» публикует идеи кодирования с множеством задач, которые необходимо реализовать. И наставники, и подопечные могут сотрудничать в этих реальных проектах, способствуя практическому применению знаний и опыта.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.backround::after {
    content: "";
    filter: invert(1);
    position: absolute;
    inset: 0px;
    background-image: url(/guilloche.svg);
    background-repeat: repeat;
    background-position: right top;
    background-size: 20px, 20px;
    z-index: 0;
    opacity: 0.075;
    background-clip: padding-box;
    -webkit-mask-image: linear-gradient(160deg, rgb(0, 0, 0), rgba(0, 0, 0, 0));
}
</style>