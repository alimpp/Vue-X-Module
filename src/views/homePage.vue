<template>
  <div class="home">
    <img src="../assets/api-icon.png" style="width:100px; height:100px; border-radius:50%; padding-bottom:5px;">
    <h4 class="mt-3">Welcome To Vue X Module With Api</h4>
    <router-link to="/POSTS"><button class="btn btn-primary mt-3">Get Started</button></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.home{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
}
</style>