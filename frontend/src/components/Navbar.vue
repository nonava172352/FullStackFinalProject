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
      <!-- <li class="nav-item">
        <router-link class="nav-link text-white" to="/postpage" style="font-size: 20px">Post</router-link>
      </li> -->
    </ul>
  </div>
  
  <div class="form-inline" style="margin-right: 20px;">

  <a class="navbar-brand" href="/profile">
      <label>{{email}}</label>
    <!-- <img src="../assets/profile.webp" width="37" height="37" class="d-inline-block align-top" alt="" style="margin-right: 5px;margin-left: 20px"> -->
  </a>
    <!-- <button class="btn btn-secondary" style="margin-right: 20px; font-size: 18px" type="submit">ข้อมูลส่วนตัว</button> -->
    <button class="btn btn-dark" @click="logout" type="submit">ลงชื่อออก</button>
  </div>
</nav>
</template>
<script>
  import axios from "axios";
  import { jwtDecode } from "../jwt-decode";
export default {

  data() {
    return {
      user:{},
      email:""
    }
  },
  methods: {
    logout(){
      this.$router.push({ name: 'login', query: { redirect: '/login' }})
      this.$accessToken = "";
      this.$cookies.remove("refresh_token");

    },
    checklogin(){
      console.log("test")
      if(this.$cookies.get("refresh_token") != null){
        
      axios
        .get(process.env.VUE_APP_HOST + "auth/refresh_token", {
          headers: {
            Authorization: `Bearer ${this.$cookies.get("refresh_token")}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.$accessToken = res.data.accessToken;
            this.$cookies.set("refresh_token", res.data.refreshToken);
            this.$users = jwtDecode(res.data.refreshToken);
            this.user = jwtDecode(res.data.refreshToken);
            this.email = this.user.email
            console.log(this.$users)
            this.$router.push({ name: 'home', query: { redirect: '/' } })
          }
        })
        .catch((error) => {
          console.log(error);
        });}else{
          console.log("ยังไม่ได้ login")

          this.$router.push({ name: 'login', query: { redirect: '/login' } })
        }
    },
  },created(){
    this.checklogin()
    }
}
</script>

<style>
#mainnav {
  background-color: rgb(36, 138, 255);
}
</style>