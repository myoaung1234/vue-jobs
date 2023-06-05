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
                    <div style="width: 100vw; height: 70vh; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" style="width: 50px; height: 50px;"/>
                    </div>
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