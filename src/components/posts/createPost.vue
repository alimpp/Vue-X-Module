<template>
<div class="createPost">
     <!-- Button trigger modal -->
<button type="button" class="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create Post
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6 class="pt-2">title</h6>
        <input v-model="title" type="text" class="form-control" placeholder="Type Text">
        <h6 class="pt-2">Body</h6>
        <textarea v-model="body" class="form-control"  placeholder="Type text" cols="30" rows="10"></textarea>
      </div>
      <div class="modal-footer">
        <button @click="createPost" type="button" class="btn btn-primary">Create</button>
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
            title : "" , 
            body : "" , 
        }
    } , 

    methods : {
        createPost(){
            if(this.title === ""){
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Title is Required',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
            }else if(this.body === ""){
              Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Body is Required',
              showConfirmButton: false,
              timerProgressBar : true , 
              toast : true , 
              timer: 3000
              })
            }else{
               this.$store.dispatch('Posts/CREATE' , {title : this.title , body : this.body})
               this.title = "" ,
               this.body = "" 
               Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Post Created',
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