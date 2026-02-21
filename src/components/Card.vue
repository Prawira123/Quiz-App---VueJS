<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        data: {
            type:Object,
            required:true
        }
    })

    // const {number} = defineProps(['number'])
</script>

<template>
    <div class=" flex flex-col items-center justify-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-600 hover:scale-105 transform pb-8">
        <img :src="data.img" alt="Card image" class="w-full h-full object-cover">
        <div class="p-4">
            <h2 class="text-lg font-bold mb-2">{{ data.title }}</h2>
            <p class="text-gray-400 text-sm font-semibold">Questions : {{ data.questions.length }}</p>
        </div>
        <RouterLink :to="`/detail-quiz/${data.id}/question`" class="btn">Masuk Quiz</RouterLink>
    </div>
</template>

<style scope>
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