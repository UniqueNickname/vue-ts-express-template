// require('dotenv').config()

//! Only for import (scss, images, fonts, libs etc) 

//+ Scss                                            
import './assets/scss/main.scss'

//+ Images                                          
//? import './assets/img/logo.png'

//+ Fonts                                           
//? import './assets/fonts/beermoney/beermoney-regular.woff2'

//+ JS libs                                         

//+ Vue
import Vue from 'vue'
import App from './App.vue'
import store from './store/index.ts'
import router from './routers/index.ts'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

const PORT : number = parseInt(process.env.PORT) || 3000
const HOST : string = process.env.HOST || 'localhost'

Vue.use(new VueSocketIO({
  debug: true,
  connection: `http://${HOST}:${PORT}`,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')