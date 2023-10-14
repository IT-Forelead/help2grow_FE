<script setup>

</script>

<template>
    <div class="flex items-center justify-center w-full py-20 bg-base-200">
        <div class="w-3/5 px-8 py-6 border border-solid rounded border-base-100 bg-base-100">
            <h1 class="mb-4 text-5xl font-bold">Sign up</h1>
            <div class="grid grid-cols-3 gap-3">
                <div>
                    <ul class="steps steps-vertical">
                        <li class="step step-primary">Register</li>
                        <li class="step step-primary">Choose plan</li>
                        <li class="step">Purchase</li>
                        <li class="step">Receive Product</li>
                    </ul>
                </div>
                <div class="col-span-2">
                    <div class="grid grid-cols-2 gap-y-4">
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Firstname</span>
                            </label>
                            <input type="text" placeholder="Enter your firstname"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Lastname</span>
                            </label>
                            <input type="text" placeholder="Enter your lastname"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">IT knowledge:</span>
                            </label>
                            <select class="select select-bordered">
                                <option disabled selected>Select your main skill</option>
                                <option>Beginner</option>
                                <option>Junior</option>
                                <option>Middle</option>
                                <option>Sineor</option>
                            </select>
                        </div>
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Enter your phone"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Password Confirmation</span>
                            </label>
                            <input type="password" placeholder="Enter your password again"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="w-full max-w-xs"></div>
                        <div class="flex justify-end w-full max-w-xs mt-2 space-x-2">
                            <button class="btn btn-neutral">Reset</button>
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="w-3/5 px-8 py-6 border border-solid rounded border-base-100 bg-base-100">
            <h1 class="mb-4 text-5xl font-bold">Sign up</h1>
            <div class="grid grid-cols-3 gap-3">
                <div>
                    <ul class="steps steps-vertical">
                        <li class="step step-primary">Register</li>
                        <li class="step step-primary">Choose plan</li>
                        <li class="step">Purchase</li>
                        <li class="step">Receive Product</li>
                    </ul>
                </div>
                <div class="col-span-2">
                    <div class="grid grid-cols-2 gap-y-4">
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Github</span>
                            </label>
                            <input type="text" placeholder="Enter your github link"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Linkedin</span>
                            </label>
                            <input type="text" placeholder="Enter your linkedin link"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Main skill:</span>
                            </label>
                            <select class="select select-bordered">
                                <option disabled selected>Select your main skill</option>
                                <option>Scala</option>
                                <option>Java</option>
                                <option>Golang</option>
                                <option>Python</option>
                                <option>TypeScript</option>
                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Another skills:</span>
                            </label>
                            <select class="select select-bordered">
                                <option disabled selected>Select your another skill</option>
                                <option>Scala</option>
                                <option>Java</option>
                                <option>Golang</option>
                                <option>Python</option>
                                <option>TypeScript</option>
                            </select>
                        </div>
                        <div class="form-control col-span-2 w-full max-w-md">
                            <label class="label">
                                <span class="label-text">Recommendation</span>
                            </label>
                            <textarea class="textarea textarea-bordered h-24" placeholder="What books or video tutorials do you recommend for young programmers to increase their knowledge and experience?"></textarea>
                        </div>
                        <div class="w-full max-w-xs"></div>
                        <div class="flex justify-end w-full max-w-xs mt-2 space-x-2">
                            <button class="btn btn-neutral">Reset</button>
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<style scoped></style>