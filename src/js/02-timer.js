// Подключаем библиотеки
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Выносим рефы
const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}

// Выносим переменные
const DELAY = 1000;
let intervalID = null;
let finishTime = null;

// Создаём объект параметров для flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        finishTime = selectedDates[0];

      if (finishTime <= Date.now()) {
        refs.btnStart.disabled = true;
        Notify.failure('Please choose a date in the future');
        return;
        }
      refs.btnStart.disabled = false;
  },
};

// Запускаем flatpickr  
flatpickr('#datetime-picker', options);

// По дефолту назначаем кнопку btnStart on disabled 
refs.btnStart.disabled = true;

// Вешаем слушетеля на btnStart и запускаем ф-цию timerStart
refs.btnStart.addEventListener('click', timerStart);

// Ф-ция Таймер
function timerStart() {
    refs.input.disabled = true;
    refs.btnStart.disabled = true;

    intervalID = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = finishTime - currentTime;
    
        if (deltaTime <= 0) {
            clearInterval(intervalID);
            Notify.success('The time is up, the day has come!');
        } else {
            const convertTime = convertMs(deltaTime);
            renderTime(convertTime, refs);
        }
    }, DELAY); 
}

// Ф-ция конвертирует время
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// Ф-ция добавляет ноль перед значением времени, если число однозначное  
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

// Ф-ция отрисовует время
function renderTime(timeObj, refsObj) {
    Object.keys(timeObj).forEach(key => {
        refsObj[key].textContent = timeObj[key];
    });
}