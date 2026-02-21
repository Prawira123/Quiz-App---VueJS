<script setup>
import quiz from '../data/quiziz.json'
import {useRoute, RouterView} from 'vue-router'
import {ref, watch, onUnmounted, computed} from 'vue'
import Swal from 'sweetalert2'


const route = useRoute()
const answers = ref({})
const openQuestion = ref(false)
const totalTime = ref(0)
const timeLeft = ref(0)
let timer = null



const data = quiz.find((data) => {
    return data.id == route.params.id
})

const setTotalTime = () => {
    return totalTime.value = data.questions.length * 15
}

const startTimer = () => {

    setTotalTime()

    timeLeft.value = totalTime.value
    timer = setInterval(() => {
        timeLeft.value--
        console.log(timeLeft.value)

        if(timeLeft.value <= 0){
            stopTimer()
            openQuestion.value = false
            Swal.fire({
                title: 'Waktu Habis',
                text : 'Soal ditutup Karena Waktu Habis',
                icon: 'error',
            })
        }
    }, 1000)
}

const stopTimer = () => {
    if(timer){
        clearInterval(timer)
        timer = null
    }
}

const startQuiz = () => {
    Swal.fire({
    title: 'Sudah Siap untuk Mengerjakan Quiz Ini?',
    icon: 'question',
    showCancelButton: true
  }).then((res) => {
    if (res.isConfirmed) {
        startTimer()
        openQuestion.value = true
        console.log('start')
        console.log(data)
    }
  })
}

const stopQuiz = () => {
    Swal.fire({
        title: 'Yakin untuk Menyelesaikan Quiz Ini?',
        text : 'Terimakasih Sudah Mengerjakan Quiz Ini',
        showCancelButton: true,
        icon: 'question',
    }).then((res) => {
        if(res.isConfirmed){
            Swal.fire({
                title: 'Quiz Selesai',
                text : 'Terimakasih Sudah Mengerjakan Quiz Ini',
                icon: 'success',
            }).then((res) => {
                if(res.isConfirmed){
                    stopTimer()
                    openQuestion.value = false
                }
            })
        }
    })
}

const progress = computed(() => {
    return (timeLeft.value / totalTime.value) * 100
})

watch(answers, () => {
    console.log(answers.value)
})

onUnmounted(() => {
    stopTimer()
})

const activeAnswer = (id) => {

}

</script>

<template>
    <img :src="data.img" alt="" class="w-full h-[400px] object-cover object-center mb-4">
    <div class="flex flex-col justify-center items-center mb-10">
        <h2 class="  text-4xl font-bold text-blue-900 my-10">{{ data.title }}</h2>
        <button class=" w-auto bg-blue-600 px-4 py-2 text-white rounded-md" @click="startQuiz">Mulai Quiz</button>
    </div>

    <div class="flex w-full h-[24px] flex-col gap-10" v-if="openQuestion">
        <div class="relative items-center flex flex-col w-full">
            <div
            class=" -z-1 h-[24px] rounded-full bg-blue-500 transition-all duration-1000"
            :style="{ width: progress + '%' }"
        ></div>
        <p class=" absolute right-1/2 -top-1/2 text-white font-bold py-[10px]">{{ timeLeft }}</p>
        </div>
        <RouterView/>
        <div class="flex items-certer justify-center w-auto pb-10">
            <button class=" bg-blue-600 px-4 py-2 text-white rounded-md" @click="stopQuiz">Selesai</button>
        </div>
    </div>
</template>

<style>
    .active{
        background-color : blue;
        color : white;
    }
</style>