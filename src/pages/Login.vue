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
    <div class="container d-flex justify-content-center align-items-center min-vh-80 p-3">
        <div class="col-lg-6 rounded-4 bg-white" >
           <div class="col-lg-12 rounded-4 d-flex justify-content-center align-items-center backgroundImage" style="background-image: url('https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
               <h3 class="fw-bold text-white">SIGN IN</h3>
           </div> 
           <div class="col-lg-12 p-3">
              <div class="row justify-content-center align-items-center">
                <form
                ref="formRef"
                @submit.prevent="login"
                >
                    <div class="input-group mb-3">
                        <input type="email" 
                        v-model="form.email" 
                        required 
                        class="form-control" 
                        placeholder="Email address">
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" 
                        v-model="form.password" 
                        required class="form-control" 
                        placeholder="Password">
                    </div>
                    <div class="input-group mb-3 d-flex justify-content-between">
                        <div class="forgot">
                            <small><a href="#">Forgot Password?</a></small>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <button class="btn btn-lg btn-primary fs-6" type="submit" :disabled="!form.email || !form.password">
                            <span v-if="loading">Working ..</span>
                            <span v-else>Login</span>
                        </button>
                    </div>
                </form>
                    
                    <div class="row">
                        <small>Don't have account? <router-link to="/register">Sign Up</router-link></small>
                    </div>
                    <p v-if="errors" class="alert alert-danger">{{ errors }}</p>
                </div>
            </div> 
        </div>
    </div>
</template>

<style scoped>
    .backgroundImage {
        background-position: 0;
        background-repeat: no-repeat;
        height: 200px;
        margin-bottom: 20px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }
    
</style>