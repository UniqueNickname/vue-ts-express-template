<template lang="pug">
  #app
    nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  // MARKER Этот код выведется в терминал клиента 
  sockets: {
    connect () {
      console.log('log from index.vue')
    }
  }
})
</script>