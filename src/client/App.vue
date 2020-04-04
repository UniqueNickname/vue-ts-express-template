<template lang="pug">
  #app
    vue-extend-layouts(path="layouts")
</template>

<script lang="ts">
import Vue from 'vue'
import VueExtendLayouts from 'vue-extend-layout'

export default Vue.extend({
  name: 'App',
  components: { VueExtendLayouts },
  sockets: {
    connect () {
      console.log('log from index.vue')
    }
  }
})
</script>