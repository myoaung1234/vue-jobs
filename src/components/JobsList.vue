<script setup>
import { storeToRefs } from 'pinia';
import Pagination from '../components/Pagination.vue';
import { useJobs } from '../composables/useJobs'
import { routerPush } from '../router';
import { api, isFetchError } from '../services'
import { useUserStore } from '../store/user'
const {
  fetchJobs,
  jobsCount,
  jobs,
  page,
  totalPage,
  changePage,
} = useJobs()

await fetchJobs()
const { user } = storeToRefs(useUserStore())

const deleteJob = async (job) => {
    
    try {

        // if(!user || (user && user.value.id != job.author.id)){
        //     return alert('You do not have permission to delete this!')
        // }

        let yes = confirm('Are you sure to delete this job post?')
        if(!yes){return}
        const result = await api.jobs.deleteJob(id)
        await fetchJobs()
    } catch (e) {
        console.log(e)
        if (isFetchError(e)) {
            errors.value = e.error?.errors
            return
        }
    }
}
</script>

<template>
    <div class="col-lg-12">
        <table class="table align-middle mb-4 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>#</th>
                    <th>Company Logo</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Salary</th>
                    <th>Posted By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(job, index) in jobs"
                :key="job.id"
                >
                    <td>
                        <p class="fw-normal">{{ job.id }}</p>
                    </td>
                    <td>
                        <div style="width: 45px; height: 45px ; overflow: hidden;" class="rounded-circle" v-if="job.company_logo">
                        <img
                        :src="job.company_logo"
                        alt=""
                        style="object-fit: cover;"
                        class="w-100 h-100"
                        />
                        </div>
                    </td>
                    
                    <td>
                        <p class="fw-normal">{{ job.title }}</p>
                    </td>
                    <td>
                        <p class="fw-normal">{{ job.company }}</p>
                    </td>
                    <td>
                        <p class="fw-normal">{{ job.category }}</p>
                    </td>
                    <td>
                        <p class="fw-normal">{{ job.salary }}</p>
                    </td>
                    <td class="w-25">
                        <p class="fw-normal">{{ job.author?.name }}</p>
                    </td>
                    <td class="">
                        <router-link v-if="user && user.id ==job.author.id" :to="{ name: 'editjob', params: { id: job.id } }" class="btn btn-success me-3">Edit</router-link>
                        <button v-if="user && user.id == job.author.id" @click="deleteJob(job)" type="button" class="btn btn-danger">Delete</button>
                        <p v-if="!user && user.id != job.author.id">-</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <Pagination @page-change="changePage" :totalPage="totalPage" :page="page"/>
</template>

<style scope>
    
</style>