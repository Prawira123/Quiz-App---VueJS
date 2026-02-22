<script setup>
    import { RouterLink } from 'vue-router'
    import { ref, onMounted } from 'vue'
    
    const props = defineProps({
        data: {
            type:Object,
            required:true
        }
    })

    const score = ref(null)

    onMounted(() => {
        const savedScore = localStorage.getItem(`quiz_score_${props.data.id}`)
        if (savedScore !== null) {
            score.value = savedScore
        }
    })
</script>

<template>
    <RouterLink :to="`/detail-quiz/${data.id}/question`">
    <div class=" flex flex-col items-center justify-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-600 hover:scale-105 transform pb-8">
        <img :src="data.img" alt="Card image" class="w-full h-full object-cover">
        <div class="p-4">
            <h2 class="text-lg font-bold mb-2">{{ data.title }}</h2>
            <div class="flex flex-col justify-between items-center">
                <p class="text-gray-400 text-sm font-semibold">Questions : {{ data.questions.length }}</p>
                <p v-if="score !== null" class="text-blue-600 text-sm font-bold">Score: {{ score }} / {{ data.questions.length }}</p>
            </div>
        </div>
        <RouterLink :to="`/detail-quiz/${data.id}/question`" class="btn">Masuk Quiz</RouterLink>
    </div>
    </RouterLink>
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