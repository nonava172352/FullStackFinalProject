<template>
  <body>
    <div class="formlogin d-flex flex-column">
      <img
        class="responsive"
        src="../assets/nav-thai.png"
        alt="it logo"
        style="height: 150px; margin-bottom: 50px; margin-right: 45px"
      />
      <div class="card">
        <div class="card-body">
          <div>
            <div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label d-flex"
                style="font-weight: bold; font-size: 25px"
                >Sign In</label
              >
            </div>
            <div class="mb-4">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="mb-2">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="password"
              />
            </div>
            
            <div class="d-flex justify-content-start mb-4">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked style="margin-right: 5px"/>
            <label class="form-check-label" for="form2Example31" style="font-size: 15px">จดจำชื่อผู้ใช้</label>
            </div>

            <button
              class="btn btn-primary mb-1"
              @click="login"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script></script>

<style>
.formlogin {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.responsive {
  max-width: 100%;
  height: auto;
}
body {

  /* background: url("../assets/loginbackground.jpg") no-repeat center center fixed;
  background-size: cover; */
   background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(0, 132, 255));

}
.card {
  min-width: 20%;
  /* margin-right: 20px */
}

#loginbtn {
     width: 100%; 
     font-size: 18px;
}
</style>

<script>
import axios from "axios";
import { jwtDecode } from "../jwt-decode";
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login(){
      if(this.email == "" && this.password == ""){
        alert("กรุณากรอกข้อมูล")
      }else{
        axios.post(process.env.VUE_APP_HOST +'auth/login', {email: this.email, password: this.password}).then((res) => {
          console.log(res.data)

          this.$cookies.set("refresh_token", res.data.tokens.refreshToken);
          this.$accessToken = res.data.tokens.accessToken;
          this.$users = jwtDecode(res.data.tokens.accessToken);
          this.email = "";
          this.password = "";
          console.log(this.$users)
          alert("ล็อคอินสำเร็จ");
          this.$router.push({ name: 'home', query: { redirect: '/' }, param:{user: this.$users} })
        }).catch((error) => {
            console.log("error login")
            console.log(error)
            this.password = '';
            alert("Email หรือ รหัสผ่านไม่ถูกต้อง")
          });
      }
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
            this.$users = jwtDecode(res.data.accessToken);
            this.$router.push({ name: 'home', query: { redirect: '/' } })
          }
        })
        .catch((error) => {
          console.log(error);
        });}
    }
  },created(){
    this.checklogin()
  }
}
</script>