<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user'
import { computed } from 'vue'
const { user } = storeToRefs(useUserStore())
const loggedIn = computed(() => user.value?.name ? true : false)

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container justify-contant-between">

            <router-link to="/" class="navbar-brand">Vue Job</router-link>
            <div class="d-flex">
                <ul class="nav">
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link to="/login" class="nav-link active" aria-current="page">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link to="/register" class="nav-link active" aria-current="page">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <router-link to="#" class="nav-link active" aria-current="page">Welcome, {{ user.name }}</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <router-link to="#" class="nav-link active" aria-current="page">Logout</router-link>
                    </li>
                </ul>
                <router-link to="/post-job" class="btn btn-outline-success">Post a Job</router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>