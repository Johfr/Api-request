<script setup>
import { RouterView } from 'vue-router'
import { useStarwarsApi } from './stores/starwarsStore'

// fetch the api from the store on app init
useStarwarsApi().getCharacters()
</script>

<template>
  <component :is="$route.meta.layout || 'div' ">
    <router-view />
  </component>
</template>

<style scoped>
</style>
