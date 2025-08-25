// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/Home.vue'
import ImagesPage from '@/views/Images.vue'
import GridPage from '@/views/Grid.vue'
import AccordionPage from '@/views/Accordion.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/images', name: 'Images', component: ImagesPage }, // already registered
    { path: '/grid', name: 'Grid', component: GridPage },
    { path: '/accordion', name: 'Accordion', component: AccordionPage }
  ],
  scrollBehavior: () => ({ x: 0, y: 0 })
})