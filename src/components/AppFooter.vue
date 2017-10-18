<template>
  <div id="footer">
    <p>Show Vue some ❤ on
      <a href="https://github.com/vuejs/vue-cli" target="_blank">
        GitHub
      </a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter'
  }
</script>

<style scoped>
  #footer { position: relative; padding: 10px; height: 60px; border-top: 2px solid #b92b27; letter-spacing: 0.7px; text-align: center; } #footer a { color: #b92b27; font-weight: bold; text-decoration: none; } #footer a:hover { text-decoration: underline; } @media only screen and (max-width: 768px) { #footer { display: none; } }
</style>
