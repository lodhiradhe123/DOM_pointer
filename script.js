const point = document.querySelector(".pointer");

const body = document.querySelector("body");

body.addEventListener("mousemove", function (e) {
  point.style.left = e.x + "px";
  point.style.top = e.y + "px";
});
