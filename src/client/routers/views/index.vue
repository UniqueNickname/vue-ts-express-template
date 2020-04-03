<template lang="pug">
  .home
    h1
      |home
    hello
</template>

<script lang="ts">
import Vue from 'vue'
import hello from '../../components/hello.vue'

export default Vue.extend({
  components: {
    hello
  }
})
</script>