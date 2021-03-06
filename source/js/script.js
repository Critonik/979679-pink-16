var button = document.querySelector(".main-nav_toggle");
var menu = document.querySelector(".main-nav_wrapper");
var head = document.querySelector(".page-header_top");
var logo = document.querySelector(".logo");

button.classList.add("main-nav_burger")
menu.classList.add("menu-show");
logo.classList.remove("logo-background_color");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("menu-show")) {
    menu.classList.remove("menu-show");
    head.classList.add("menu-position");
    button.classList.add("main-nav_toggle_cross");
  }
  else {
    menu.classList.add("menu-show");
    head.classList.remove("menu-position");
    button.classList.remove("main-nav_toggle_cross");
  }
});
