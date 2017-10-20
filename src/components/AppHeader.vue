<template>
  <header>
    <div id="header">
      <router-link to="/news/1" exact class="home-link">
        <img class="logo" src="https://i.imgur.com/J303pQ4.png">
      </router-link>
      <div class="header-text">
        <div class="left">
          <h1 class="name">
            <router-link to="/news/1" exact class="app-title">Angular 2 HN</router-link>
          </h1>
          <span class="header-nav">
          <router-link to="/newest/1" exact>new</router-link>
          <span class="divider">
            |
          </span>
          <router-link to="/show/1" exact>show</router-link>
          <span class="divider">
            |
          </span>
          <router-link to="/ask/1" exact>ask</router-link>
          <span class="divider">
            |
          </span>
          <router-link to="/jobs/1" exact>jobs</router-link>
        </span>
        </div>
        <div class="info">
          Built with <a href="https://vuejs.org/" target="_blank">VueJS</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style scoped>
  #header { background-color: #b92b27; color: #fff; padding: 6px 0; line-height: 18px; vertical-align: middle; position: relative; z-index: 1; width: 100%; } @media only screen and (max-width: 768px) { #header { height: 50px; position: fixed; top: 0; } } #header a { display: inline; } .home-link { width: 50px; height: 66px; } .logo { width: 50px; padding: 3px 8px 0; } @media only screen and (max-width: 768px) { .logo { width: 45px; padding: 0 0 0 10px; } } h1 { font-weight: bold; display: inline-block; vertical-align: middle; margin: 0; font-size: 16px; } h1 a { color: #fff; text-decoration: none; } .name { margin-right: 30px; margin-bottom: 2px; } @media only screen and (max-width: 768px) { .name { display: none; } } .header-text { position: absolute; width: inherit; height: 20px; left: 10px; top: 27px; } @media only screen and (max-width: 768px) { .header-text { top: 22px; } } .left { position: absolute; left: 60px; font-size: 16px; } @media only screen and (max-width: 768px) { .left { width: 100%; left: 0; } } .header-nav { display: inline-block; } @media only screen and (max-width: 768px) { .header-nav { float: right; margin-right: 20px; } } .header-nav a { color: #fff; text-decoration: none; } .header-nav a:hover { font-weight: bold; } .info { position: absolute; right: 20px; font-size: 16px; } @media only screen and (max-width: 768px) { .info { display: none; } } .info a { color: #fff; font-weight: bold; text-decoration: none; }
</style>
