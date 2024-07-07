<script setup>
import { useRoute } from "vue-router";
import { fetchMovieDetail } from "../services/movieService.js"
import { onMounted, ref } from "vue";
import MovieReviewList from "../components/MovieReviewList.vue";
import moment from 'moment/moment';
import 'moment/locale/tr';
moment.locale('tr')

const route = useRoute();
const movieDetail = ref({
    title:"yükleniyor"    
});

onMounted(() => {
    fetchMovieDetail(route.params.film_id)
    .then((data) => movieDetail.value = data)    
})
</script>

<template>
    <main class="flex max-lg:flex-col max-xl:px-8 max-lg:gap-16 container mx-auto justify-around text-white py-40 ">
        <figure class="max-lg:w-full w-2/5  rounded-2xl overflow-hidden">
            <img :src="`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`" class="w-full h-full">
        </figure>
        <article class="max-lg:w-full w-1/2 p-10 rounded-2xl  flex flex-col justify-between">
            <h1 class="text-4xl max-md:2xl">{{ movieDetail.title }}</h1>   
            <p class="text-xl text-gray-300">{{ movieDetail.overview }}</p> 
            <span class="about flex justify-between gap-2">
                <span class="rating"><i class="fa-solid fa-star"></i>{{ movieDetail.vote_average }} / 10</span>
                <span class="date">{{ moment(movieDetail.release_date).format('MMMM Do YYYY') }}</span>
            </span>
        </article>
    </main>
    <section class="container mx-auto max-xl:px-8 ">
        <MovieReviewList />
    </section>
</template>