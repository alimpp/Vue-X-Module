<template>
  <div class="container">
          <div class="row">
          <div class="col-sm-6" style="display:flex;">
             <h1>JSON Placeholder</h1>
             <h5 style="padding:20px 5px;">Tasks Page</h5>
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
                <option selected>Filter Tasks</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
               </select>
          </div>
          <hr>
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
export default {

    data(){
        return{
          search : "" 
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

<style>

</style>