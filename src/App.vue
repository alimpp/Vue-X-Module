<template>
  <div class="app light_bg">
     <side></side>
     <router-view></router-view>
  </div>
</template>

<script>

import side from './components/side.vue'
export default {
   components : {
     side 
   }
}
</script>

<style>
.app{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
