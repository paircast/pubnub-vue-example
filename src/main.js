import Vue from 'vue'
import PubNubVue from 'pubnub-vue';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
