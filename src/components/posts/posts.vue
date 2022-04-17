<template>
  <div class="container">
      <div class="row">
         <div class="col-sm-6" v-for="post in getPosts" :key="post.id">
             <div class="cart">
                 <h5>Title</h5>
                 <h6>{{post.title}}</h6>
                 <h5>Body</h5>
                 <h6>{{post.body}}</h6>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
    
    mounted(){
        return this.$store.dispatch('Posts/GET_DATA')
    } ,

    computed : {
        getPosts(){
            return this.$store.getters['Posts/allPosts']
        }
    }

}
</script>

<style scoped >

</style>