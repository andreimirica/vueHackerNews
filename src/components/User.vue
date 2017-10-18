<template>
  <div v-if="user" class="profile">
    <div class="mobile item-header">
      <p class="title-block">
        <span class="back-button" @click="goBack()"></span>
        Profile: {{ user.id }}
      </p>
    </div>
    <div class="main-details">
      <span class="name">{{ user.id }}</span>
      <span class="right">{{ user.karma }} ★</span>
      <p class="age">Created {{ user.created }}</p>
    </div>
    <div class="other-details" v-if="user.about">
      <p v-html="user.about"></p>
    </div>
  </div>

</template>

<script>
  import HackerNewsService from '../services/hackernews.service'
  export default {
    name: 'User',
    props: ['id'],
    data () {
      return {
        user: {}
      }
    },
    async created () {
      const userID = this.props.id
      const response = await HackerNewsService.fetchUser(userID)
      this.user = response.data
    }
  }
</script>

<style scoped>
  :host > > > pre { white-space: pre-wrap; } .profile { padding: 30px; } @media only screen and (max-width: 768px) { .profile { padding: 110px 15px 0 15px; } .title-block { font-size: 15px; text-align: center; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin: 0 75px; } .back-button { position: absolute; top: 52%; width: 0.6rem; height: 0.6rem; background: transparent; border-top: .3rem solid #B92B27; border-right: .3rem solid #B92B27; box-shadow: 0 0 0 lightgray; transition: all 200ms ease; left: 4%; transform: translate3d(0, -50%, 0) rotate(-135deg); } .item-header { border-bottom: 2px solid #b92b27; padding-bottom: 10px; background-color: #fff; padding: 10px 0 10px 0; position: fixed; width: 100%; left: 0; top: 62px; height: 20px; } } @media only screen and (min-width: 769px) { .mobile { display: none; } } .main-details .name { color: #b92b27; font-weight: bold; font-size: 32px; letter-spacing: 2px; } .main-details .age { font-weight: bold; color: #696969; padding-bottom: 0; } .main-details .right { float: right; color: #b92b27; font-weight: bold; font-size: 32px; letter-spacing: 2px; } @media only screen and (max-width: 768px) { .main-details { margin-top: 20px; } .main-details .name { font-size: 18px; } } @media only screen and (max-width: 768px) { .main-details .right { font-size: 18px; } } .other-details { word-wrap: break-word; }
</style>
