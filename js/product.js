let productscontainer = document.querySelector(".features .container");
let nopro = document.querySelector(".nopro");
function showproduct(allproducts = []) {
  if (JSON.parse(localStorage.getItem("productincarts")).length === 0)
    nopro.innerHTML = "There is no item here!";

  // find the data from local to show it in page if no data make empty array
  let products =
    JSON.parse(localStorage.getItem("productincarts")) || allproducts;

  let result = ``;
  let proui = products.map((item) => {
    result += ` <div class="box border rounded">
      <div class="image">
          <img class="img-fluid rounded"  src="${item.imgurl}" alt="">
      </div>
      <div class="content">
          <span class="text-black-50">addidas</span>
          <h6>${item.title}</h6>
           <div class="star d-flex align-items-center">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
           </div>
  <div class="icons d-flex justify-content-between align-items-center">
  <small>$99</small>
  <i  onclick="removefromcart(${item.id})" class="fa-solid fa-trash bg-dark p-2 rounded"></i>
  </div>
    <button onclick="accept()" class="btn  my-1 p-2">accept item</button>
      </div>
    </div>`;
  });
  productscontainer.innerHTML = result;
}
showproduct();
function removefromcart(id) {
  // the data in local storage
  let productincart = localStorage.getItem("productincarts");
  // check if theirs data im storage
  if (productincart) {
    // convert data in local from string to obj
    let items = JSON.parse(productincart);
    // filter data if item number === number of id remove it and make array have the others items
    let filtereditem = items.filter((item) => item.id !== id);
    // after delete make the other items in local storage
    localStorage.setItem("productincarts", JSON.stringify(filtereditem));
    // function to show the change after delete
    showproduct(filtereditem);
  }
}
function accept() {
  let acceptpopup = document.querySelector(".accept");
  acceptpopup.style.display = "block";
  setTimeout(() => {
    acceptpopup.style.display = "none";
  }, 1500);
  falling();
}
let falling = function () {
  let s = document.createElement("div");
  congratulations.append(s);
  let t = setInterval(() => {
    let h = document.createElement("div");
    s.append(h);
    h.innerHTML = "&#128151";
    h.classList.add("heart");
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDuration = `${Math.random() * 1.5} s`;

    let f = document.createElement("div");
    s.append(f);
    f.innerHTML = "&#128153";
    f.classList.add("heart");
    f.style.left = `${Math.random() * 100}%`;
    f.style.animationDuration = `${Math.random() * 1.5} s`;
  }, 90);
  setTimeout(() => {
    clearInterval(t);
  }, 2000);
  setTimeout(() => {
    s.remove();
  }, 2000);
};
