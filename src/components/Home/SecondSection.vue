<script setup>
import CodeIcon from '../../assets/icons/CodeIcon.vue'

</script>

<template>
    <section class="pt-28">
        <div class="max-w-6xl px-6 mx-auto relative z-[3]">
            <div class="text-gray-900 font-semibold text-4xl leading-10 -tracking-[0.01em] max-w-3xl mb-12">
                Lorem ipsum dolor sit amet.
            </div>
            <div class="grid grid-cols-3 gap-8">
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Lorem ipsum dolor sit.
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, neque.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Lorem, ipsum dolor.
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit tempore.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam odit ex.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Lorem, ipsum dolor.
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt fuga.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, illo. Dolore, corporis!
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Lorem ipsum dolor sit.
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis.
                    </p>
                </div>
            </div>
        </div>
        <div class="absolute inset-0 z-[2] custom-box-shadow"></div>
        <div class="absolute inset-0 z-[1] bg-gradient"></div>
    </section>
</template>

<style scoped>
.bg-gradient {
    background-color: rgba(210, 207, 216, 0.3);
    -webkit-mask-image: url(/images/waves.svg);
    -webkit-mask-size: 64px 32px;
    -webkit-mask-repeat: repeat;
}
.custom-box-shadow {
    box-shadow: rgb(255, 255, 255) 0px 150px 200px inset, rgb(255, 255, 255) 0px -200px 200px inset;
}
</style>