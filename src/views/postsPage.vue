<template>
  <div class="posts scrollbar">
      <posts></posts>
  </div>
</template>

<script>
import posts from '../components/posts/posts.vue'
export default {
   components : {posts}
}
</script>

<style scoped >
.posts{
  height: 100vh; 
  overflow: scroll;
}
</style>