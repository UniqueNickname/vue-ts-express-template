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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')