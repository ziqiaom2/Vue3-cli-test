import Vue from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router';


import routes from './routes';

// let firstEnterFlag = true;

Vue.use(Router);

const router = createRouter({
  history:createWebHashHistory(),
  routes
});

export default router;
