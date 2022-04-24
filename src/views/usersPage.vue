<template>
  <div class="users scrollbar">
    <users></users>
  </div>
</template>

<script>
import users from '../components/users/users.vue'
export default {
   components : {users}
}
</script>

<style scoped >
.users{
  height: 100vh; 
  overflow: scroll;
  margin-top: 15px;
}
</style>