import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// Global styles
import './styles/styles.scss';

import Checkbox from './components/common/checkbox/Checkbox.vue';
import BoxComponent from './components/common/box/box-component.vue';


Vue.component('Checkbox', Checkbox);
Vue.component('box-component', BoxComponent);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
