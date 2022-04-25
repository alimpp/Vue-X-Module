<template>
  <div class="container">
          <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <createTask/>
             <i class="bi bi-arrow-clockwise" @click="doLoad" :class="{'trans':refresh}" style="padding:17px 5px; font-size:35px;cursor: pointer;"></i>
             <h3 style="padding:22px 5px;">Tasks Page</h3>
              
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
              <div class="cart">
                  <h5>Title</h5>
                  <h6>{{task.title}}</h6>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import createTask from './createTask.vue'
export default {

    components : {createTask} ,

    data(){
        return{
          search : "" , 
          refresh : false , 
          filterNumber : Number
        }
    } ,

    methods : {
        doLoad(){
            this.refresh = !this.refresh
            return this.$store.dispatch('Tasks/DO_LOAD') 
        } ,

        filterTasks(){
            return this.$store.dispatch('Tasks/FILTER_DATA' , this.filterNumber)
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
.trans{animation: 1s trans;}
@keyframes trans { 0%{transform: rotate(0deg);} 100%{transform: rotate(360deg);}}
</style>