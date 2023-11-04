let parentOfProducts = document.querySelector(".products .container");
let parent = document.querySelector(".nopro");

function productInCartFromStorage(allproducts = []) {
  let elements =
    JSON.parse(localStorage.getItem("productInCart")) || allproducts;
  let index = 0;
  elements.map((item) => {
    let productsInShop = "";
    productsInShop = `
        <div class="box border rounded wow fadeInLeftBig">
        <div class="image">
            <img class="img-fluid rounded" src="${item.img}" alt="">
        </div>
        <div class="content">
            <span class="text-black-50">${item.category}</span>
            <h6>${item.title}</h6>
             <div class="star d-flex align-items-center">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
             </div>
    <div class="icons d-flex justify-content-between align-items-center">
    <small>${item.price}$</small>
     <span onclick="removeFormCart(${item.id})" class="removeFormCart">X</span>
    </div>
        </div>
     
      </div> 
        `;
    index++;
    parentOfProducts.innerHTML += productsInShop;
  });
  if (elements.length == 0) {
    parent.innerHTML = "<h1 class='noItem'>There is no items there !</h1>";
  } else {
    parent.innerHTML = "";
  }
}

productInCartFromStorage();
function removeFormCart(id) {
  let productsInCart = localStorage.getItem("productInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filterItems = items.filter((pro) => pro.id !== id);
    localStorage.setItem("productInCart", JSON.stringify(filterItems));
    console.log(filterItems);
    productInCartFromStorage(filterItems);
    window.location.reload();
  }
}
