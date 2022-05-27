<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li>
              <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-speedometer2"></i>
                <span class="ms-1 d-none d-sm-inline text-white">รายชื่อนักศึกษาตามสาขา</span>
              </a>
              <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                <li class="w-100">
                  <a data-bs-toggle="modal" data-bs-target="#PostBlogModal" href="BlogModal" class="nav-link px-0">
                    <span class="d-none d-sm-inline">สาขาวิชาเทคโนโลยีสารสนเทศ (IT)</span>
                  </a>
                </li>
                <li>
                  <a href="/bit" class="nav-link px-0">
                    <span class="d-none d-sm-inline">สาขาเทคโนโลยีสารสนเทศทางธุรกิจ (BIT)</span>
                  </a>
                </li>
                <li>
                  <a href="/datascience" class="nav-link px-0">
                    <span class="d-none d-sm-inline">สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ (Data
                      Science)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/lecturer" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline text-white">รายชื่ออาจารย์</span>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>


      <div class="modal fade" id="PostBlogModal" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog" style="max-width: 45%">
          <div class="modal-content">
            <div class="modal-header">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="เขียนหัวข้อ" v-model="title" />
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <div class="mb-3">
                  <textarea rows="5" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="เขียนเนื้อหา" v-model="content"></textarea>
                  <!-- <div class="mt-4">
                    <label for="formFile" class="form-label" style="
                          display: flex;
                          align-items: start;
                          justify-content: start;
                        ">เลือกไฟล์รูปภาพ</label>
                    <input class="form-control" type="file" id="formFile"/>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <div style="width: 100%">
                <div class="d-flex" style="
                      width: 100%;
                      display: flex;
                      align-items: end;
                      justify-content: end;
                    ">
                  <button class="btn btn-warning" type="submit" @click="addBlog()" style="width: 100px">
                    โพสต์
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="col" id="bgcolor">
        <div class="position">
          <form class="d-flex" style="width: 45%; margin-top: 2%">
            <!-- <button class="btn btn-success me-2" type="submit">Search</button> -->
            <input class="form-control me-2" type="search" placeholder="ค้นห้าโพสต์ที่เกี่ยวข้อง" aria-label="Search"
              v-model="search" />
            <a href="BlogModal" style="width: 200px" class="btn btn-warning" @click="getBlog(post)"
              data-bs-toggle="modal" data-bs-target="#PostBlogModal">เขียนโพสต์</a>
          </form>
        </div>

        <div class="modal fade" id="BlogModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" style="max-width: 45%">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="card-title" id="contcolor" style="
                    display: flex;
                    align-items: start;
                    justify-content: start;
                    font-weight: 900;
                  ">
                  {{ post.title }}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3 justify-content-end">
                    <p class="card-text text-left" style="
                        display: flex;
                        align-items: start;
                        justify-content: start;
                      " id="contcolor2">
                      {{ post.content }}
                    </p>
                    <p style="
                        display: flex;
                        align-items: start;
                        justify-content: start;
                        margin-left: 2%;
                      ">
                      ผู้เขียน {{ post.create_by_email }}
                    </p>


                    <div id="contcolor3" v-for="(comment, index ) in comments " :key='index'
                      style="margin-bottom: 15px">
                      <p style="
                          display: flex;
                          align-items: start;
                          justify-content: start;
                        ">
                        <button type="button" @click="deleteComment(comment)" class="btn-close btn-close-white"
                          aria-label="Close" style="
                            display: flex;
                            align-items: start;
                            justify-content: start;"
                            v-if="comment.comment_by_email == user.email"
                          ></button>
                        {{ comment.comment_by_email }}
                      </p>
                      <p class="card-text d-flex" style="
                          display: flex;
                          align-items: end;
                          justify-content: end;
                        ">
                        {{ comment.comment }}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-center">
                <div style="width: 100%">
                  <div class="d-flex" style="width: 100%">
                    <input class="form-control me-2" type="input" v-model="comment" placeholder="เขียนความคิดเห็น"
                      aria-label="Search" />
                    <button class="btn btn-success" type="submit" style="width: 100px" @click="addComment()">
                      ตกลง
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="search != ''">
          <p class="mt-3">ผลลัพธ์การค้นหา</p>
          <div v-for="(post, index) in filteredList" :key="index">
            <div class="position">
              <div class="card" style="width: 45%; margin-bottom: 2%">
                <!-- <img class="card-img-top" :src="post.img" alt="Card image cap" style="max-width: 100%" /> -->
                <div class="card-body">
                  <h5 class="card-title" id="contcolor" style="
                    display: flex;
                    align-items: start;
                    justify-content: start;
                    font-weight: 900;
                  ">
                    {{ post.title }}
                  </h5>
                  <p class="card-text text-left" style="
                    display: flex;
                    align-items: start;
                    justify-content: start;
                  " id="contcolor2">
                    {{ post.content }}
                  </p>
                  <div class="d-flex justify-content-between" v-if="post.create_by_email == user.email">
                    <button @click="deleteBlog(Post)" type="button" class="btn btn-outline-danger">
                      ลบโพสต์
                    </button>
                    <a href="BlogModal" class="btn btn-light" @click="getComment(Post)" data-bs-toggle="modal"
                      data-bs-target="#BlogModal">เเสดงความคิดเห็น</a>
                  </div>
                  <div class="d-flex" v-if="post.create_by_email != user.email" style="
                    display: flex;
                    align-items: end;
                    justify-content: end;
                  ">
                    <a href="BlogModal" class="btn btn-light" @click="getComment(Post)" data-bs-toggle="modal"
                      data-bs-target="#BlogModal">เเสดงความคิดเห็น</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div v-if="search === ''" class="mt-5">

          <div v-for="(Blog, index) in Blogs" :key="index">
            <div class="position">
              <div class="card" style="width: 45%; margin-bottom: 2%;">
                <!-- <img class="card-img-top" :src="Blog.img" alt="Card image cap" style="max-width: 100%" /> -->
                <div class="card-body">
                  <h5 class="card-title" id="contcolor" style="
                    display: flex;
                    align-items: start;
                    justify-content: start;
                    font-weight: 900;
                  ">
                    {{ Blog.title }}
                  </h5>
                  <p class="card-text text-left" style="
                    display: flex;
                    align-items: start;
                    justify-content: start;
                  " id="contcolor2">
                    {{ Blog.content }}
                  </p>
                  <div class="d-flex justify-content-between" v-if="Blog.create_by_email == user.email">
                    <button @click="deleteBlog(Blog)" type="button" class="btn btn-outline-danger">
                      ลบโพสต์
                    </button>
                    <a href="BlogModal" class="btn btn-light" @click="getComment(Blog)" data-bs-toggle="modal"
                      data-bs-target="#BlogModal">เเสดงความคิดเห็น</a>
                  </div>
                  <div class="d-flex" v-if="Blog.create_by_email != user.email" style="
                    display: flex;
                    align-items: end;
                    justify-content: end;
                  ">
                    <a href="BlogModal" class="btn btn-light" @click="getComment(Blog)" data-bs-toggle="modal"
                      data-bs-target="#BlogModal">เเสดงความคิดเห็น</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.position {
  display: flex;
  align-items: center;
  justify-content: center;
}

