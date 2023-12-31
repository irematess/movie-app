<script setup>
import  Product  from "../components/Product.vue"

import { useFetch } from "../useFetch";
const {response} = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=tr");
</script>

<template>
    <main v-if="response?.results">
      <Product v-for="item in response.results " 
      :key="item.id"
      :product="item"
      />
      
  </main>
</template>