<script setup>
    defineProps({
        page: Number,
        totalPage: Number,
        jobsCount: Number
    })

    const emit = defineEmits()
    const onPageChange = (index) => emit('page-change', index)
</script>

<template>
    <div class="col-lg-12">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="page>1" class="page-item shadow-none"><button class="page-link" type="button" @click="onPageChange(page-1)">Previous</button></li>
                <li v-for="p in totalPage" class="page-item shadow-none"><button class="page-link" @click="onPageChange(p)" type="button" :class="{'text-danger': p==page, 'text-dark': p!=page}">{{ p }}</button></li>
                <li v-if="totalPage>1 && page<totalPage" class="page-item shadow-none"><button class="page-link" type="button" @click="onPageChange(page+1)">Next</button></li>
            </ul>
        </nav>
    </div>
</template>

<style scope>

</style>