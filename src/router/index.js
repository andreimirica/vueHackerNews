import Vue from 'vue'
import VueRouter from 'vue-router'
const Stories = () => import('@/components/Stories')
const ItemComments = () => import('@/components/ItemComments')
const User = () => import('@/components/User')

Vue.use(VueRouter)

export default new VueRouter({
  base: window.location.href,
  routes: [
    {path: 'news/:page', name: 'News', component: Stories, props: {storiestype: 'news'}},
    {path: 'newest/:page', name: 'Newest', component: Stories, props: {storiestype: 'newest'}},
    {path: 'show/:page', name: 'SingleNews', component: Stories, props: {storiestype: 'show'}},
    {path: 'ask/:page', name: 'AskNews', component: Stories, props: {storiestype: 'ask'}},
    {path: 'jobs/:page', name: 'Jobs', component: Stories, props: {storiestype: 'jobs'}},
    {path: 'item/:id', name: 'Item', component: ItemComments},
    {path: 'user/:id', name: 'User', component: User},
    {
      path: '/',
      redirect: '/news/1'
    }
  ]
})
