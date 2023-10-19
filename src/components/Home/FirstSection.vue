<script setup>

</script>

<template>
    <section class="pt-14 md:pt-28">
        <div class="relative mx-auto overflow-hidden bg-blue-950 text-white z-[6] max-w-7xl rounded-2xl py-16 md:px-24 px-8 backround">
            <div class="max-w-3xl">
                <div class="flex items-center max-w-screen-sm mb-6 space-x-2 md:mb-8">
                    <div class="w-2 h-4 inline-block rounded-[1px] bg-gradient-to-b from-[#4575cd] to-[#7ea7e9]"></div>
                    <p class="text-base font-semibold leading-5 text-white -tracking-wide">
                        Advantages
                    </p>
                </div>
                <h2 class="mb-4 text-xl font-semibold leading-7 tracking-tight md:leading-10 md:text-3xl">
                    We developed the platform from scratch,
                    <span class="text-white/50">
                        which could be the solution to the problems that all young programmers face.
                    </span>
                </h2>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-3 lg:gap-8">
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">01</div>
                    <h3 class="text-lg md:text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Project Collaboration
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        The platform doubles as an incubator for innovative coding projects. "Grow-Together" releases coding ideas with a plethora of tasks to be implemented. Both mentors and mentees can collaborate on these real-world projects, fostering practical application of knowledge and experience.
                    </p>
                </div>
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">02</div>
                    <h3 class="text-lg md:text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Community Interaction
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        A thriving community forum allows users to engage in discussions, ask questions, and share insights. This open dialogue not only builds a supportive community but also facilitates knowledge exchange beyond mentorship.
                    </p>
                </div>
                <div class="">
                    <div class="text-xl leading-7 -tracking-[0.01em] mb-3">03</div>
                    <h3 class="text-lg md:text-xl font-semibold leading-6 -tracking-[0.01em] mb-2">
                        Monetary Incentives
                    </h3>
                    <p class="text-base leading-5 text-white/50">
                        "Grow-Together" introduces a unique compensation model, where senior mentors receive compensation for their code review and mentoring services. This financial incentive ensures the active participation of experienced developers and encourages knowledge sharing.
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