<script setup>
import Pagination from '../components/Pagination.vue';
import { useJobs } from '../composables/useJobs'
const {
  fetchJobs,
  jobsDownloading,
  jobsCount,
  jobs,
  updateJob,
  page,
  changePage,
} = useJobs()

await fetchJobs()
</script>

<template>
    <div class="col-lg-12">
        <div
        v-if="jobsDownloading"
        class="jobs-preview"
        >
            Loading. Please wait...!
        </div>
        <div
        v-else-if="jobs.length === 0"
        class="jobs-preview"
        >
            No jobs are here... yet.
        </div>

        <table class="table align-middle mb-4 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>#</th>
                    <th>Company Logo</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Salary</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(job, index) in jobs"
                :key="index"
                >
                    <td>
                        <p class="fw-normal">{{ job.id }}</p>
                    </td>
                    <td>
                        <div style="width: 45px; height: 45px ; overflow: hidden;" class="rounded-circle">
                        <img
                        src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png"
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
                        <p class="fw-normal">{{ job.description }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>Total Jobs : {{ jobsCount }}</p>
    <Pagination />
</template>

<style scope>
    
</style>