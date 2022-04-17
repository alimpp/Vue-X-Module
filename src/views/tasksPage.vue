<template>
  <div class="tasks scrollbar">
      <tasks></tasks>
  </div>
</template>

<script>
import tasks from '../components/tasks/tasks.vue'
export default {
   components : {tasks}
}
</script>

<style scoped >
.tasks{
  height: 100vh;
  overflow: scroll;
}
</style>