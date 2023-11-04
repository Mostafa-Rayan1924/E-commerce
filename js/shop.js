// element which add title of item which clicked
let itemTitle = document.querySelector(".innerproduct div");
let cirlceOfLengthinCart = document.querySelector(".circle");
// function to make the products in page
let parentOfProducts = document.querySelector(".features .container");
function showProducts() {
  productsApi.map((item) => {
    let productsInShop = "";
    productsInShop = `
    <div class="box border rounded wow fadeInLeftBig">
    <div class="image">
        <img class="img-fluid rounded" src="${item.img}" alt="">
    </div>
    <div class="content">
        <span class="text-black-50">${item.category}</span>
         <h6 onclick="GoCartDetails(${item.id})" class="cardLink">${item.title}</h6>
         <div class="star d-flex align-items-center">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
         </div>
<div class="icons d-flex justify-content-between align-items-center">
<small>${item.price}$</small>
<i onclick=addToCart(${item.id}) class="fa-solid fa-cart-plus go"></i>
</div>
    </div>
 
  </div> 
    `;
    parentOfProducts.innerHTML += productsInShop;
  });
}
showProducts();

let addedItem = localStorage.getItem("productInCart")
  ? JSON.parse(localStorage.getItem("productInCart"))
  : [];
function getDateOfCartFromStorage() {
  let elementsInCartStorage = "";
  if (localStorage.getItem("productInCart")) {
    elementsInCartStorage = JSON.parse(localStorage.getItem("productInCart"));
    elementsInCartStorage.map((item) => {
      itemTitle.innerHTML += `<p>${item.title} ( ${item.quantity} )</p>`;
    });
    cirlceOfLengthinCart.innerHTML = elementsInCartStorage.length;
  }
}
getDateOfCartFromStorage();
function addToCart(id) {
  let clickedItem = productsApi[id];
  addedItem.push(clickedItem);

  let clickedItemTitle = clickedItem.title;
  itemTitle.innerHTML += `<p>${clickedItemTitle} ( ${clickedItem.quantity} )</p>`;
  cirlceOfLengthinCart.innerHTML = addedItem.length;

  localStorage.setItem("productInCart", JSON.stringify(addedItem));
}

// toggle open menu of items in cart
document.querySelector(".cartIcon").addEventListener("click", () => {
  if (addedItem.length > 0 || elementsInCartStorage.length > 0) {
    document
      .querySelector(".carts-products .innerproduct")
      .classList.toggle("block");
  }
});

// function search
function searchItem(value) {
  parentOfProducts.innerHTML = "";
  let itemsSearch = productsApi.map((item) => {
    if (item.title.toLowerCase().includes(value.toLowerCase())) {
      let productsInShop = "";
      productsInShop = `
        <div class="box border rounded wow fadeInLeftBig">
        <div class="image">
            <img class="img-fluid rounded" src="${item.img}" alt="">
        </div>
        <div class="content">
            <span class="text-black-50">${item.category}</span>
            <h6 class="cardLink">${item.title}</h6>
             <div class="star d-flex align-items-center">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
             </div>
    <div class="icons d-flex justify-content-between align-items-center">
    <small>${item.price}$</small>
    <i onclick=addToCart(${item.id}) class="fa-solid fa-cart-plus go"></i>
    </div>
        </div>
     
      </div> 
        `;
      parentOfProducts.innerHTML += productsInShop;
    }
  });
}

function GoCartDetails(id) {
  let itemChoosen = productsApi[id];
  localStorage.setItem("cartDetailsItem", JSON.stringify(itemChoosen));
  window.location = "../html/productDetails.html";
}
