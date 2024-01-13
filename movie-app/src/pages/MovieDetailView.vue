<script setup>
 import { useRoute } from "vue-router";
 import { fetchMovieDetail } from "../services/movieService.js"
import { onMounted, ref } from "vue";


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
<h1>{{ movieDetail.title }}</h1>
    {{movieDetail}}
</template>