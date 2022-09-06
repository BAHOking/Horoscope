let main = document.querySelector(".questionnaire__box");

let servicesBox = document.querySelector(".services__box");
let formBox = document.querySelector(".form__box");
let footerTop = document.querySelector(".footer");
let buttonGo = document.querySelector(".button__go");

let currentYearArr = [];
let currentMonthArr = [];
let currentDayArr = [];

let i = 0;
let k = 0;

// Перше повернення кнопки на сторінку (яка запускає анкету)
oneShowButtonGo();
function oneShowButtonGo() {
  let formRadioInput = document.querySelectorAll(".form__radio-input");
  for (let elem of formRadioInput) {
    elem.addEventListener("change", function () {
      buttonGo.classList.add("show");
      footerTop.style.marginTop = "55px";
    });
  }
  buttonGo.addEventListener("click", questionnaire);
}

// Зміна Label в синій колір (головне меню)
LabelShineMain();
function LabelShineMain() {
  let formRadioInput = document.querySelectorAll(".form__radio-input");
  let formRadioLabel = document.querySelectorAll(".form__radio-label");

  for (let i = 0; i < formRadioInput.length; i++) {
    formRadioInput[i].addEventListener("click", function () {
      for (let j = 0; j < formRadioLabel.length; j++) {
        formRadioLabel[j].classList.remove("questionnaire__text-act");
      }
      formRadioLabel[i].classList.add("questionnaire__text-act");
    });
  }
}

