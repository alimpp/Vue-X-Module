<template>
  <div class="container">
      <div class="row">
          <h1>Blogs Page</h1>
          {{test}}
      </div>
  </div>
</template>

<script>
export default {
    
     computed : {
         test(){
             return this.$store.getters['Blogs/test']
         }
     }

} 
</script>

<style>

</style>