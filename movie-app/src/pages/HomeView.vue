<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import  Product  from "../components/Product.vue"
import { fetchMovies } from "../services/movieService.js"

const movies = ref([]);

onMounted(() => {
  fetchMovies()
  .then(data => movies.value = data);
})
 

</script>

<template>
    <main v-if="movies">
      <Product v-for="item in movies" 
      :key="item.id"
      :product="item"
      />
      
  </main>
</template>