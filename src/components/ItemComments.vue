<template>
  <div class="main-content">
    <div class="loading-section" v-if="!item">
      <!-- You can add a loading indicator here if you want to :) -->
    </div>
    <div v-if="item" class="item">
      <div class="mobile item-header">
        <!-- Markup that shows only on mobile (to give the app a
       responsive mobile feel). Same attributes as below,
       nothing really new here (but refer to the source
       file if you're interested) -->
      </div>
      <div class="laptop" :class.item-header="item.comments_count > 0 || item.type === 'job'" :class.head-margin="item.text">
        <p>
          <a class="title" :href="item.url">
            {{item.title}}
          </a>
          <span v-if="item.domain" class="domain">({{item.domain}})</span>
        </p>
        <div class="subtext">
        <span>
        {{item.points}} points by
          <router-link :to="{ path: `/user/${item.user}`}" routerLinkActive="active">{{item.user}}</router-link>
        </span>
          <span>
          {{item.time_ago}}
          <span> |
            <router-link :to="{ path: `/item/${item.id}`}">
              <span v-if="item.comments_count !== 0">
                {{item.comments_count}}
                <span v-if="item.comments_count === 1">comment</span>
                <span v-if="item.comments_count > 1">comments</span>
              </span>
              <span v-if="item.comments_count === 0">discuss</span>
            </router-link>
          </span>
        </span>
        </div>
      </div>
      <p class="subject" v-html="item.content"></p>
      <comment-tree :commenttree="item.comments"></comment-tree>
    </div>
  </div>
</template>

<script>
  import HackerNewsService from '../services/hackernews.service'
  import CommentTree from '@/components/CommentTree'
  export default {
    name: 'ItemComments',
    components : {
      CommentTree
    },
    computed : {
      item () {
        return this.$store.getters.selectedItem
      }
    },
    created () {
      const itemID = this.$route.params.id
      this.$store.dispatch('retrieveComments', {
        itemID: itemID
      }).then(() => {
      })
    }
  }
</script>

<style scoped>
  .main-content { position: relative; width: 100%; min-height: 100vh; -webkit-transition: opacity .2s ease; transition: opacity .2s ease; box-sizing: border-box; padding: 8px 0; z-index: 0; } .item { box-sizing: border-box; padding: 10px 40px 0 40px; z-index: 0; } @media only screen and (max-width: 1024px) { .item { padding: 10px 20px 0 40px; } } @media only screen and (max-width: 768px) { .item { box-sizing: border-box; padding: 110px 15px 0 15px; } } .head-margin { margin-bottom: 15px; } p { margin: 2px 0; } .subject { word-wrap: break-word; margin-top: 20px; } a { color: #000; cursor: pointer; text-decoration: none; } @media only screen and (max-width: 768px) { .laptop { display: none; } } @media only screen and (min-width: 769px) { .mobile { display: none; } } .title { font-size: 16px; } .title-block { text-align: center; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin: 0 75px; } @media only screen and (max-width: 768px) { .title { font-size: 15px; } .back-button { position: absolute; top: 52%; width: 0.6rem; height: 0.6rem; background: transparent; border-top: .3rem solid #B92B27; border-right: .3rem solid #B92B27; box-shadow: 0 0 0 lightgray; transition: all 200ms ease; left: 4%; transform: translate3d(0, -50%, 0) rotate(-135deg); } } .subtext { font-size: 12px; } .domain, .subtext { color: #696969; font-weight: bold; letter-spacing: 0.5px; } .domain a { color: #b92b27; } .subtext a { color: #b92b27; } .subtext a:hover { text-decoration: underline; } .item-details { padding: 10px; } .item-header { border-bottom: 2px solid #b92b27; padding-bottom: 10px; } @media only screen and (max-width: 768px) { .item-header { background-color: #fff; padding: 10px 0 10px 0; position: fixed; width: 100%; left: 0; top: 62px; } } .loader { background: #B92B27; -webkit-animation: load1 1s infinite ease-in-out; animation: load1 1s infinite ease-in-out; width: 1em; height: 4em; } .loader:before, .loader:after { background: #B92B27; -webkit-animation: load1 1s infinite ease-in-out; animation: load1 1s infinite ease-in-out; width: 1em; height: 4em; } .loader:before, .loader:after { position: absolute; top: 0; content: ''; } .loader:before { left: -1.5em; -webkit-animation-delay: -0.32s; animation-delay: -0.32s; } .loading-section { height: 70px; margin: 40px 0 40px 40px; } @media only screen and (max-width: 768px) { .loading-section { display: block; position: relative; margin: 45vh 0; } } .loader { color: #B92B27; text-indent: -9999em; margin: 20px 20px; position: relative; font-size: 11px; -webkit-transform: translateZ(0); -ms-transform: translateZ(0); transform: translateZ(0); -webkit-animation-delay: -0.16s; animation-delay: -0.16s; } .loader:after { left: 1.5em; } @media only screen and (max-width: 768px) { .loader { margin: 20px auto; } } @-webkit-keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 2em; } 40% { box-shadow: 0 -2em; height: 3em; } } @keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 2em; } 40% { box-shadow: 0 -2em; height: 3em; } } @media only screen and (max-width: 768px) { @-webkit-keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 4em; } 40% { box-shadow: 0 -2em; height: 5em; } } @keyframes load1 { 0%, 80%, 100% { box-shadow: 0 0; height: 3em; } 40% { box-shadow: 0 -2em; height: 4em; } } }
</style>
