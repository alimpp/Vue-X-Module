<template>
  <div class="blogs">
      <blogs></blogs>
  </div>
</template>

<script>
import blogs from '../components/blogs/blogs.vue'
export default {
   components : {blogs}
}
</script>

<style scoped >
.blogs{
  height: 100vh; 
  overflow: scroll;
}
</style>