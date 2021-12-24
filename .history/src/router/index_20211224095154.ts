import Vue from 'vue';
import Router from 'vue-router';


import routes from './routes';

let firstEnterFlag = true;

Vue.use(Router);

const router = new Router({
  routes,
});