import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    redirect: '/showBlogs',
    component: Home,
    children: [{
      path: '/showBlogs',
      name: 'showBlogs',
      component: resolve => require(['../components/showBlogsList'], resolve)
    },{
      path: '/addBlog',
      name: 'addBlog',
      component: resolve => require(['../components/addBlog.vue'], resolve)
    }, {
      path: '/singleBlog/:id',
      name: 'singleBlog',
      component: resolve => require(['../components/singleBlog'], resolve)
    }]
  }]
})
