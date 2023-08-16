import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/MyLayout.vue'
import Login from '@/views/login/MyLogin.vue'
import Home from '@/views/home/MyHome.vue'

const Product = () => import('@/views/product/MyProduct.vue')
const List = () => import('@/views/product/MyList.vue')
const Category = () => import('@/views/product/MyCategory.vue')

const Order = () => import('@/views/order/MyOrder.vue')
const Orderlist = () => import('@/views/order/OrderList.vue')
const OrderCollect = () => import('@/views/order/OrderCollect.vue')

const Advert = () => import('@/views/advert/MyAdvert.vue')
const AdvertList = () => import('@/views/advert/AdvertList.vue')

Vue.use(VueRouter)

const routes = [//添加路由对象
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/product',//产品管理
        name: 'product',
        component: Product,
        children: [{
          path: 'list',  //访问路径：/product/list
          name: 'list',
          component: List
        },
        {
          path: 'category',
          name: 'category',
          component: Category
        }],
      },
    
        {
          path: '/order',//订单
          name: 'order',
          component: Order,
          children: [{
            path: 'list',  //访问路径：/order/list
            name: 'list',
            component: Orderlist
          },
          {
            path: 'collect',
            name: 'collect',
            component: OrderCollect
          }]
        },
        {
          path: '/advert',//广告
          name: 'advert',
          component: Advert,
          children: [{
            path: 'advertlist',  //访问路径：/advert/list
            name: 'advertlist',
            component: AdvertList
          },]
        }
        ]
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
    ]

const router = new VueRouter({
      mode: 'history',//采用哪种路由模式,默认是history,可改为hash
      routes
    })

export default router
