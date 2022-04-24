<template>
  <div class="container">
          <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <h1>JSON Placeholder</h1>
             <h5 style="padding:20px 5px;">Posts Page</h5>
             <i class="bi bi-arrow-clockwise" @click="doLoad" :class="{'trans':refresh}" style="padding:10px 5px; font-size:30px;cursor: pointer;"></i>
          </div>
          <div class="col-sm-6" style="display:flex;">
              <input type="text" 
              v-model="search" 
              class="form-control" 
              placeholder="Search" 
              style="width:500px; height:45px; margin:10px 5px;"
              >
              <select v-model="numberFilter" @change="filterPosts" class="form-select" aria-label="Default select example" style="width:200px; height:45px; margin:10px 5px;">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
          </div>
          <hr>
      </div>
      <div class="loading_box" v-if="loading">
      <img src="@/assets/api-icon.png" class="transform_anim" style="width:100px; height:100px; border-radius:50%; padding-bottom:5px;">
      </div>
      <div class="row" v-else>
         <div class="col-sm-3" v-for="post in getPosts" :key="post.id">
             <div class="cart">
                 <h5 class="text_a">Title</h5>
                 <h6 class="text_b">{{post.title}}</h6>
                 <h5 class="text_a">Body</h5>
                 <h6 class="text_b">{{post.body}}</h6>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            search : "" ,
            refresh : false , 
            loading : false , 
            numberFilter : Number

        }
    } , 

    methods : {
        doLoad(){
            this.refresh = !this.refresh
            return this.$store.dispatch('Posts/DO_LOAD')
        } ,

        filterPosts(){
            return this.$store.dispatch('Posts/FILTER_DATA' , this.numberFilter)
        }
    } ,
    
    mounted(){
        this.$store.dispatch('Posts/GET_DATA')
    } ,

    computed : {
        getPosts(){
          const datas = this.$store.getters['Posts/allPosts']
          return datas.filter(data =>{
             return data.title.match(this.search)
          })
        }
    } , 



}
</script>

<style scoped >
.trans{animation: 1s trans;}
@keyframes trans { 0%{transform: rotate(0deg);} 50%{transform: rotate(150deg);} 100%{transform: rotate(0deg);}}
</style>