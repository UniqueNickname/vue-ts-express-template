<template lang="pug">
  .content.home
    h1
      |Page: home
    messager
</template>

<script lang="ts">
import Vue from 'vue'
import messager from '../../components/messager.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    messager
  },
})
</script>