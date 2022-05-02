<template>
  <div class="container">
          <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <createTask/>
             <i class="bi bi-arrow-clockwise refresh_icon" @click="doLoad" :class="{'trans':refresh}"></i>
             <h5 class="p-3">Tasks Page</h5>
          </div>
          <div class="col-sm-6" style="display:flex;">
             
              <input 
              type="text" 
              v-model="search" 
              class="form-control" 
              placeholder="Search" 
              style="width:400px; height:45px; margin:15px 5px;"
              >
              <select v-model="filterNumber" @change="filterTasks" class="form-select" aria-label="Default select example" style="width:200px; height:45px; margin:15px 5px;">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="50">50</option>
               </select>
          </div>
          <hr>
      </div>
      <div class="row">
         
      </div>
      <div class="row">
           <div class="col-sm-6" v-for="task in getTasks" :key="task.id">

              <div class="cart cart_complete" v-if="task.completed">
                  <h5>Title</h5>
                  <h6>{{task.title}}</h6>
                  <hr>
                  <div>
                      <i class="bi bi-arrow-left-right p-1" @click="updateTask(task)" style="font-size:20px;"></i>
                      <i class="bi bi-trash p-1" @click="deleteTask(task.id)" style="font-size:20px;"></i>
                  </div>
              </div>

              <div class="cart" v-else>
                  <h5>Title</h5>
                  <h6>{{task.title}}</h6>
                  <hr>
                  <div>
                      <i class="bi bi-arrow-left-right p-1" @click="updateTask(task)" style="font-size:20px;"></i>
                      <i class="bi bi-trash p-1" @click="deleteTask(task.id)" style="font-size:20px;"></i>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import createTask from './createTask.vue'
export default {

    components : {createTask} ,

    data(){
        return{
          search : "" , 
          refresh : false , 
          filterNumber : Number , 
        }
    } ,

    methods : {
        doLoad(){
            this.refresh = !this.refresh
            return this.$store.dispatch('Tasks/DO_LOAD') 
        } ,

        filterTasks(){
            return this.$store.dispatch('Tasks/FILTER_DATA' , this.filterNumber)
        } , 

        updateTask(task){
            this.$store.dispatch('Tasks/UPDATE' , task) 
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Task Updated',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 1500
            })
        } , 

        deleteTask(id){
             this.$store.dispatch('Tasks/DELETE' , id)
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Task Deleted',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 1500
            })
        }

    } ,
    
    mounted(){
        return this.$store.dispatch('Tasks/GET_DATA')
    } , 

    computed : {
        getTasks(){
            const datas = this.$store.getters['Tasks/allTasks']
            return datas.filter(data => {
                return data.title.match(this.search)
            })
        }
    }

}
</script>

<style scoped >
.cart_complete{background: #505050;}
.trans{animation: 1s trans;}
@keyframes trans { 0%{transform: rotate(0deg);} 100%{transform: rotate(360deg);} }
</style>