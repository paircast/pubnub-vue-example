import Vue from 'vue'
import PubNubVue from 'pubnub-vue';
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(PubNubVue, {
  subscribeKey: 'demo',
  publishKey: 'demo'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
