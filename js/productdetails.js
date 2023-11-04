let productFromDetails = localStorage.getItem("cartDetailsItem")
  ? JSON.parse(localStorage.getItem("cartDetailsItem"))
  : {};
console.log(productFromDetails);
document.querySelector(".parentOfCartDetails").innerHTML = `
<div class="element">
<img class="mb-2" src="${productFromDetails.img}" alt="">
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facere cupiditate mollitia ipsum dolorem reprehenderit alias natus soluta enim et laborum vero at repellat placeat excepturi assumenda nobis necessitatibus numquam quia, eum repellendus veniam, expedita omnis ab. Placeat voluptas eius cumque molestiae, eum mollitia dolore, accusamus recusandae saepe facilis officiis quasi delectus maiores architecto repellendus nobis nemo exercitationem facere magnam.</p>
<div class="d-flex">
    <h5>price:${productFromDetails.price}$</h5>
    <h5>${productFromDetails.title}</h5>
    <h5>category:${productFromDetails.category}</h5>
</div>
</div>`;
