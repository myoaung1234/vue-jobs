<script setup>
import { routerPush } from '../router';
import { api, isFetchError } from '../services'
import { useUserStore } from '../store/user'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { CONFIG } from '../config'
const route = useRoute()
const formRef = ref(null)
const form = reactive({
    title: '',
    company: '',
    company_logo: '',
    category: '',
    salary: '',
    description: ''
})

const errors = ref()
const loading = ref(false)
const uploading = ref(false)
const uploadError = ref()

const id = computed(() => route.params.id)

async function fetchJob (id) {
    const job = await api.jobs.getJob(id).then(res => res.data?.data[0]).catch((err) => {
        alert('Failed to load job info!')
    })
    if(job) {
        form.title = job.title,
        form.company = job.company,
        form.company_logo = job.company_logo,
        form.category = job.category,
        form.salary = job.salary,
        form.description = job.description
    }
}

onMounted(() => {
    if (id.value) fetchJob(id.value)
})

const updateJob = async () => {
    errors.value = ""
    if (!formRef.value?.checkValidity()) return
    loading.value = true;
    try {
        const result = await api.jobs.updateJob(id.value, form)
        await routerPush('home')
    } catch (e) {
        console.log(e)
        loading.value = false;
        if (isFetchError(e)) {
            errors.value = e.error?.errors
            return
        }
    }
}
const handleFileUpload = async (e) => {
    let file = e.target.files[0]
    let formData = new FormData();


    formData.append('image', file);
    uploading.value = true
    try {
        const response = await fetch(CONFIG.API_HOST + "/api/image_upload", {
            method: 'POST',
            headers: {
                // 'Authorization': 'Bearer ' + this.token,
                'Accept': 'application/json',
            },
            body: formData
        })
        const result = await response.json()
        uploading.value = false

        if (result?.image) { form.company_logo = result.image }
        if (result?.errors) { uploadError.value = result?.errors }
    } catch (error) {
        uploading.value = false
        console.log(error)
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
                                <div class="card-body p-4">
                                    <h2 class="text-uppercase text-center mb-5 fw-bold color">Edit Job</h2>
                                    <form
                                    ref="formRef"
                                    @submit.prevent="updateJob"
                                    >
                                        <div class="form-outline mb-4">
                                            <input type="text" class="form-control shadow-none"
                                            v-model="form.title" placeholder="Title" />
                                            <p class="text-danger m-2" v-if="errors?.title">{{ errors.title[0] }}</p>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="text" class="form-control shadow-none"
                                                    v-model="form.category" placeholder="Category" />
                                                    <p class="text-danger m-2" v-if="errors?.category">{{ errors.category[0] }}</p>
                                                </div>
                                                </div>
                                                <div class="col">
                                                <div class="form-outline">
                                                    <input type="text" class="form-control shadow-none"
                                                    v-model="form.salary" placeholder="Salary" />
                                                </div>
                                                </div>
                                        
                                        
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="text" class="form-control shadow-none"
                                                    v-model="form.company" placeholder="Company" />
                                                    <p class="text-danger m-2" v-if="errors?.company">{{ errors.company[0] }}</p>
                                                </div>
                                                </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label for="image-upload" class="mb-2">Company Logo</label>
                                                    <input type="file" id="image-upload" @change="handleFileUpload($event)" class="form-control shadow-none" placeholder="Company Logo" />
                                                    <p class="text-danger m-2" v-if="uploadError?.image">{{ uploadError?.image[0] }}</p>
                                                    <p class="text-success m-2" v-if="uploading">Uploading ..</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <p v-if="form.company_logo">
                                                    <img :src="form.company_logo" alt="" style="width: 100px; "/>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <textarea class="form-control shadow-none" rows="4"
                                            v-model="form.description" placeholder="Description"></textarea>
                                            <p class="text-danger m-2" v-if="errors?.description">{{ errors.description[0] }}</p>
                                        </div>
                                        <router-link to="/" class="btn btn-secondary me-2">Cancel</router-link>
                                        <button type="submit" class="btn btn-success btn-block">
                                            <span v-if="loading">Working ..</span>
                                            <span v-else>Save</span>
                                        </button>
                                    </form>
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
    height: 100vh;
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
}</style>