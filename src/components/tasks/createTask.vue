<template>
  <div class="createTask">
     <!-- Button trigger modal -->
<button type="button" class="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create Task
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input v-model="title" type="text" class="form-control" placeholder="Type Text">
      </div>
      <div class="modal-footer">
        <button @click="createTask" type="button" class="btn btn-primary">Create</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
   
   data(){
       return{
           title : ""
       }
   } , 

   methods : {
       createTask(){
           if(this.title === ""){
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Form is Required',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
           }else{
              this.$store.dispatch('Tasks/CREATE' , this.title)
              this.title = ""
              Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Task Created',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 1500
              })
           }
       }
   }

}
</script>

<style scoped >

</style>