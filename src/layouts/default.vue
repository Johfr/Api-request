<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Logo from '../components/icons/IconStarwars.vue'
</script>

<template>
  <main class="main">
    <Logo class="logo" />
    <Breadcrumbs />
    <router-view v-slot="{Component}">
      <Transition name="fade" mode="out-in" >
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </main>
</template>

<style lang="scss">
  main {
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;

    .logo {
      display: block;
      width: 100px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>