
<script setup>
import { onMounted, ref } from 'vue';
import { fetchMovieReviews } from '../services/movieService';
import { useRoute } from 'vue-router';
import moment from 'moment/moment';
import 'moment/locale/tr'
moment.locale('tr')

const movieReviewList = ref([]);

const route = useRoute();

const props = defineProps({
    img:{type:String},
    author:{type:String},
    username:{type:String},
    rating:{type:Number},
    date:{type:String},
    content:{type:String}
})

onMounted(() => {
    fetchMovieReviews(route.params.film_id)
    .then((data) => movieReviewList.value = data )
})

</script>

<template>
    <div class="w-full grid max-lg:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-8 text-white">
    <article class="review py-8 px-12 flex flex-col max-lg:flex-row gap-4 max-lg:rounded-none rounded-2xl" v-for="review in movieReviewList">
        <div class="flex flex-row justify-between max-xl:flex-col">
            <figure class="h-60 w-60">
                <img v-if="review.author_details.avatar_path" :src="`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`" class="h-full w-full">
                <img v-if="!review.author_details.avatar_path" src="https://image.tmdb.org/t/p/w500//oQmTgtvkCXWivIDcM6SlXPV2an1.jpg" class="h-full w-full">
            </figure>
            <div class="author_detail flex flex-col justify-evenly">
                <h4>{{review.author}}</h4>
                <h5>@{{review.author_details.username}}</h5>
                <p class="rating"><i class="fa-solid fa-star"></i>{{ review.author_details.rating ? review.author_details.rating : 0 }} / 10 </p>
                <p class="date">{{ moment(review.created_at).format('MMMM Do YYYY')}}</p>
            </div>
        </div>
        <p v-if="review.content.length <= 500">{{review.content }}</p>
        <p v-else>{{review.content.slice(0,477)}}...</p>
    </article>
</div>
</template>