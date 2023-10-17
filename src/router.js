import { createWebHistory, createRouter } from "vue-router";

import Barchart from './components/BarChart.vue';
import Barchart2 from './components/BarChart2.vue'
import Barchart3 from './components/BarChart3.vue'
const routes = [
  


  {
    path: "/",
    component: Barchart, 
  },
  
  {
    path: "/BarChart2",
    component: Barchart2, 
  },
  
  {
    path: "/BarChart3",
    component: Barchart3, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 