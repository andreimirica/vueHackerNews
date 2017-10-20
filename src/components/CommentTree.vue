<template>
  <ul class="comment-list">
    <li v-for="comment in commenttree" >
      <comment :comment="comment"></comment>
    </li>
  </ul>

</template>

<script>
  import Comment from '@/components/Comment'
  export default {
    name: 'CommentTree',
    components: {
      Comment
    },
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
