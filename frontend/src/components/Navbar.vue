<template>
  <nav class="navbar navbar-expand-lg navbar-dark justify-content-between" id="mainnav">
  <img src="../assets/itlogo.png" class="img-fluid" alt="Responsive image" style="padding-left: 20px; padding-right: 20px; max-height: 55px;" />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link text-white" to="/" style="font-size: 20px;">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/postpage" style="font-size: 20px">Post</router-link>
      </li>
    </ul>
  </div>
  
  <form class="form-inline" style="margin-right: 20px;">
  <a class="navbar-brand" href="/profile">
    <img src="../assets/profile.webp" width="37" height="37" class="d-inline-block align-top" alt="" style="margin-right: 5px;">
  </a>
    <!-- <button class="btn btn-secondary" style="margin-right: 20px; font-size: 18px" type="submit">ข้อมูลส่วนตัว</button> -->
    <button class="btn btn-dark" type="submit">ลงชื่อออก</button>
  </form>
</nav>
</template>


<style>
#mainnav {
  background-color: rgb(36, 138, 255);
}
</style>