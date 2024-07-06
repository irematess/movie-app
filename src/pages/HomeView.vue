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
  <h1 class="text-white text-center pt-10 font-sans text-[4rem] italic">Movie App</h1>
    <main v-if="movies" class="container mx-auto py-20  grid max-xl:grid-cols-1 grid-cols-2 gap-10">
      <Product v-for="item in movies" 
      :key="item.id"
      :product="item"
      class="w-full h-full"
      />
    </main>
</template>