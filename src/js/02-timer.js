// import flatpickr from 'flatpickr'; // Импорт библиотеки "flatpickr", описан в документации
// import 'flatpickr/dist/flatpickr.min.css'; // Дополнительный импорт стилей, для библиотеки "flatpickr"
// import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Импорт библиотеки "notify"

// // Находим наши элементы и создаём переменные
// const inputEl = document.querySelector('#datetime-picker');
// const btnStartEl = document.querySelector('button[data-start]');
// const DELAY = 1000;
// let intervalID = null;

// btnStartEl.addEventListener('click', onFutureDate)
// // Кнопка Start по дефолту disabled, запускаем ф-цию
// onDisabledBtnStar(); 

// // Второй аргумент функции "flatpickr", необязательный объект параметров
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     // console.log(selectedDates[0]);
//       if (selectedDates[0] < Date.now()) {
//         onDisabledBtnStar();
//         Notify.failure('Please choose a date in the future');
//         return;
//     }
//       offDisabledBtnStar();
//   },
// };

// // Запускаем библиотеку "flatpickr"
// flatpickr(inputEl, options);

// function onFutureDate() {
//     const futureDate = new Date(inputEl.value).getTime();
//     intervalID = setInterval(() => {
//         const currentDate = Date.now();

//         const deltaTime = futureDate - currentDate;
//         console.log(deltaTime);

//     }, DELAY);

//     // if (deltaTime < 0) {
//     //    clearInterval(intervalID); 
//     // }
// }

// // function offFutureDate() {
// //     if (deltaTime < 0) {
// //        clearInterval(intervalID); 
// //     }
// // }

// // Ф-ция для подсчета значений, где ms разница между конечной и текущей датой в миллисекундах
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// // Ф-ция активирует disabled на кнопке Start
// function onDisabledBtnStar() {
//     btnStartEl.disabled = true;
// }

// // Ф-ция деактивирует disabled на кнопке Start
// function offDisabledBtnStar() {
//     btnStartEl.disabled = false;
// }