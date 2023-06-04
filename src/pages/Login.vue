<script setup>
    import { routerPush } from '../router';
    import { api, isFetchError } from '../services'
    import { useUserStore } from '../store/user'
    import { reactive, ref } from 'vue'

    const formRef = ref(null)
    const form = reactive({
        email: '',
        password: '',
    })
    const { updateUser } = useUserStore()
    const errors = ref()
    const loading = ref(false)

    const login = async () => {
        errors.value = ""
        if (!formRef.value?.checkValidity()) return
        loading.value = true;
        try {
            const result = await api.users.login({ email: form.email, password: form.password })
            updateUser(result.data.user, result.data.access_token)
            await routerPush('home')
        } catch (e) {
            loading.value = false;
            if (isFetchError(e)) {
                errors.value = e.error?.message
                return
            }
        }
    }
</script>

<template>
    <div class="">
        <section class="bg-image"
        style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 5px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase fw-bold text-center mb-5 text-success">Sign In</h2>
                                    <form
                                    ref="formRef"
                                    @submit.prevent="login"
                                    >
                                        <div class="form-outline mb-4">
                                            <input type="email" class="form-control form-control-lg fs-6 shadow-none"
                                            placeholder="Email" v-model="form.email" required />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" class="form-control form-control-lg fs-6 shadow-none"
                                            placeholder="Password" v-model="form.password" required/>
                                        </div>
                                        <div class="input-group mb-3">
                                            <button class="btn btn-lg btn-success fs-6" type="submit"  :disabled="!form.email || !form.password">
                                                <span v-if="loading">Working ..</span>
                                                <span v-else>Login</span>
                                            </button>
                                        </div>
                                    </form>

                                    <div class="row mb-3">
                                        <small>Don't have account? <router-link to="/register" class="text-warning">Sign Up</router-link></small>
                                    </div>
                                    <p v-if="errors" class="alert alert-danger">{{ errors }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    section {
        height: 82vh;
    }
    .gradient-custom-3 {
        background: #84fab0;
        background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
        background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
    .gradient-custom-4 {
        background: #84fab0;
        background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
        background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
    }

    .color {
        color: #84fab0;
        color: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
        color: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
    
</style>