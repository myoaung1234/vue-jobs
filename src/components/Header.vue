<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user'
import { computed } from 'vue'
const { user } = storeToRefs(useUserStore())
const loggedIn = computed(() => user.value?.name ? true : false)

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container justify-contant-between">

            <router-link to="/" class="navbar-brand fw-bold color-white text-info">Vue Job</router-link>
            <div class="d-flex">
                <ul class="nav gap-2">
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link to="/login" class="nav-link text-white active" aria-current="page">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link to="/register" class="nav-link text-white active" aria-current="page">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <router-link to="#" class="nav-link text-white active" aria-current="page">Welcome, {{ user.name }}</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <router-link to="#" class="nav-link text-white active" aria-current="page">Logout</router-link>
                    </li>
                </ul>
                <router-link to="/post-job" class="btn btn-success">Post a Job</router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        position: sticky;
        top: 0;
        z-index: 999;
        background-color: rgba(42, 40, 40, 0.9);
    }
</style>