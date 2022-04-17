<template>
  <div class="comments scrollbar">
      <comments></comments>
  </div>
</template>

<script>
import comments from '../components/comments/comments.vue'
export default {
   components : {comments}
}
</script>

<style scoped >
.comments{
  height: 100vh; 
  overflow: scroll;
}
</style>