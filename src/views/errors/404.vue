<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
        <h1 class="text-9xl font-bold text-blue-900">404</h1>
        <h2 class="text-4xl font-bold text-blue-900 my-10">Page Not Found</h2>
        <RouterLink to="/" class="btn">Kembali</RouterLink>
    </div>
</template>

<style scoped>
    .btn{
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
    }

    .btn:hover{
        background-color: rgb(0, 0, 83);
        color: white;
        transition: all 0.3s ease-in-out;
    }
</style>