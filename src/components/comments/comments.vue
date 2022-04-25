<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <createComment/>
             <i class="bi bi-arrow-clockwise refresh_icon" @click="doLoad" :class="{'trans':refresh}"></i>
             <h5 class="p-3">Comments Page</h5>
          </div>
          <div class="col-sm-6" style="display:flex;">
              <input 
              type="text" 
              v-model="search" 
              class="form-control" 
              placeholder="Search" 
              style="width:500px; height:45px; margin:10px 5px;"
              >
              <select v-model="numberFilter" @change="filterComments" class="form-select" aria-label="Default select example" style="width:200px; height:45px; margin:10px 5px;">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="50">50</option>
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
import createComment from './createComment.vue'

export default {

    components : {createComment} , 

     data(){
         return{
             search : "" , 
             refresh : false , 
             numberFilter : Number 
         }
     } ,

     methods : {
       
         doLoad(){
             this.refresh = !this.refresh
             return this.$store.dispatch('Comments/DO_LOAD')
         } ,

         filterComments(){
             return this.$store.dispatch('Comments/FILTER_DATA' , this.numberFilter)
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

<style scoped >
.trans{animation: 1s trans;}
@keyframes trans { 0%{transform: rotate(0deg);} 100%{transform: rotate(360deg);}}
</style>