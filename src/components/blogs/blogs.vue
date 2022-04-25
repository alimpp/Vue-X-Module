<template>
  <div class="container">
      <div class="row">
          <h1>Blogs Page</h1>
          <div class="row">
             {{getBlogs}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
     
     computed : {
         getBlogs(){
             return this.$store.getters['Blogs/allBlogs']
         }
     } , 

     mounted(){
         return this.$store.dispatch('Blogs/GET_DATA')
     }

} 
</script>

<style>

</style>