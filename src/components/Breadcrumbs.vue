<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { VBreadcrumbs } from 'vuetify/lib/components/index.mjs';

const route = useRoute()

const crumbs = computed(() => {
  const matched = route.matched
  const crumbs = []

  matched.forEach(routeRecord => {
    if (routeRecord.name) {
      crumbs.push({
        label: routeRecord.meta && routeRecord.meta.breadcrumb || routeRecord.name,
        to: routeRecord.path
      })
    }
  })

  return crumbs
})

</script>

<template>
  <div class="breadcrumbs mb-5">
    <VBreadcrumbs
      :items="crumbs"
      divider=">"
    ></VBreadcrumbs>
    <nav class="breadcrumbs">
    <router-link to="/" v-if="route.matched[0].path !== '/'">
      Home >
    </router-link>
    <span
      v-for="(crumb, index) in crumbs"
      :key="index"
      class="breadcrumb"
    >
      {{ crumb.label }}
    </span>
  </nav>
  </div>
</template>
