import Vue from 'vue';
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';


import routes from "./routes";

// let firstEnterFlag = true;



const router = VueRouter.createRouter({
  history:createWebHashHistory(),
  routes:RouteRecordRaw[],
});

export default router;
