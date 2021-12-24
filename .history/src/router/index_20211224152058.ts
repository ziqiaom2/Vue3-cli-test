import Vue from 'vue';
import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router';


import routes from "./routes";

// let firstEnterFlag = true;



const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;
