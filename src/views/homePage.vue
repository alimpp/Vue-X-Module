<template>
  <div class="home anim">
    <img src="../assets/api-icon.png" class="transform_anim" style="width:100px; height:100px; border-radius:50%; padding-bottom:5px;">
    <h1>JSON Placeholder</h1>
    <div>
      <router-link to="/POSTS"><button class="btn btn-primary m-1">Get Started</button></router-link>
    <a href="https://jsonplaceholder.typicode.com/" target="blank">
      <button class="btn btn-danger m-1">JSON Placeholder</button>
    </a>
    </div>
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