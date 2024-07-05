import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView from "./pages/HomeView.vue";
import MovieDetailView from "./pages/MovieDetailView.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/movie-detail/:film_id', component: MovieDetailView}
]                           


const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

