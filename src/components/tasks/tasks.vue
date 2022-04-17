<template>
  <div class="container">
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
    
    mounted(){
        return this.$store.dispatch('Tasks/getTasks')
    } , 

    computed : {
        getTasks(){
            return this.$store.getters['Tasks/allTasks']
        }
    }

}
</script>

<style>

</style>