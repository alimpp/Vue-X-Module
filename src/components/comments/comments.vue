<template>
  <div class="container">
      <div class="row">
         <div class="col-sm-6" v-for="comment in getComments" :key="comment.id">
              <div class="cart">
                  <h5>Name</h5>
                  <h6>{{comment.name}}</h6>
                  <h5>Body</h5>
                  <h6>{{comment.body}}</h6>
                  <h5>Email</h5>
                  <h6>{{comment.email}}</h6>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    
     mounted(){
         return this.$store.dispatch('Comments/getComments')
     } , 

     computed : {
         getComments(){
             return this.$store.getters['Comments/allComments']
         }
     }

}
</script>

<style>

</style>