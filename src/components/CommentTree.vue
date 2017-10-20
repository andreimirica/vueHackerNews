<template>
  <ul class="comment-list">
    <li v-for="comment in commentTree" >
      <comment :comment="comment"></comment>
    </li>
  </ul>

</template>

<script>
  export default {
    name: 'CommentTree',
    props: ['commenttree']
  }
</script>

<style scoped>
    ul {
      list-style-type: none;
      padding: 10px 0;
    }

    li {
      display: list-item;
    }
</style>
