<script setup>
import moment from 'moment';
import 'moment/locale/tr'
moment.locale('tr')

    const props = defineProps({
        product:{type:Object}
    })
</script>

<template>
    <article>
        <figure>
          <img :src="`https://image.tmdb.org/t/p/w500/${product.poster_path}`" alt="">
        </figure>
        <div class="about">
          <router-link :to=" `/movie-detail/${product.id}`"><h4>{{ product.title }}</h4></router-link>
          <p>{{ product.overview }}</p>
          <p class="rating"><i class="fa-solid fa-star"></i>{{ product.vote_average }} / 10</p>
          <span class="date">{{ moment(product.date).format('MMMM Do YYYY') }}</span>
        </div>
    </article> 
</template>