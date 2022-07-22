// import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Импорт библиотеки "notify"

// const formEl = document.querySelector('.form');
// const delayEl = document.querySelector('input[name="delay"]');
// const stepEl = document.querySelector('input[name="step"]');
// const amountEl = document.querySelector('input[name="amount"]');

// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault();

//     const step = Number(stepEl.value);
//     let delay = Number(delayEl.value);
//     let amountInterval = 0;
    
//     const intervalID = setInterval(() => {
//         amountInterval += 1;
//         if (amountEl.value < amountInterval) {
//             clearInterval(intervalID);
//             return;
//         }
//         createPromise(amountInterval, delay).then(onFulfilled).catch(onRejected);
//         delay += step;
//     }, delay);
// }

// function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldResolve) {
//                 resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//             } else {
//                 reject(`❌ Rejected promise ${position} in ${delay}ms`);
//             }
//         }, delay);
//     });
// }

// function onFulfilled(result) {
//     Notify.success(result);
// }
// function onRejected(error) {
//     Notify.failure(error);
// }

/** */
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise ${position} in ${delay}ms`);
            }
        }, 1000);
    }); 
}

function onMakeFulfilled(result) {
    console.log(result);
    Notify.success(result, {
    useIcon: false,
    });
}

function onMakeRejected(result) {
    console.log(result);
    Notify.failure(result, {
    useIcon: false,
    });
}

createPromise(2, 1500)
  .then(onMakeFulfilled)
  .catch(onMakeRejected);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });