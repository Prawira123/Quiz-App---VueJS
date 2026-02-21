<script setup>

    import {RouterLink} from 'vue-router'

</script>

<template>
    <div class="flex bg-white p-4 gap-4 items-center justify-between">
        <h1 class="text-2xl font-bold ">Navbar</h1>
        <div class="flex gap-4">
            <RouterLink to="/" class="link" active-class="active">Home</RouterLink>
        </div>
    </div>
</template>

<style scope>
    .link{
        color: blue;
        padding: 10px 20px;
        border-radius: 5px;
    }

    .active{
        background-color: blue ;
        color: white;
        transition: all 0.3s ease-in-out;
    }
</style>