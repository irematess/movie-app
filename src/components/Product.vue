<script setup>
import moment from 'moment/moment';
import 'moment/locale/tr'
moment.locale('tr')

    const props = defineProps({
        product:{type:Object}
    })
</script>

<template>
    <article class="flex flex-row justify-center items-center text-base text-white p-4 rounded-2xl">
        <figure class="w-1/4 mr-8">
          <img :src="`https://image.tmdb.org/t/p/w500/${product.poster_path}`" class="w-full h-full max-lg:h-auto">
        </figure>
        <div class="w-3/4 flex flex-col justify-between pt-2">
          <router-link :to=" `/movie-detail/${product.id}`"><h4 class="text-4xl">{{ product.title }}</h4></router-link>
          <p class="text-[#ffffff7a]"> {{ product.overview }}</p>
          <p class="flex gap-2"><i class="fa-solid fa-star text-yellow-500"></i>{{ product.vote_average }} / 10</p>
          <span class="italic">{{ moment(product.date).format('MMMM Do YYYY') }}</span>
        </div>
    </article> 
</template>