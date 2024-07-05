
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
    <div class="reviewList">
    <div class="review" v-for="review in movieReviewList">
        <div class="author">
            <figure>
                <img v-if="review.author_details.avatar_path" :src="`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`" alt="">
                <img v-if="!review.author_details.avatar_path" src="https://image.tmdb.org/t/p/w500//oQmTgtvkCXWivIDcM6SlXPV2an1.jpg" alt="">
            </figure>
            <div class="author_detail">
                <h4>{{review.author}}</h4>
                <h5>@{{review.author_details.username}}</h5>
                <p class="rating"><i class="fa-solid fa-star"></i>{{ review.author_details.rating ? review.author_details.rating : 0 }} / 10 </p>
                <p class="date">{{ moment(review.created_at).format('MMMM Do YYYY')}}</p>
                
            </div>
           
        </div>
        <p v-if="review.content.length <= 500">{{review.content }}</p>
        <p v-else>{{review.content.slice(0,477)}}...</p>
        
    </div>
</div>
</template>



<style scoped>
body{
    width: 100%;
}
    .review{
        
        padding: 2rem 3rem;
        margin: 0 1rem 1rem 0;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(47,46,46,1) 100%); 
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content:baseline;
        align-items: center;
    }

    .author{
        display: flex;
        margin-bottom: 2rem;
    }

    .author_detail{
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;
    }

    .author figure{
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .reviewList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        
    }
    
</style>