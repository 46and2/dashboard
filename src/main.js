import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('@/assets/scss/main.scss');

Vue.config.productionTip = false;

store.subscribe((mutation, state) => {
  localStorage.setItem('dashboardData', JSON.stringify(state));
});

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('INITIALISE_STORE');
  },
  render: h => h(App)
}).$mount('#app');
