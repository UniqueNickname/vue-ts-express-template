<template lang="pug">
  .hello
    h2 User name: {{ name }}
    .discription This message will send to server and show in a terminal
    .input
      input(v-model="message")
    .btn
      button.btn.btn-primary(type='submit' @click="sendMessage") Submit
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      message: 'new message',
    }
  },
  computed: {
    name () {
      return this.$store.getters.getName
      }
  },
  methods: {
    sendMessage () {
      if (this.message) this.$socket.emit('newMessage', {text: this.message})
    }
  }
})
</script>

<style lang="scss" scoped>
.input {
  width: 100px;
  margin: 20px 0;
  input {
    border: 1px solid black;
  }
}
</style>