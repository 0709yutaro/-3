const btn = document.getElementById("moveBtn");
const image = document.getElementById("myImage");

let moved = false;

btn.addEventListener("click", () => {
  if (!moved) {
    image.style.left = "300px"; // 動かす距離
  } else {
    image.style.left = "0";
  }
  moved = !moved;
});


