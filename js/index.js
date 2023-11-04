function imgs() {
  let imgsproduct = document.querySelectorAll(
    ".features .container .image img"
  );
  imgsproduct.forEach((items) => {
    items.addEventListener("click", function () {
      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);

      let popup = document.createElement("div");
      popup.className = "popup";
      document.body.appendChild(popup);

      let photo = document.createElement("img");
      photo.className = "photo";
      photo.src = items.src;
      document.body.appendChild(photo);
      popup.appendChild(photo);
      document.body.appendChild(popup);
      let closeButton = document.createElement("span");
      closeButton.className = "close";
      let kalam = document.createTextNode("X");
      closeButton.appendChild(kalam);
      popup.appendChild(closeButton);

      closeButton.onclick = function () {
        popup.classList.add("closing");
        overlay.classList.add("closing");
      };

      let imgs = document.querySelectorAll(".img");
      imgs.forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector(".photo").src = item.src;
        });
      });
    });
  });
}
imgs();
// var of settingbox
let settingBox = document.querySelector(".setting-box");
// icon gear
let gear = document.getElementById("gear");
// event click to gear to make some order
gear.addEventListener("click", function (e) {
  // 1-put spin to gear
  gear.classList.toggle("fa-spin");
  // 2-put class open to open setting box
  settingBox.classList.toggle("open");
});
// get value of setlocal storage
if (localStorage.getItem("color") !== null) {
  document.documentElement.style.setProperty(
    "--main",
    localStorage.getItem("color")
  );
  // remove active class from all again to equal with item which in local storage
  document.querySelectorAll(".color-option li").forEach((eo) => {
    eo.classList.remove("actived");
    // put active in item in local storage
    if (eo.dataset.color === localStorage.getItem("color")) {
      eo.classList.add("actived");
    }
  });
}
//  variable of all li of colors
let liBalls = document.querySelectorAll(".color-option li");
// looping on lis
liBalls.forEach((item) => {
  item.addEventListener("click", function () {
    // body setproperty change main color with the current item
    document.documentElement.style.setProperty("--main", item.dataset.color);
    // remove active class from all elements
    liBalls.forEach((li) => {
      li.classList.remove("actived");
    });
    item.classList.add("actived");
    // set color value into local storage
    localStorage.setItem("color", item.dataset.color);
  });
});

// while scroling change color of background of (gear and setting box)
let iconbg = document.querySelector(".icon");
window.onscroll = function () {
  if (scrollY >= 450) {
    iconbg.style.background = "#222";
    settingBox.style.background = "#222";
  } else {
    settingBox.style.background = "#fff";
    iconbg.style.background = "#fff";
  }
};
// preloader while reload
// let preloader = document.getElementById("preload");
// window.onload = function () {
//   preloader.style.display = "block";
//   setTimeout(() => {
//     preloader.style.display = "none";
//   }, 3000);
// };
// scroll to top
let up = document.getElementById("up");
window.addEventListener("scroll", function () {
  if (scrollY >= 500) {
    up.classList.add("block");
  } else {
    up.classList.remove("block");
  }
});
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let logBtn = document.querySelector(".logout");
logBtn.addEventListener("click", () => {
  let confirmMsg = confirm("are you sure");
  if (confirmMsg) {
    localStorage.clear();
    window.location = "../html/signup.html";
  }
});
