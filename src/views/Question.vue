<script setup>
    import {inject} from 'vue'
    import {useRoute} from 'vue-router'
    import quizData from '../data/quiziz.json'
    const route = useRoute()
    const data = quizData.find((data) => data.id == route.params.id)
    const answers = inject('answers')

</script>

<template>
    <div class="flex flex-col gap-8 items-start justify-center px-[100px] bg-gray-200 py-10 gap-4" v-for="question in data.questions" :key="question.id">
    <h4 class="text-xl font-semibold">{{ question.text }}</h4>
    <div class="flex flex-col gap-2">
      <label
        v-for="answer in question.answers"
        :key="answer.id"
        class="flex items-center gap-2 cursor-pointer"
      >
        <input
          type="radio"
          :name="'question-' + question.id"
          :value="answer.id"
          v-model="answers[question.id]"
        />
        <span>
          {{ answer.label }}. {{ answer.text }}
        </span>
      </label>
    </div>
    </div>
</template>
