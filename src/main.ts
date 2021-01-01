import { AuthStore } from './store/modules/auth.store';
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from '@/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Notifications from 'vue-notification';
import velocity from 'velocity-animate';

Vue.config.productionTip = false;

Vue.use(Notifications, { velocity });

new Vue({
  router,
  store,
  vuetify,
  created: () => {
    AuthStore.init();
  },
  render: h => h(App),
}).$mount('#app');
