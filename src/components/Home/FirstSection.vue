<script setup>

</script>

<template>
    <section class="pt-28">
        <div class="relative mx-auto overflow-hidden bg-blue-950 text-white z-[6] max-w-7xl rounded-2xl py-16 px-24 backround">
            <div class="max-w-3xl">
                <div class="flex items-center max-w-screen-sm mb-8 space-x-2">
                    <div class="w-2 h-4 inline-block rounded-[1px] bg-gradient-to-b from-[#4575cd] to-[#7ea7e9]"></div>
                    <p class="text-base font-semibold leading-5 text-white -tracking-wide">
                        First section
                    </p>
                </div>
                <h2 class="mb-4 text-3xl font-semibold leading-10 tracking-tight">
                    Lorem ipsum dolor sit amet consectetur.
                    <span class="text-white/50">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </span>
                </h2>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-3 lg:gap-8">
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">01</div>
                    <h3 class="text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Lorem ipsum dolor sit amet.
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non architecto illo unde! Natus doloremque veritatis quasi provident, laboriosam facilis.
                    </p>
                </div>
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">02</div>
                    <h3 class="text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Lorem, ipsum dolor.
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis distinctio delectus cupiditate enim doloribus dolorem natus nobis earum consequuntur voluptatibus!
                    </p>
                </div>
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">03</div>
                    <h3 class="text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Lorem ipsum dolor sit.
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum deleniti amet repudiandae quaerat sint animi eaque! Id, sunt repellat!
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