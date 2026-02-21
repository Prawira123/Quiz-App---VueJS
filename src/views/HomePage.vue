<script setup>
    import Card from '../components/Card.vue'
    import Header from '../components/Header.vue'
    import dataQuiziz from '../data/quiziz.json'
    import {ref, computed, watch} from 'vue'
    import {refDebounced} from '@vueuse/core'

    const quizizData = ref(dataQuiziz)
    const searchInput = ref('')
    const debouncedInput = refDebounced(searchInput, 600)
    const filteredData = computed(() => {
        console.log(debouncedInput.value)
        if(!debouncedInput.value){
            return quizizData.value
        }else{
            console.log(debouncedInput.value)   
            return quizizData.value.filter(data => data.title.toLowerCase().includes(debouncedInput.value.toLowerCase()))
        }
    })

    watch(debouncedInput, () => {
        console.log(debouncedInput.value)
    })

    //filter menggunakan watch = jadi setiap aksi atau perubhana value secara reaktif di variable serchInput, maka aka mejalanka callback frunction yang menjalankan filter data sesaui dengan isi variable yang menampung input 
    // watch(searchInput, () => {
    //     quizizData.value = dataQuiziz.value.filter((quiz) => {
    //       return quiz.title.toLowerCase().includes(searchInput.value.toLowerCase())
    //     })
    // })

</script>

<template>
  <div class="relative min-h-screen">
    <Header v-model:searchInput="searchInput"/>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-[200px] py-10 w-full">
      <Card v-for="data in filteredData" :key="data.id" :data="data"/>
    </div>
  </div>
</template>