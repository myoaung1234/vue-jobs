<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container justify-contant-between">

            <router-link to="/" class="navbar-brand">Vue Job</router-link>
            <div class="d-flex">
                <ul class="nav">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link active" aria-current="page">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link active" aria-current="page">Register</router-link>
                    </li>
                </ul>
                <router-link to="/post-job" class="btn btn-outline-success">Post a Job</router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>