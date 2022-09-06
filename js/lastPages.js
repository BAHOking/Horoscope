let stopStartMain = setInterval(function () {
  let main = document.querySelector(".questionnaire__box");
  if (main.classList.contains("hide")) {
    percentAnimation();
    clearInterval(stopStartMain);
  }
}, 0);

// Анімація прогресу
function percentAnimation() {
  let processingBox = document.querySelector(".processing__box");
  processingBox.classList.remove("hide");

  let boxPercent = document.querySelector(".processing__box-percent");
  let percent = document.querySelector(".processing__percent");
  let arr = [0, 10, 20, 40, 60, 80, 100];

  let liSpans = document.querySelectorAll(".processing__li-span");
  let readyBtn = document.querySelector(".processing__ready");

  let i = 0;

  let stopStart = setInterval(function () {
    boxPercent.style.backgroundImage = `linear-gradient(to right, #419330 0, #419330 ${arr[i]}%, #F3F4F8 ${arr[i]}%, #F3F4F8 100%)`;
    percent.innerHTML = `${arr[i]}%`;
    percent.style.marginLeft = `${arr[i] - 15}%`;

    liSpans[i].innerHTML = "Выполнено!";
    liSpans[i].style.color = "#419330";
    liSpans[i].style.fontWeight = "300";
    liSpans[i].style.fontSize = "12px";
    liSpans[i].style.lineHeight = "16px";
    i++;

    if (i >= liSpans.length) {
      clearInterval(stopStart);
      readyBtn.classList.remove("hide");
      readyBtn.addEventListener("click", lastPage);
    }
  }, 100);
}

// Повернення останньої сторінки
function lastPage() {
  let processingBox = document.querySelector(".processing__box");
  processingBox.classList.add("hide");

  let footer = document.querySelector(".footer");
  footer.classList.add("hide");

  let finalBox = document.querySelector(".final__box");
  finalBox.classList.remove("hide");

  let finalBtn = document.querySelector(".final__button");
  finalBtn.addEventListener("click", finalBtnSending);
}

// Побудова таблиці
async function finalBtnSending() {
  let url = "https://swapi.dev/api/people/1/";

  let response = await fetch(url);

  let commits = await response.text(); // читаем ответ в формате JSON
  console.log(commits);

  commits = JSON.parse(commits);
  console.log(commits);

  let tableBox = document.querySelector(".table__box");
  tableBox.classList.remove("hide");

  let table = document.querySelector(".table__table");

  for (let elem in commits) {
    let tr = document.createElement("tr");
    tr.classList.add("table__tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.classList.add("table__td");
    td2.classList.add("table__td");

    td1.innerHTML = elem;
    td2.innerHTML = commits[elem];

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);

    this.removeEventListener("click", finalBtnSending);
  }
}
