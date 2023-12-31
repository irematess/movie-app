<script setup>
 import { useRoute } from "vue-router";

 const route = useRoute();

</script>

<template>
    <h1>{{ route.params.film_id }}</h1>
    <h1> {{route}}</h1>
</template>