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

let savedData = JSON.parse(localStorage.getItem("STORAGE_KEY"));

try {
    messageInputValue.value = savedData?.message ?? ' ';
    emailInputValue.value = savedData?.email ?? ' ';

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}


function onInputSave() {
    dataFromForm[this.name] = this.value;
    localStorage.setItem("STORAGE_KEY", JSON.stringify(dataFromForm));
}

function onSubmitreset(event) {
    event.preventDefault();

    if (!messageInputValue.value || !emailInputValue.value) {
        return
    }

    storage.remove("STORAGE_KEY");
    formData.reset();
    return console.log(dataFromForm);
}

