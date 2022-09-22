// add pro to page with js
let productcontainer = document.querySelector(".features .container");

let products = JSON.parse(localStorage.getItem("products"));
let showpro;
showpro = function (products = []) {
  let result = ``;
  let proui = products.map((item) => {
    result += ` <div  class="box border rounded ">
    <div class="image">
        <img onclick="savedid(${item.id})" class="img-fluid rounded"  src="${item.imgurl}" alt="">
    </div>
    <div class="content">
        <span class="text-black-50">addidas</span>
        <h6>${item.title}</h6>
         <div class="star d-flex align-items-center">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
         </div>
<div class="icons d-flex justify-content-between align-items-center">
<small>$99</small>
<i  onclick="addedtocart(${item.id})" class="fa-solid fa-cart-plus"></i>
</div>
    </div>
  </div>`;
  });
  productcontainer.innerHTML = result;
};
showpro(JSON.parse(localStorage.getItem("products")));

// links1,2 two links of navbar 1for signing 2for public
let linkssign = document.querySelector(".links");
let linkspublic = document.querySelector(".links2");
// check if local storage have info of username
if (localStorage.getItem("username")) {
  linkssign.style.display = "none";
  linkspublic.style.display = "flex";
} else {
  linkssign.style.display = "flex";
  linkspublic.style.display = "none";
}
// close and open navbar
let menu = document.querySelector(".bars");
menu.onclick = function () {
  linkspublic.classList.toggle("active");
};

if (localStorage.getItem("username") === null) {
  window.location = "../html/signup.html";
}
// popup img in shop page

let cartsproducts = document.querySelector(".carts-products");
let innerproduct = document.querySelector(".innerproduct div");
let innerproducts = document.querySelector(".innerproduct");
let carts = document.querySelector(".carts");
let circlepro = document.querySelector(".circle");

let addeditem;
if (localStorage.getItem("productincarts")) {
  addeditem = JSON.parse(localStorage.getItem("productincarts"));
} else {
  addeditem = [];
}
if (addeditem) {
  addeditem.map((item) => {
    innerproduct.innerHTML += `<p class="proname">${item.title}</p>`;
  });
  circlepro.innerHTML = addeditem.length;
  circlepro.style.display = "block";
}
function addedtocart(id) {
  let itemname = document.querySelectorAll(".proname");
  let choosenitem = products.find((item) => item.id === id);

  addeditem.push(choosenitem);
  localStorage.setItem("productincarts", JSON.stringify(addeditem));

  innerproduct.innerHTML += `<p class="proname">${choosenitem.title}</p>`;
  circlepro.innerHTML = itemname.length + 1;
  circlepro.style.display = "block";
}
carts.addEventListener("click", function () {
  if (innerproduct.innerHTML !== "") {
    innerproducts.classList.toggle("block");
  }
});
function savedid(id) {
  localStorage.setItem("proid", id);
  window.location = "../html/prodtailes.html";
}
// search function
let searchBtn = document.getElementById("search");
searchBtn.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));
  if (e.target.value.trim() === "") {
    showpro(JSON.parse(localStorage.getItem("products")));
  }
});

function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.indexOf(title) !== -1);
  showpro(arr);
}
