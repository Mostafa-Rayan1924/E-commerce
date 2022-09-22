let product = JSON.parse(localStorage.getItem("products"));
let proid = localStorage.getItem("proid");
let itemdetail = document.querySelector(".item-detail div");
let productdetailes = product.find((item) => item.id == proid);

itemdetail.innerHTML += `<img class="rounded mb-2 bigimg" src="${productdetailes.imgurl}" alt="">
<h2 class="text-black-50">price: 78$</h2>
<span class="fs-4">Title: ${productdetailes.title}</span>
`;

let smallimg = document.querySelectorAll(".smallimg img");
let bigimg = document.querySelector(".bigimg");
let imgfour = document.querySelector(".four");
imgfour.src = bigimg.src;
smallimg.forEach((item) => {
  item.addEventListener("click", function () {
    bigimg.src = item.src;
  });
});
