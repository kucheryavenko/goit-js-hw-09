import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Импорт библиотеки "notify"

// Находим наши элементы и создаём переменные
const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

// Вешаем слушателя на форму и по сабмиту запускаем ф-цию
formEl.addEventListener('submit', onSubmit);

// Ф-ция собирает промисы с интервалом
function onSubmit(evt) {
    evt.preventDefault();

    const stepValue = Number(stepEl.value);
    const amountValue = Number(amountEl.value);
    let delayValue = Number(delayEl.value);
    let amountInterval = 0;

    const intervalId = setInterval(() => {

        amountInterval += 1;

        if (amountValue < amountInterval) {
            clearInterval(intervalId);
            return;
        }

        createPromise(amountInterval, delayValue)
            .then(onMakeFulfilled)
            .catch(onMakeRejected);
        
        delayValue += stepValue;

    }, delayValue)
}

// Ф-ция создает и возвращает промисы
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise ${position} in ${delay}ms`);
            }
        }, delay);
    }); 
}

// Ф-ция выводит результат resolve
function onMakeFulfilled(result) {
    console.log(result);
    Notify.success(result, {
        useIcon: false,
    });
}

// Ф-ция выводит результат reject
function onMakeRejected(error) {
    console.log(error);
    Notify.failure(error, {
        useIcon: false,
    });
}