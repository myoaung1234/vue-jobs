<script setup>
import JobsList from '../components/JobsList.vue'

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h3>Jobs</h3>
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

<style scoped></style>