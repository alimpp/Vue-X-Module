<template>
  <div class="container">
          <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <h1>JSON Placeholder</h1>
             <h5 style="padding:20px 5px;">Users Page</h5>
             <i class="bi bi-arrow-clockwise" @click="doLoad" :class="{'trans':refresh}" style="padding:10px 5px; font-size:30px;cursor: pointer;"></i>
          </div>
          <div class="col-sm-6" style="display:flex;">
              <input 
              type="text" 
              v-model="search" 
              class="form-control" 
              placeholder="Search" 
              style="width:500px; height:45px; margin:10px 5px;"
              >
              <select v-model="numberFilter" @change="filterUsers" class="form-select" aria-label="Default select example" style="width:200px; height:45px; margin:10px 5px;">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="7">7</option>
               </select>
          </div>
          <hr>
      </div>
      <div class="row">
          <div class="col-sm-4" v-for="user in getUsers" :key="user.id">
              <div class="cart">
                  <h5>Name</h5>
                  <h6>{{user.name}}</h6>
                  <hr>
                  <h5>Username</h5>
                  <h6>{{user.username}}</h6>
                  <hr>
                  <h5>Email</h5>
                  <h6>{{user.email}}</h6>
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
            numberFilter : Number
         }
     } ,

     methods : {

         doLoad(){
             this.refresh = !this.refresh
             return this.$store.dispatch('Users/DO_LOAD')
         } ,

         filterUsers(){
             return this.$store.dispatch('Users/FILTER_DATA' , this.numberFilter)
         }
     } , 
    
     mounted(){
         return this.$store.dispatch('Users/GET_DATA')
     } , 

     computed : {
         getUsers(){
             const datas = this.$store.getters['Users/allUsers']
             return datas.filter(data => {
                 return data.name.match(this.search)
             })
         }
     }

}
</script>

<style scoped >
.trans{animation: 1s trans;}
@keyframes trans { 0%{transform: rotate(0deg);} 50%{transform: rotate(150deg);} 100%{transform: rotate(0deg);}}
</style>