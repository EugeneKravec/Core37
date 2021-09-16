window.addEventListener('click', callback)

function callback(params) {
    console.log('click случился');
}

// Самые распространенные события
// С формой: submit() 
// - когда нажади на enter или на кнопку с тайпом submit
// input - болтливое событие ввода данных
// change

// События клавыиатуры:
// keydown, keypress, keyup

// События мышки:
// click, 
// focus && blur 
// - фокусируемся на событии и блюр - обратный эффект

// =================================================
// КАК РАБОТАЕТ ОТПРАВКА ФОРМЫ ????

const form = document.querySelector('.form')
console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault() // Оставливаем дефолтную отправку формы
    console.log('отправка формы произошла', event);
    console.log(event.target.children.firstInput.value);
    console.log(event.target.children.secondInput.value);

    console.log(event.target.elements.firstInput.value);
    console.log(event.target.elements.secondInput.value);
})

// form.addEventListener('input', (evt) => {
//     console.log(evt);
// })

form.addEventListener('change', (e) => {
    console.log(e);
})