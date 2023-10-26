<script setup>
import SimpleTable from '../components/SimpleTable.vue'
</script>

<template>
  <div class="home">
    <div>
      <h2>Api request using pinia store</h2>
      <SimpleTable />
    </div>
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  padding-bottom: 50px;
}
</style>