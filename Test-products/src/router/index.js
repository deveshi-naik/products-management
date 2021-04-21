import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import addProduct from '@/components/addProduct'
import productDetail from '@/components/productDetail'
import Trash from '@/components/Trash'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'addProduct',
      component: addProduct
    },
    {
      path: '/detail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/trash',
      name: 'Trash',
      component: Trash
    }
  ]
})
