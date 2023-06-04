import { pageToOffset, api } from '../services'
import useAsync from '../utils/use-async'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { limit }from '../services'

export function useJobs () {

  const jobs = ref([])
  const jobsCount = ref(0)
  const page = ref(1)
  const totalPage = ref(1)

  async function fetchJobs () {
    jobs.value = []
    let responsePromise = null
        responsePromise = api.jobs.getJobs(pageToOffset(page.value))
            .then(res => res.data)
        if (responsePromise !== null) {
        const response = await responsePromise
        jobs.value = response.data //fix later
        jobsCount.value = response.total
        totalPage.value = Math.ceil(response.total/limit)
        } else {
        console.error(`Something went wrong while fetching data`)
        }
  }

  const changePage = (value) => {
    page.value = value
  }

  const updateJob = (index, job) => {
    jobs.value[index] = job
  }

  const { active: jobsDownloading, run: runWrappedFetchJobs } = useAsync(fetchJobs)

  watch(page, runWrappedFetchJobs)

  return {
    fetchJobs: runWrappedFetchJobs,
    jobsDownloading,
    jobs,
    jobsCount,
    page,
    totalPage,
    changePage,
    updateJob,
  }
}

