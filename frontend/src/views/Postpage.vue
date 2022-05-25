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
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline"
                      >สาขาวิชาเทคโนโลยีสารสนเทศ (IT)</span
                    >
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline"
                      >สาขาเทคโนโลยีสารสนเทศทางธุรกิจ (BIT)</span
                    >
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline"
                      >สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ (Data
                      Science)</span
                    >
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" class="nav-link px-0 align-middle">
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
      <div class="col">
        <div class="position">
          <form class="d-flex" style="width: 45%; margin-top: 2%">
          <button class="btn btn-outline-success me-2" type="submit">
              Search
            </button>
            <input
              class="form-control me-2"
              type="search"
              placeholder="ค้นห้าโพสต์ที่เกี่ยวข้อง"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              เขียนโพสต์
            </button>
          </form>
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
                style="
                  display: flex;
                  align-items: start;
                  justify-content: start;
                "
              >
                Card title
              </h5>
              <p class="card-text text-left" style="align: left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div
                style="display: flex; align-items: end; justify-content: end"
              >
                <a href="#" class="btn btn-primary">เเสดงความคิดเห็น</a>
                <a href="#" class="btn btn-primary" style="margin-left: 1%"
                  >อ่านเพิ่มเติม</a
                >
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
</style>
