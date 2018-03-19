import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/home/layout/index.vue'
import buttons from '@/home/button/index.vue'
import forms from '@/home/form/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/button',
      name: 'button',
      component: buttons
    },
    {
      path: '/form',
      name: 'form',
      component: forms
    }
  ]
})
