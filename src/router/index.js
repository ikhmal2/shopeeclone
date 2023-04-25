import Vue from 'vue';
import { Router } from 'vue-router';
import Discover from '../components/Discover';

Vue.useAttrs(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: Discover,
    },
  ],
});
