<template>
  <div class="main-content">
    <div class="loading-section" v-if="!items">
      <!-- You can add a loading indicator here if you want to :) -->
    </div>
    <div v-if="items">
      <ol :start="listStart">
        <li v-for="item in items" class="post">
          <item class="item-block" :item="item"></item>
        </li>
      </ol>
      <div class="nav">
        <router-link exact v-if="listStart !== 1" :to="{ path: '/news/' + previousPage , props: {storiestype: this.storiestype}}" class="prev">
          ‹ Prev
        </router-link>
        <router-link exact v-if="items.length === 30" :to="{ path: '/news/' + nextPage, props: {storiestype: this.storiestype}}" class="more">
          More ›
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import HackerNewsService from '../services/hackernews.service'
  import Item from '@/components/Item'
  export default {
    name: 'Stories',
    props: ['storiestype'],
    components: {
      Item
    },
    data () {
      return {
        typeSub: null,
        items: [],
        listStart: 1
      }
    },
    methods: {
      fetchData: async function() {
        const response = await HackerNewsService.fetchStories(this.storiestype, this.$route.params.page)
        this.items = response.data
        this.listStart = ((this.$route.params.page - 1) * 30) + 1
        window.scrollTo(0, 0)
      }
    },
    computed: {
      previousPage: function () {
        return Number(this.$route.params.page) - 1
      },
      nextPage: function () {
        return Number(this.$route.params.page) + 1
      }
    },
    created () {
      this.fetchData()
    }
  }
</script>

<style scoped>
  a { color: #b92b27; text-decoration: none; font-weight: bold; } a:hover { text-decoration: underline; } ol { padding: 0 40px; margin: 0; } @media only screen and (max-width: 768px) { ol { box-sizing: border-box; list-style: none; padding: 0 10px; } } ol li { position: relative; -webkit-transition: background-color .2s ease; transition: background-color .2s ease; } @media only screen and (max-width: 768px) { .list-margin { margin-top: 55px; } } .main-content { position: relative; width: 100%; min-height: 100vh; -webkit-transition: opacity .2s ease; transition: opacity .2s ease; box-sizing: border-box; padding: 8px 0; z-index: 0; } .post { padding: 10px 0 10px 5px; transition: background-color 0.2s ease; border-bottom: 1px solid #CECECB; } .post .itemNum { color: #696969; position: absolute; width: 30px; text-align: right; left: 0; top: 4px; } .item-block { display: block; } .nav { padding: 10px 40px; margin-top: 10px; font-size: 17px; } @media only screen and (max-width: 768px) { .nav a { color: #B92B27; text-decoration: none; } } @media only screen and (max-width: 768px) { .nav { margin: 20px 0; text-align: center; padding: 10px 80px; height: 20px; } } .nav .prev { padding-right: 20px; } @media only screen and (max-width: 768px) { .nav .prev { float: left; padding-right: 0; } } @media only screen and (max-width: 768px) { .nav .more { float: right; } } .job-header { font-size: 15px; padding: 0 40px 10px; } @media only screen and (max-width: 768px) { .job-header { padding: 60px 15px 25px 15px; border-bottom: 2px dotted #b92b27; } } .loader { background: #B92B27; -webkit-animation: load1 1s infinite ease-in-out; animation: load1 1s infinite ease-in-out; width: 1em; height: 4em; } .loader:before, .loader:after { background: #B92B27; -webkit-animation: load1 1s infinite ease-in-out; animation: load1 1s infinite ease-in-out; width: 1em; height: 4em; } .loader:before, .loader:after { position: absolute; top: 0; content: ''; } .loader:before { left: -1.5em; -webkit-animation-delay: -0.32s; animation-delay: -0.32s; } .loading-section { height: 70px; margin: 40px 0 40px 40px; } @media only screen and (max-width: 768px) { .loading-section { display: block; position: relative; margin: 45vh 0; } } .loader { color: #B92B27; text-indent: -9999em; margin: 20px 20px; position: relative; font-size: 11px; -webkit-transform: translateZ(0); -ms-transform: translateZ(0); transform: translateZ(0); -webkit-animation-delay: -0.16s; animation-delay: -0.16s; } .loader:after { left: 1.5em; } @media only screen and (max-width: 768px) { .loader { margin: 20px auto; } } @-webkit-keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 2em; } 40% { box-shadow: 0 -2em; height: 3em; } } @keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 2em; } 40% { box-shadow: 0 -2em; height: 3em; } } @media only screen and (max-width: 768px) { @-webkit-keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 4em; } 40% { box-shadow: 0 -2em; height: 5em; } } @keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 3em; } 40% { box-shadow: 0 -2em; height: 4em; } } }
</style>
