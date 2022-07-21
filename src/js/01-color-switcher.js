// Находим наши элементы и создаём переменные
const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const DELAY = 1000;
let intervalID = null;

// Вешаем слушателя на кнопки и по событию запускаем ф-ции
btnStartEl.addEventListener('click', onChangeColor);
btnStopEl.addEventListener('click', onNotChangeColor);

// Ф-ция для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Ф-ция генерирует случайный цвета фона на body раз в секунду
function onChangeColor() {
    onDisabledBtnStar();
    offDisabledBtnStop();

    intervalID = setInterval(() => {
        const randomColor = getRandomHexColor();
        bodyEl.style.backgroundColor = randomColor;
    }, DELAY);
}

// Ф-ция останавливает генерацию случайного цвета фона на body
function onNotChangeColor() {
    offDisabledBtnStar();
    onDisabledBtnStop();

    clearInterval(intervalID);
}

// Ф-ция активирует disabled на кнопке Start
function onDisabledBtnStar() {
    btnStartEl.disabled = true;
}

// Ф-ция деактивирует disabled на кнопке Start
function offDisabledBtnStar() {
    btnStartEl.disabled = false;
}

// Ф-ция активирует disabled на кнопке Stop
function onDisabledBtnStop() {
    btnStopEl.disabled = true;
}

// Ф-ция деактивирует disabled на кнопке Stop
function offDisabledBtnStop() {
    btnStopEl.disabled = false;
}