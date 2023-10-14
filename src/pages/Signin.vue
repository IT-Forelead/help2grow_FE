<script setup>

</script>

<template>
    <div class="flex items-center justify-center w-full py-20 bg-base-200">
        <div class="w-3/5 flex px-8 py-6 rounded bg-base-100">
            <div class="w-1/2">
                <h1 class="mb-4 text-5xl font-bold">Sign up</h1>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" class=" input input-bordered" />
                    <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>

            <div class="divider divider-horizontal"></div>
            <div class="w-1/2">

            </div>
        </div>
    </div>
</template>
<style scoped></style>