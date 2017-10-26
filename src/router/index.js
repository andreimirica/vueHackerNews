import Vue from 'vue'
import VueRouter from 'vue-router'
const Stories = () => import('@/components/Stories')
const ItemComments = () => import('@/components/ItemComments')
const User = () => import('@/components/User')

Vue.use(VueRouter)

function fakeComponentGenerator (storiestype) {
  return {
    name: `${storiestype}-stories`,
    render (createElement) {
      return createElement(Stories, { props: { storiestype : storiestype}})
    }
  }
}

export default new VueRouter({
  routes: [
    {path: '/news', component: fakeComponentGenerator('news')},
    {path: '/newest', component: fakeComponentGenerator('newest')},
    {path: '/show', component: fakeComponentGenerator('show')},
    {path: '/ask', component: fakeComponentGenerator('ask')},
    {path: '/jobs', component: fakeComponentGenerator('jobs')},
    {path: '/item/:id', component: ItemComments},
    {path: '/user/:id', component: User},
    {
      path: '/',
      redirect: '/news'
    }
  ]
})
