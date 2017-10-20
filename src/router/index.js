import Vue from 'vue'
import VueRouter from 'vue-router'
const Stories = () => import('@/components/Stories')
const ItemComments = () => import('@/components/ItemComments')
const User = () => import('@/components/User')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/news/:page', component: Stories, props: {storiestype: 'news'}},
    {path: '/newest/:page', component: Stories, props: {storiestype: 'newest'}},
    {path: '/show/:page', component: Stories, props: {storiestype: 'show'}},
    {path: '/ask/:page', component: Stories, props: {storiestype: 'ask'}},
    {path: '/jobs/:page', component: Stories, props: {storiestype: 'jobs'}},
    {path: '/item/:id', component: ItemComments},
    {path: '/user/:id', component: User},
    {
      path: '/',
      redirect: '/news/1'
    }
  ]
})
