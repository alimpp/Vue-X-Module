<template>
<div class="createUser">
     <!-- Button trigger modal -->
<button type="button" class="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create Comment
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Comment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6 class="pt-2">Name</h6>
        <input v-model="name" type="text" class="form-control" >
        <h6 class="pt-2">Body</h6>
        <input v-model="body" class="form-control">
        <h6 class="pt-2">Email</h6>
        <input v-model="email" class="form-control">
      </div>
      <div class="modal-footer">
        <button @click="createComment" type="button" class="btn btn-primary">Create</button>
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
       return {
           name : "" , 
           body : "" , 
           email : "" ,
       }
   } , 

   methods : {
       createComment(){
           if(this.name === ""){
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Name is Required',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
           } else if(this.body === ""){
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Body is Required',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
           } else if(this.email === ""){
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Email is Required',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
           } else{
              this.$store.dispatch('Comments/CREATE' , {name : this.name , body : this.body , email : this.email})
              this.name = "" , 
              this.body = "" , 
              this.email = "" , 
              Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Comment Created',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
           }
       }
   }

}
</script>

<style>

</style>