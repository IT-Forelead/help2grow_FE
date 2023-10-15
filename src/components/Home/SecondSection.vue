<script setup>
import CodeIcon from '../../assets/icons/CodeIcon.vue'

</script>

<template>
    <section class="pt-28">
        <div class="max-w-6xl px-6 mx-auto relative z-[3]">
            <div class="text-gray-900 font-semibold text-4xl leading-10 -tracking-[0.01em] max-w-3xl mb-12">
                Ключевая особенность
            </div>
            <div class="grid grid-cols-3 gap-8">
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Сопоставление наставников и подопечных
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        «Grow-Together» использует передовые алгоритмы искусственного интеллекта для подбора начинающих младших разработчиков с опытными старшими наставниками. В процессе сопоставления учитываются стеки программирования, уровни навыков и индивидуальные цели обучения для создания значимых связей между наставником и учеником.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Проверка кода и обратная связь
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Старшие разработчики могут использовать платформу для предоставления углубленных проверок кода и конструктивной обратной связи младшим разработчикам. Этот цикл обратной связи помогает юниорам улучшить свои навыки программирования и добиться осознанного прогресса.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Развитие навыков
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Младшие разработчики могут участвовать в индивидуальных или групповых занятиях по наставничеству, охватывающих самые разные темы: от лучших практик кодирования до руководства проектом. Такой подход к практическому обучению позволяет юниорам ускорить развитие своих навыков под руководством отраслевых экспертов.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Учебные ресурсы
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        Платформа предлагает множество учебных ресурсов, включая учебные пособия, задачи по программированию и справочные материалы, которые дополняют процесс обучения юниоров.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Значки навыков
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        По мере того, как юниоры достигают определенных этапов, они могут зарабатывать значки навыков, которые служат свидетельством их растущего мастерства в выбранных ими стеках программирования.
                    </p>
                </div>
                <div
                    class="bg-white/70 rounded-lg min-h-[250px] p-8 border border-solid border-gray-200 shadow shadow-black/5 cursor-pointer hover:bg-white hover:shadow-xl duration-700 hover:shadow-black/5">
                    <div class="mb-6">
                        <CodeIcon class="w-8 h-8 text-blue-600" />
                    </div>
                    <div class="text-base font-medium leading-5 text-gray-700 -tracking-[0.01em] mb-2">
                        Конфиденциальность данных
                    </div>
                    <p class="text-sm leading-5 text-gray-600">
                        «Grow-Together» серьезно относится к конфиденциальности и безопасности данных, применяя надежные меры для защиты пользовательской информации и обеспечения безопасной и конфиденциальной среды обучения.
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