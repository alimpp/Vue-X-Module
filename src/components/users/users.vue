<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-6" v-for="user in getUsers" :key="user.id">
              <div class="cart">
                  <h5>Name</h5>
                  <h6>{{user.name}}</h6>
                  <h5>Username</h5>
                  <h6>{{user.username}}</h6>
                  <h5>Email</h5>
                  <h6>{{user.email}}</h6>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    
     mounted(){
         return this.$store.dispatch('Users/GET_DATA')
     } , 

     computed : {
         getUsers(){
             return this.$store.getters['Users/allUsers']
         }
     }

}
</script>

<style>

</style>