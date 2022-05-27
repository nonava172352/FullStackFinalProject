<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        >
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                class="nav-link px-0 align-middle"
              >
                <i class="fs-4 bi-speedometer2"></i>
                <span class="ms-1 d-none d-sm-inline text-white"
                  >รายชื่อนักศึกษาตามสาขา</span
                >
              </a>
              <ul
                class="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="/it" class="nav-link px-0">
                    <span class="d-none d-sm-inline"
                      >สาขาวิชาเทคโนโลยีสารสนเทศ (IT)</span
                    >
                  </a>
                </li>
                <li>
                  <a href="/bit" class="nav-link px-0">
                    <span class="d-none d-sm-inline"
                      >สาขาเทคโนโลยีสารสนเทศทางธุรกิจ (BIT)</span
                    >
                  </a>
                </li>
                <li>
                  <a href="/datascience" class="nav-link px-0">
                    <span class="d-none d-sm-inline"
                      >สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ (Data
                      Science)</span
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/lecturer" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline text-white"
                  >รายชื่ออาจารย์</span
                >
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>

      <div class="col" id="bgcolor">
        <div class="position">
          <form class="d-flex" style="width: 45%; margin-top: 2%">
            <button class="btn btn-success me-2" type="submit">Search</button>
            <input
              class="form-control me-2"
              type="search"
              placeholder="ค้นห้าโพสต์ที่เกี่ยวข้อง"
              aria-label="Search"
            />
            <button class="btn btn-warning" type="submit" style="width: 200px">
              เขียนโพสต์
            </button>
          </form>
        </div>

        <!-- <div v-if="search != ''"> -->
        <!-- <div v-for="(post, index) in filtereListd" :key="index"> -->
        <div
          class="modal fade"
          id="BlogModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="max-width: 45%">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                class="card-title"
                id="contcolor"
                style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                  font-weight: 900;
                "
              >
                Blog.title
              </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3 justify-content-end">
                    <p
                class="card-text text-left"
                style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                "
                id="contcolor2"
              >
                Blog.content
              </p>
              <p style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                  margin-left: 2%;
                "
                >ผู้เขียน Blog.email</p>
              <!-- ทำลูปคอมเเม้นตรงนี้ ข้างล่าง-->
              <div id="contcolor3">
                <p style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                "><button type="button" class="btn-close btn-close-white" aria-label="Close" style="
                  display: flex;
                  align-items: start;
                  justify-content: start;"></button> ผู้เขียน Blog.email.comment</p>
                
              <p
                class="card-text d-flex"
                style="
                  display: flex;
                  align-items: end;
                  justify-content: end;
                "
              >
                Blog.comment
              </p>
              </div>
              <!-- ทำลูปคอมเเม้นตรงนี้ ข้างบน-->
                  
                  </div>

                </form>
              </div>
              <div class="modal-footer justify-content-center">
                <div style="width: 100%">
                <form class="d-flex" style="width: 100%">
                  <input
                    class="form-control me-2"
                    type="input"
                    placeholder="เขียนความคิดเห็น"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-success"
                    type="submit"
                    style="width: 100px"
                  >
                    ตกลง
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="position">
          <div class="card" style="width: 45%; margin-top: 2%">
            <img
                  class="card-img-top"
                  src="../assets/testpic.jpg"
                  alt="Card image cap"
                  style="max-width: 100%"
                />
            <div class="card-body">
              <h5
                class="card-title"
                id="contcolor"
                style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                  font-weight: 900;
                "
              >
                Blog.title
              </h5>
              <p
                class="card-text text-left"
                style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                "
                id="contcolor2"
              >
                Blog.content
              </p>
              <div
                class="d-flex justify-content-between"
              >
                <button type="button" class="btn btn-outline-danger">ลบโพสต์</button>
                <a
                  href="BlogModal"
                  class="btn btn-light"
                  @click="getBlog(post)"
                  data-bs-toggle="modal"
                  data-bs-target="#BlogModal"
                  >เเสดงความคิดเห็น</a
                >
                
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
  <!-- </div> -->
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
  background-image: linear-gradient(
    to left,
    rgb(255, 255, 255),
    rgb(206, 231, 255)
  );
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Blog: [],
    };
  },
};
</script>
