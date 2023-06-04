<script setup>
import JobsList from '../components/JobsList.vue'

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mt-4">
                <h3 class="fw-bold">Jobs List</h3>
            </div>
            <Suspense>
                <JobsList />
                <template #fallback>
                    Something happening...
                </template>
            </Suspense>
        </div>
    </div>
</template>

<style scoped>
    .color {
        color: #84fab0;
        color: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
        color: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
</style>