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
    <header>
        <figure>
            <img :src="`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`" alt="">
        </figure>
    </header>
    <main>
        <article>
            <h1>{{ movieDetail.title }}</h1>   
            <p>{{ movieDetail.overview }}</p> 
            <div class="about">
                <span class="rating"><i class="fa-solid fa-star"></i>{{ movieDetail.vote_average }} / 10</span>
                <span class="date">{{ moment(movieDetail.release_date).format('MMMM Do YYYY') }}</span>
            </div>
            
        </article>
        <section>
            <MovieReviewList />
        </section>
    </main>
    
</template>

<style scoped>
    
    body{
        margin: 0;
        padding: 0;
    }

    figure{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10rem;
    }

    img{
       width: 1000px;
       
    }

    main{
        padding: 10rem 0;
        display: flex;
        flex-direction: column;
    }       

    article{
        width: 960px;
        flex-direction: column;
        justify-content: space-between;
        padding: 3rem;
        border-radius: 1rem;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(47,46,46,1) 100%); 
    }

    article h1{
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    }

    article p{
    font-size: 1.2rem;
    letter-spacing: .1rem;
    }

    .about{
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    section{
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 1rem;
        padding: 5rem 10rem;
    }
</style>