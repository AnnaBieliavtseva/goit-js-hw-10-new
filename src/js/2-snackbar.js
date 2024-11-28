import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const delay = evt.target.elements.delay.value;

  const promise = new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (evt.target.elements.state.value === 'fulfilled') {
        resolved(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rejected(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value =>
      iziToast.success({
        message: value,
        icon: '',
        progressBar: false,
        close: false,
        position: 'topRight',
      })
    )
    .catch(error =>
      iziToast.error({
        message: error,
        icon: '',
        progressBar: false,
        close: false,
        position: 'topRight',
      })
    );
}
