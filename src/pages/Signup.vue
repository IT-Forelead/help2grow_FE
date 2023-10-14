<script setup>

</script>

<template>
    <div class="flex items-center justify-center w-full py-20 bg-base-200">
        <!-- <div class="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            
        </div> -->
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
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Enter your phone"
                                class="w-full max-w-xs input input-bordered" />
                        </div>
                        <div class="w-full max-w-xs form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email"
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
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>