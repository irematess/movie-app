<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import  Product  from "../components/Product.vue"
import { fetchMovies } from "../services/movieService"

const movies = ref([]);

onMounted(() => {
  fetchMovies()
  .then(data => movies.value = data);
})
 

</script>

<template>
  <h1 class="title">Movie App</h1>
    <main v-if="movies">
      <Product v-for="item in movies" 
      :key="item.id"
      :product="item"
      />
      
  </main>
</template>

<style scoped>
body{
  padding: 2rem 10rem;
}

main{
  padding: 5rem 2rem;
}
</style>