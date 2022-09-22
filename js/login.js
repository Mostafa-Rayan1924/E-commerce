let username = document.getElementById("user");
let password = document.getElementById("password");
let login = document.getElementById("login");

login.onclick = function (eo) {
  eo.preventDefault();
  if (username.value === "" && password.value === "") {
    alert("please fill data");
  } else {
    if (
      localStorage.getItem("username").trim() === username.value.trim() &&
      localStorage.getItem("password").trim() === password.value.trim()
    ) {
      setTimeout(() => {
        window.location = "../html/index.html";
      }, 1000);
    }
  }
};
