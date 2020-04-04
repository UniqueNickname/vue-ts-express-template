<template lang="pug">
  .default
    h1 Layout DEFAULT
    nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'default',
})
</script>