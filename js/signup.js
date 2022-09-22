let email = document.getElementById("email");
let username = document.getElementById("user");
let password = document.getElementById("password");
let sign = document.getElementById("sign");

sign.onclick = function (eo) {
  eo.preventDefault();
  if (email.value === "" && username.value === "" && password.value === "") {
    alert("please fill data");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "../html/login.html";
    }, 1000);
  }
};
