<template>
  <div class="loading-section" v-if="!item">
    <div class="loader">
      Loading...
    </div>
  </div>
  <div v-if="item">
    <div class="item-laptop">
      <p>
        <a class="title" :href="item.url">
          {{item.title}}
        </a>
        <span v-if="item.domain" class="domain">({{item.domain}})</span>
      </p>
      <div class="subtext-laptop">
    <span v-if="item.type !== 'job'">
      {{item.points}} points by
      <!--<a [routerLink]="['/user', item.user]" routerLinkActive="active">{{item.user}}</a>-->
    </span>
        <span>
      {{item.time_ago}}
      <span> |
         <router-link :to="{ path: '/item' , params: {id: item.id}">
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
  </div>

</template>

<script>
  import HackerNewsService from '../services/hackernews.service'
  export default {
    name: 'Item',
    props: ['itemID', 'item'],
    data () {
      return {
        item: null
      }
    },
    async created () {
      if (this.props.itemID) {
        const response = await HackerNewsService.fetchItem(this.props.itemID)
        this.item = response.data
      }
    }
  }
</script>

<style scoped>
  p { margin: 2px 0; } @media only screen and (max-width: 768px) { p { margin-bottom: 5px; margin-top: 0; } } a { color: #000; cursor: pointer; text-decoration: none; } .title { font-size: 16px; } .subtext-laptop { font-size: 12px; color: #696969; font-weight: bold; letter-spacing: 0.5px; } .subtext-laptop a { color: #b92b27; } .subtext-laptop a:hover { text-decoration: underline; } .subtext-palm { font-size: 13px; color: #696969; font-weight: bold; letter-spacing: 0.5px; } .subtext-palm a { color: #b92b27; } .subtext-palm a:hover { text-decoration: underline; } .subtext-palm .details { margin-top: 5px; } .subtext-palm .details .right { float: right; } .domain { color: #696969; font-weight: bold; letter-spacing: 0.5px; } @media only screen and (max-width: 768px) { .item-laptop { display: none; } } @media only screen and (min-width: 769px) { .item-mobile { display: none; } } .item-details { padding: 10px; }
</style>
