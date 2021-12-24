import Vue from 'vue';
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';


import routes from "./routes";

// let firstEnterFlag = true;



const router = createRouter({
  history:createWebHashHistory(),
  routes,
});

export default router;
