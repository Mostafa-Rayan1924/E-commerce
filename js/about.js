// links1,2 two links of navbar 1for signing 2for public
let links1 = document.querySelector(".links");
let links2 = document.querySelector(".links2");
// check if local storage have info of username
if (localStorage.getItem("username")) {
  links1.style.display = "none";
  links2.style.display = "flex";
} else {
  links1.style.display = "flex";
  links2.style.display = "none";
}
// close and open navbar
let bars = document.querySelector(".bars");
bars.onclick = function () {
  links2.classList.toggle("active");
};
btngoshopping.onclick = function () {
  window.location = "../html/shop.html";
};
