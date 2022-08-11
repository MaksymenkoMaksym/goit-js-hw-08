import throttle from 'lodash.throttle';
const emailInputValue = document.querySelector('input');
const messageInputValue = document.querySelector('textarea');
const formData = document.querySelector('form');

emailInputValue.addEventListener('input', throttle(onInputSave, 500));

messageInputValue.addEventListener('input', throttle(onInputSave, 500));

formData.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    return console.log(setdataForStorage);
});

let getdataFromStorage = localStorage.getItem("feedback-form-state");

let setdataForStorage = {
    email: getdataFromStorage?.email,
    message: getdataFromStorage?.message,
};

//перевод JSON строки з пам'яті в об'єкт в скрипті
let dataFromStorage = JSON.parse(getdataFromStorage);
//Значення з пам'яті до субміта
messageInputValue.value = dataFromStorage?.message ?? ' ';
emailInputValue.value = dataFromStorage?.email ?? ' ';

function onInputSave(event) {
    if (this.name === 'email') {
        setdataForStorage.email = this.value
    }
    if (this.name === 'message') {
        setdataForStorage.message = this.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(setdataForStorage));
}
