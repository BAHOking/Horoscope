// Поворот картинки
let imgRotate = document.querySelector(".img__img1");

if (imgRotate) {
  let arr = [5, -5];
  let i = 0;

  setInterval(function () {
    imgRotate.style.transform = `rotate(${arr[i]}deg)`;
    i++;
    if (i >= arr.length) {
      i = 0;
    }
  }, 2000);
}
