let throttle = require('lodash.throttle');

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



/*


Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
 в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. 
В противном случае поля должны быть пустыми.

При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message 
и текущими их значениями в консоль.

Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
Для этого добавь в проект и используй библиотеку lodash.throttle.
*/