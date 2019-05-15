var button = document.querySelector(".main-nav_toggle");
var menu = document.querySelector(".main-nav_wrapper");
var head = document.querySelector(".page-header")


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menu.classList.contains("menu-show")) {
      menu.classList.remove("menu-show");
      head.classList.remove("menu-position");
    }
    else {
      menu.classList.add("menu-show");
      head.classList.add("menu-position");
    }
  });
