<template lang="pug">
  .content-wrapper.test
    h1 Layout TEST
    nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'test',
})
</script>