#contcolor {
  background-color: rgb(228, 228, 228);
  /* border: 0px solid rgb(0, 0, 0); */
  padding: 10px;
  color: rgb(0, 0, 0);
  border-radius: 6px;
}

#contcolor2 {
  background-color: rgb(233, 233, 233);
  /* border: 0px solid rgb(0, 0, 0); */
  padding: 10px;
  color: rgb(0, 0, 0);
  border-radius: 6px;
}

#contcolor3 {
  background-color: rgb(71, 71, 71);
  /* border: 0px solid rgb(0, 0, 0); */
  padding: 10px;
  color: rgb(255, 255, 255);
  border-radius: 6px;
}

#bgcolor {
  background-image: linear-gradient(to left,
      rgb(255, 255, 255),
      rgb(206, 231, 255));
}
</style>

<script>

import axios from "axios";
import { jwtDecode } from "../jwt-decode";


export default {
  data() {
    return {
      Blogs: [],
      // users: [],
      comments: [],
      comment: "",
      post: [],
      token: "",
      title: "",
      content: "",
      search: '',
      users: '',
    };

  },
  computed: {
    filteredList() {
      console.log(this.Blogs)
      return this.Blogs.filter(post1 => {
        return post1.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    deleteBlog(blog) {
      axios.delete(process.env.VUE_APP_HOST + 'blog/' + blog.blog_id + '/' + this.user.email, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then((res) => {
        alert("ลบสำเร็จ")
        this.getblog()
      }).catch(error => alert("ไม่สามารถลบได้"))
    },

    addBlog() {
      this.checklogin();
      if (this.content == "" && this.title == "") {
        alert("กรุณาพิมพ์ข้อความ");
        return;
      } else {
        this.user = jwtDecode(this.token)
        if (this.$cookies.get('refresh_token') != null) {
          this.user = jwtDecode(this.$cookies.get('refresh_token'))

        }
        console.log(this.user)
        if (this.token != null) {
          axios
            .post(
              process.env.VUE_APP_HOST + "blog/create",
              {
                title: this.title,
                content: this.content,
                img: "",
                create_by_email: this.user.email
              },
              {
                headers: {
                  Authorization: `Bearer ${this.token}`,
                },
              }
            )
            .then((res) => {
              if (res) {
                alert("บันทึกข้อความสำเร็จ");
                this.getblog()
              }
            })
            .catch((error) => {
              alert(error);
              console.log(error);
            });
        } else {
          alert("กรุณา login")
        }
      }
      this.title = ''
      this.content = ''
    },
    getblog() {
      axios
        .get(process.env.VUE_APP_HOST + `blog`)
        .then((res) => {
          this.Blogs = res.data.sort().reverse();
        })
        .catch((error) => console.log(error));
    },
    checklogin() {
      console.log("test")
      if (this.$cookies.get("refresh_token") != null) {

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
              this.token = res.data.accessToken;
              this.$users = jwtDecode(res.data.refreshToken);
              this.user = jwtDecode(res.data.refreshToken);
              this.email = this.user.email
              console.log(this.$users)
              this.$router.push({ name: 'home', query: { redirect: '/' } })
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("ยังไม่ได้ login")
        this.$router.push({ name: 'login', query: { redirect: '/login' } })
      }
    },
    getComment(blog) {
      this.post = blog
      axios
        .get(process.env.VUE_APP_HOST + `comment/` + blog.blog_id)
        .then((res) => {
          this.comments = res.data;
        });
    },
    addComment() {

      this.checklogin();
      if (this.comment == "") {
        alert("กรุณาพิมพ์ข้อความ");
        return;
      } else {
        this.user = jwtDecode(this.token)
        if (this.$cookies.get('refresh_token') != null) {
          this.user = jwtDecode(this.$cookies.get('refresh_token'))

        }
        if (this.token != null) {
          axios
            .post(
              process.env.VUE_APP_HOST + "comment/create",
              {
                blog_id: this.post.blog_id,
                comment_by_email: this.user.email,
                comment_by_firstname: this.user.firstname,
                comment: this.comment,
              },
              {
                headers: {
                  Authorization: `Bearer ${this.token}`,
                },
              }
            )
            .then((res) => {
              if (res) {
                axios
                  .get(process.env.VUE_APP_HOST + `comment/` + this.post.blog_id)
                  .then((res) => {
                    this.comments = res.data;
                  });
                alert("บันทึกข้อความสำเร็จ");
                this.comment = ''

              }
            })
            .catch((error) => {
              alert(error);
              console.log(error);
            });
        } else {
          alert("กรุณา login")
        }
      }
    }, deleteComment(comment) {
      axios.delete(process.env.VUE_APP_HOST + 'comment/' + comment.comment_id + '/' + this.user.email, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then((res) => {
        alert(res.data)
        axios
          .get(process.env.VUE_APP_HOST + `comment/` + this.post.blog_id)
          .then((res) => {
            this.comments = res.data;
          });
      }).catch(error => alert("ไม่สามารถลบได้"))
    }
  },
  created() {
    this.getblog()
  }, updated() {
    this.checklogin()
  }
};
</script>
