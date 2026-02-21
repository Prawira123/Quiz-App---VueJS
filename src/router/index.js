import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import DetailQuiz from '../views/DetailQuiz.vue'
import Question from '../views/Question.vue'

const route = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : '/',
            name : 'home',
            component : Home
        },
        {
            path : '/detail-quiz/:id',
            name : 'detail-quiz',
            component : DetailQuiz,
            children : [
                {
                    path : "question",
                    name : "question",
                    component : Question,
                }
            ]
        }
    ],
});

export default route;