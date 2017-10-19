import Vue from 'vue'
import VueRouter from 'vue-router'
const Stories = () => import('@/components/Stories')
const ItemComments = () => import('@/components/ItemComments')
const User = () => import('@/components/User')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: 'news/:page', name: 'News', component: Stories, props: {storiesType: 'news'}},
    {path: 'newest/:page', name: 'Newest', component: Stories, props: {storiesType: 'newest'}},
    {path: 'show/:page', name: 'SingleNews', component: Stories, props: {storiesType: 'show'}},
    {path: 'ask/:page', name: 'AskNews', component: Stories, props: {storiesType: 'ask'}},
    {path: 'jobs/:page', name: 'Jobs', component: Stories, props: {storiesType: 'jobs'}},
    {path: 'item/:id', name: 'Item', component: ItemComments},
    {path: 'user/:id', name: 'User', component: User},
    {
      path: '/',
      redirect: '/news/1'
    }
  ]
})
