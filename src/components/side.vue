<template>
  <div class="header">
   
      <button
        class="btn"
        style="margin:5px 5px;"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBackdrop"
        aria-controls="offcanvasWithBackdrop"
      >
      <i class="bi bi-list w-text" style="font-size:25px;"></i>
      </button>

  <div
      class="offcanvas offcanvas-end navigation"
      tabindex="-1"
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
    >
      <div class="offcanvas-header">
        
        <button
          type="button"
          class="btn-close text-reset w-text"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
         <div class="profile">
             <img src="../assets/api-icon.png" style="width:100px; height:100px; border-radius:50%; padding-bottom:5px;">
             <h6 class="darl_color">Vue X Module</h6>
         </div>
         <div class="menu-list">
             <router-link to="/" class="link">Home</router-link>
             <router-link to="/POSTS" class="link">Posts</router-link>
             <router-link to="/TASKS" class="link">Tasks</router-link>
             <router-link to="/USERS" class="link">Users</router-link>
             <router-link to="/COMMENTS" class="link">Comments</router-link>
             <router-link to="/BLOGS" class="link">Blogs</router-link>
         </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped >
.link{
    text-decoration: none;
    padding: 5px 10px;
    margin: 5px 0px;
    font-size: 22px;
    font-weight: 300;
    transition: 0.5s;
    color: #303030;
}
.menu-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-link-active{
    border-bottom: 1px solid #303030;
}
.profile{
    margin: 10px 130px;
}
</style>