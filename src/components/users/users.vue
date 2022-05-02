<template>
  <div class="container">
          <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <createUser/>
             <i class="bi bi-arrow-clockwise refresh_icon" @click="doLoad" :class="{'trans':refresh}"></i>
             <h5 class="p-3">Users Page</h5>
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
                  <hr>
                  <i class="bi bi-trash p-1" @click="deleteUser(user.id)" style="font-size:20px;"></i>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import createUser from './createUser.vue'

export default {
     
     components : {createUser} , 

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
         } , 

         deleteUser(id){
             this.$store.dispatch('Users/DELETE' , id)
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'User Deleted',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 1500
            })
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
@keyframes trans { 0%{transform: rotate(0deg);} 100%{transform: rotate(360deg);}}
</style>