// Запуск анкети
function questionnaire() {
  servicesBox.remove();
  formBox.remove();
  buttonGo.classList.remove("show");

  questionnaireScale(i);
  formTitle(i);
  RadioBox(i);

  if (i === 4) {
    DateOfBirthBox();
  }

  if (i === 5) {
    main.classList.add("hide");
  }

  i++;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// Створення шкали % проходження анкети (radio список)
function questionnaireScale(i) {
  let arr = [20, 40, 60, 80, 100];
  let questionnaireScale = document.createElement("div");

  if (i >= 1) {
    let questionnaireScaleR = document.querySelector(".questionnaireScale");
    questionnaireScaleR.remove();
  }

  questionnaireScale.classList.add("questionnaireScale");
  questionnaireScale.style.backgroundImage = `linear-gradient(to right, #b53e42 0, #b53e42 ${arr[i]}%, rgb(0 0 0 / 0) ${arr[i]}%, rgb(0 0 0 / 0) 100%)`;
  main.appendChild(questionnaireScale);
}

// Створення заголовків для radio списків
function formTitle(i) {
  //
  let arr = [
    "В какое время суток Вы чувствуете себя наиболее комфортно?",
    "Подскажите, мучает ли Вас бессонница последнее время?",
    "Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?",
    "Какой Вы видите свою жизнь через 5 лет?",
    "Введите дату своего рождения:",
  ];
  let formTitle = document.createElement("h2");

  if (i >= 1) {
    let formTitleR = document.querySelector(".questionnaire__title");
    formTitleR.remove();
  }

  formTitle.classList.add("questionnaire__title");
  formTitle.innerHTML = arr[i];
  main.appendChild(formTitle);
}

// Створення radio списка
function RadioBox(i) {
  let arrbox = [
    ["Утро", "Ночь", "Вечер", "День"],
    ["Да", "Нет", "Иногда"],
    ["Да", "Нет", "Иногда"],
    [
      "Брак, семья, дети, дом",
      "Путешествия по Миру",
      "Успешная карьера",
      "Всё вместе",
    ],
  ];

  if (i >= 1) {
    let divRadioBoxsR = document.querySelectorAll(".div__radio-box");
    for (let elem of divRadioBoxsR) {
      elem.remove();
    }
  }

  let j = 0;

  if (i < 4) {
    for (let elem of arrbox[i]) {
      let divRadioBox = document.createElement("div");
      divRadioBox.classList.add("div__radio-box");

      let divRadioElem = document.createElement("div");
      divRadioElem.classList.add("questionnaire__divRadioElem");

      let radioElem = document.createElement("input");
      radioElem.classList.add("questionnaire__input-radio");
      radioElem.type = "radio";
      radioElem.name = "radio";
      radioElem.id = j;

      let radioElemLabel = document.createElement("label");
      radioElemLabel.classList.add("questionnaire__text");
      radioElemLabel.innerHTML = elem;
      radioElemLabel.setAttribute("for", j);

      divRadioElem.appendChild(radioElem);
      divRadioElem.appendChild(radioElemLabel);

      divRadioBox.appendChild(divRadioElem);

      main.appendChild(divRadioBox);

      LabelShine();
      showButtonGo();

      j++;
    }
  }
}

// Зміна Label в синій колір (анкета)
function LabelShine() {
  let formRadioInput = document.querySelectorAll(".questionnaire__input-radio");
  let questionnaireText = document.querySelectorAll(".questionnaire__text");

  for (let i = 0; i < formRadioInput.length; i++) {
    formRadioInput[i].addEventListener("click", function () {
      for (let j = 0; j < questionnaireText.length; j++) {
        questionnaireText[j].classList.remove("questionnaire__text-act");
      }
      questionnaireText[i].classList.add("questionnaire__text-act");
    });
  }
}

// Повернення кнопки на сторінку
function showButtonGo() {
  let formRadioInput = document.querySelectorAll(".questionnaire__input-radio");

  for (let elem of formRadioInput) {
    elem.addEventListener("change", function () {
      buttonGo.classList.add("show");
    });
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// Створення масивів з датами
DateOfBirthOptions();
function DateOfBirthOptions() {
  let data = new Date();

  let currentYear = data.getFullYear(); // взяли з новой дати год
  let currentMonth = data.getMonth() + 1; // взяли з новой дати місяць
  let currentDay = data.getDate(); // взяли з новой дати день місяця

  function range(from, to) {
    // функция яка создає масів чисел з якогось по яке нада включітельно (щоб не создавать масів вручну самому)
    let result = [];
    for (let i = from; i <= to; i++) {
      result.push(getZero(i));
    }
    return result;
  }

  function getZero(num) {
    // Функція для додавання 0 до цифр.
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  currentYearArr = range(currentYear - 100, currentYear);
  currentYearArr.unshift("Год");
  currentMonthArr = range(1, 12);
  currentMonthArr.unshift("Месяц");
  currentDayArr = range(1, 31);
  currentDayArr.unshift("День");
}

// Створюю box з селектами
function DateOfBirthBox() {
  let selectBox = document.createElement("div");
  selectBox.classList.add("select__box");
  main.appendChild(selectBox);

  DateOfBirthDay();
  DateOfBirthMont();
  DateOfBirthYear();
  alertPleaseSelectAnAnswer();
}

// Створення option з днями
function DateOfBirthDay() {
  let selectBox = document.querySelector(".select__box");
  let selectDay = document.createElement("select");

  selectDay.classList.add("select__item");
  selectDay.id = "idSelectDay";
  selectBox.appendChild(selectDay);

  for (let elem of currentDayArr) {
    let option = document.createElement("option");
    option.innerHTML = elem;
    selectDay.appendChild(option);
  }

  selectDay.addEventListener("change", selectChangeHandle);
}

// Створення option з місяцями
function DateOfBirthMont() {
  let selectBox = document.querySelector(".select__box");
  let selectMonth = document.createElement("select");

  selectMonth.classList.add("select__item");
  selectMonth.id = "idSelectMonth";
  selectBox.appendChild(selectMonth);

  for (let elem of currentMonthArr) {
    let option = document.createElement("option");
    option.innerHTML = elem;
    selectMonth.appendChild(option);
  }

  selectMonth.addEventListener("change", selectChangeHandle);
}

// Створення option з роками
function DateOfBirthYear() {
  let selectBox = document.querySelector(".select__box");
  let selectYear = document.createElement("select");

  selectYear.classList.add("select__item");
  selectYear.id = "idSelectYear";
  selectBox.appendChild(selectYear);

  for (let elem of currentYearArr) {
    let option = document.createElement("option");
    option.innerHTML = elem;
    selectYear.appendChild(option);
  }

  selectYear.addEventListener("change", selectChangeHandle);
}

// Створення попередження
function alertPleaseSelectAnAnswer() {
  let selectBox = document.querySelector(".select__box");

  let pleaseSelectAnAnswerBox = document.createElement("div");
  pleaseSelectAnAnswerBox.classList.add("pleaseSelectAnAnswerBox");
  pleaseSelectAnAnswerBox.classList.add("hide");

  let pleaseSelectAnAnswerText = document.createElement("p");
  pleaseSelectAnAnswerText.innerHTML = "Пожалуйста, выберите ответ";

  pleaseSelectAnAnswerBox.appendChild(pleaseSelectAnAnswerText);

  selectBox.appendChild(pleaseSelectAnAnswerBox);
}

// Перевірка вибраної дати на валідність
function checkDate(year, month, day) {
  let date = new Date(year, month - 1, day);
  return (
    date.getFullYear() == year &&
    date.getMonth() == month - 1 &&
    date.getDate() == day
  );
}

// Якщо дата валідна то... якщо ні то...
function selectChangeHandle() {
  let selectYear = document.querySelector("#idSelectYear");
  let selectMonth = document.querySelector("#idSelectMonth");
  let selectDay = document.querySelector("#idSelectDay");
  let pleaseSelectAnAnswerBox = document.querySelector(
    ".pleaseSelectAnAnswerBox"
  );

  if (checkDate(selectYear.value, selectMonth.value, selectDay.value)) {
    selectYear.classList.add("questionnaire__text-act");
    selectMonth.classList.add("questionnaire__text-act");
    selectDay.classList.add("questionnaire__text-act");

    pleaseSelectAnAnswerBox.classList.add("hide");
    buttonGo.classList.add("show");

    astrologicalSign();
    if (k >= 1) {
      removeAstrologicalSign();
    }
    k++;
  } else {
    selectYear.classList.remove("questionnaire__text-act");
    selectMonth.classList.remove("questionnaire__text-act");
    selectDay.classList.remove("questionnaire__text-act");

    pleaseSelectAnAnswerBox.classList.remove("hide");
    buttonGo.classList.remove("show");
  }
}

// Пошук та створення потрібної картинки (зодіак)
function astrologicalSign() {
  let signs = [
    { img: "10_Capricorn.png", name: "Козерог", m: 1, d: 20 },
    { img: "11_Aquarius.png", name: "Водолей", m: 2, d: 20 },
    { img: "12_Pisces.png", name: "Рыбы", m: 3, d: 20 },
    { img: "1_aries.png", name: "Овен", m: 4, d: 20 },
    { img: "2_Taurus.png", name: "Телец", m: 5, d: 20 },
    { img: "3_Gemini.png", name: "Близнецы", m: 6, d: 21 },
    { img: "4_Cancer_Rak.png", name: "Рак", m: 7, d: 22 },
    { img: "5_Leo.png", name: "Лев", m: 8, d: 23 },
    { img: "6_Virgo.png", name: "Дева", m: 9, d: 23 },
    { img: "7_Libra.png", name: "Весы", m: 10, d: 23 },
    { img: "8_Scorpio.png", name: "Скорпион", m: 11, d: 22 },
    { img: "9_Sagittarius.png", name: "Стрелец", m: 12, d: 21 },
    { img: "10_Capricorn.png", name: "Козерог", m: 13, d: 20 },
  ];

  let day = document.querySelector("#idSelectDay");
  let month = document.querySelector("#idSelectMonth");
  let selectBox = document.querySelector(".select__box");

  let figure = document.createElement("figure");
  let signsImg = document.createElement("img");
  let figcaption = document.createElement("figcaption");

  figure.id = "figureId";
  signsImg.classList.add("signsImg");
  figcaption.classList.add("signsfigcaption");

  if (signs[+month.value - 1].d <= +day.value) {
    signsImg.src = `images/signs-img/${signs[+month.value].img}`;
    signsImg.alt = `${signs[+month.value].img}`;
    figcaption.innerHTML = `${signs[+month.value].name}`;
  } else {
    signsImg.src = `images/signs-img/${signs[+month.value - 1].img}`;
    signsImg.alt = `${signs[+month.value - 1].img}`;
    figcaption.innerHTML = `${signs[+month.value - 1].name}`;
  }

  figure.appendChild(signsImg);
  figure.appendChild(figcaption);

  selectBox.appendChild(figure);
}

// Видалення старої картинки (зодіак)
function removeAstrologicalSign() {
  let selectBox = document.querySelector(".select__box");
  let figure = document.querySelector("#figureId");
  selectBox.removeChild(figure);
}
