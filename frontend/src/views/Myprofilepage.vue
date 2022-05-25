<template>
  
  <div class="container full-width">
    
    <div class="row">
    <div class="col-9 position" style="margin-top: 1%">
    <form class="d-flex" style="width:50%">
      <input class="form-control me-2" type="search" placeholder="ค้นห้าโพสต์ที่เกี่ยวข้อง" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
  <div class="col-4 position" style="margin-top: 1%">
    <form class="d-flex">
      <button class="btn btn-outline-success" type="submit">เขียนโพสต์</button>
    </form>
  </div>
  
      <div class="col-9 taller position" style="margin-top: 2%;">
        <div class="card position" style="width: 50%">
          <img
            class="card-img-top"
            src="../assets/testpic.jpg"
            alt="Card image cap"
            style="max-width: 100%"
          />
          <div class="card-body">
            <h5
              class="card-title"
              style="display: flex; align-items: start; justify-content: start"
            >
              Card title
            </h5>
            <p class="card-text text-left" style="align:left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style="display: flex; align-items: end; justify-content: end">
              <a href="#" class="btn btn-primary">เเสดงความคิดเห็น</a>
              <a href="#" class="btn btn-primary" style="margin-left: 1%"
                >อ่านเพิ่มเติม</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-100"></div>

      <!-- <div class="col" style="background-color: blue">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1"
            >Item 1</a
          >
          <a class="list-group-item list-group-item-action" href="#list-item-2"
            >Item2</a
          >
          <a class="list-group-item list-group-item-action" href="#list-item-3"
            >Item 3</a
          >
          <a class="list-group-item list-group-item-action" href="#list-item-4"
            >Item 4</a
          >
        </div>
      </div> -->

      <div class="col-9 taller position" style="margin-top: 2%;">
        <div class="card position" style="width: 50%">
          <img
            class="card-img-top"
            src="../assets/testpic2.jpg"
            alt="Card image cap"
            style="max-width: 100%"
          />
          <div class="card-body">
            <h5
              class="card-title"
              style="display: flex; align-items: start; justify-content: start"
            >
              Card title
            </h5>
            <p class="card-text text-left" style="align:left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style="display: flex; align-items: end; justify-content: end">
              <a href="#" class="btn btn-primary">เเสดงความคิดเห็น</a>
              <a href="#" class="btn btn-primary" style="margin-left: 1%"
                >อ่านเพิ่มเติม</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-100"></div>
      


    </div>
    
  </div>
</template>

<style>
.full-width {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}
.position {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
