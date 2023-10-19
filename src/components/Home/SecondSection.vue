<script setup>
import CodeIcon from '../../assets/icons/CodeIcon.vue'

</script>

<template>
    <section class="pt-14 md:pt-28">
        <div class="max-w-6xl px-6 mx-auto relative z-[3]">
            <div class="text-gray-900 font-semibold text-4xl leading-10 -tracking-[0.01em] max-w-3xl mb-6 md:mb-12">
                Key Features
            </div>
            <div class="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Mentor-Mentee Matching
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        "Grow-Together" utilizes cutting-edge AI algorithms to match aspiring junior developers with experienced senior mentors. The matching process takes into account programming stacks, skill levels, and individual learning goals to create meaningful mentor-mentee connections.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Code Review and Feedback
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Senior developers can leverage the platform to provide in-depth code reviews and constructive feedback to junior developers. This feedback loop is instrumental in helping juniors improve their coding skills and make informed progress.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Skill Development
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Junior developers can engage in one-on-one or group mentoring sessions, covering topics ranging from coding best practices to project guidance. This hands-on learning approach allows juniors to accelerate their skill development under the guidance of industry experts.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Learning Resources
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        The platform offers a wealth of learning resources, including tutorials, coding challenges, and reference materials, to supplement the learning journey for juniors.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Skill Badges
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        As juniors achieve specific milestones, they can earn skill badges that serve as a testament to their growing proficiency in their chosen programming stacks. This gamification element adds an extra layer of motivation to the learning process.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Data Privacy
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        "Grow-Together" takes data privacy and security seriously, employing robust measures to protect user information and ensure a safe and confidential learning environment.
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
    -webkit-mask-image: url(/waves.svg);
    -webkit-mask-size: 64px 32px;
    -webkit-mask-repeat: repeat;
}
.custom-box-shadow {
    box-shadow: rgb(255, 255, 255) 0px 150px 200px inset, rgb(255, 255, 255) 0px -200px 200px inset;
}
</style>