import throttle from 'lodash.throttle';
import storage from './service-for-local.js'

const emailInputValue = document.querySelector('input');
const messageInputValue = document.querySelector('textarea');
const formData = document.querySelector('form');
const STORAGE_KEY = "feedback-form-state";
let dataFromForm = {};

emailInputValue.addEventListener('input', throttle(onInputSave, 500));
messageInputValue.addEventListener('input', throttle(onInputSave, 500));
formData.addEventListener('submit', onSubmitreset);


// Спосіб 1
const server = storage.load(STORAGE_KEY);

if (server) {
    messageInputValue.value = server.message;
    emailInputValue.value = server.email;

    dataFromForm.email = server.email;
    dataFromForm.message = server.message;
}

// Спосіб 2 
// let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// messageInputValue.value = savedData?.message ?? ' ';
// emailInputValue.value = savedData?.email ?? ' ';



function onInputSave() {
    dataFromForm[this.name] = this.value;
    storage.save(STORAGE_KEY, dataFromForm);
}

function onSubmitreset(event) {
    event.preventDefault();

    if (!messageInputValue.value || !emailInputValue.value) {
        return
    }

    storage.remove(STORAGE_KEY);
    formData.reset();
    return console.log(dataFromForm);
}

