import Notiflix, { Loading } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button[type="submit"]'),
};
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  refs.btn.setAttribute('disabled', true);

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  let delayEl = Number(delay.value);
  let stepEl = Number(step.value);
  let amountEl = Number(amount.value);

  const totalDelay = delayEl + stepEl * amountEl;

  if (
    delayEl === '' ||
    stepEl === '' ||
    amountEl === '' ||
    delayEl <= 0 ||
    stepEl <= 0 ||
    amountEl <= 0
  ) {
    Notiflix.Notify.failure(
      'Please make sure all fields are filled in correctly!👎'
    );
    return;
  }

  for (let position = 1; position <= amountEl; position += 1) {
    createPromise(position, delayEl)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delayEl += stepEl;
  }

  onBtnDisabled(totalDelay);
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onBtnDisabled(total) {
  setTimeout(() => {
    refs.btn.removeAttribute('disabled');
  }, total);
}
