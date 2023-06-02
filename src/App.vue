<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './pages/Home.vue';
</script>

<template>
  <Header />
  <main>
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped>

</style>
