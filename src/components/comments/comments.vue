<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <h1>JSON Placeholder</h1>
             <h5 style="padding:20px 5px;">Comments Page</h5>
          </div>
          <div class="col-sm-6" style="display:flex;">
              <input 
              type="text" 
              v-model="search" 
              class="form-control" 
              placeholder="Search" 
              style="width:500px; height:45px; margin:10px 5px;"
              >
              <select class="form-select" aria-label="Default select example" style="width:200px; height:45px; margin:10px 5px;">
                <option selected>Filter Comments</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
               </select>
          </div>
          <hr>
      </div>
      <div class="row">
         <div class="col-sm-4" v-for="comment in getComments" :key="comment.id">
              <div class="cart">
                  <h5>Name</h5>
                  <h6>{{comment.name}}</h6>
                  <hr>
                  <h5>Body</h5>
                  <h6>{{comment.body}}</h6>
                  <hr>
                  <h5>Email</h5>
                  <h6>{{comment.email}}</h6>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

     data(){
         return{
             search : ""
         }
     } ,
    
     mounted(){
         return this.$store.dispatch('Comments/GET_DATA')
     } , 

     computed : {
         getComments(){
             const datas = this.$store.getters['Comments/allComments']
             return datas.filter(data => {
                 return data.name.match(this.search)
             })
         }
     }

}
</script>

<style>

</style>