// window.addEventListener('click', callback)

// function callback(params) {
//     console.log('click случился');
// }

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
// console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault() // Оставливаем дефолтную отправку формы
    // console.log('отправка формы произошла', event);
    // console.log(event.target.children.firstInput.value);
    // console.log(event.target.children.secondInput.value);

    // console.log(event.target.elements.firstInput.value);
    // console.log(event.target.elements.secondInput.value);
})

// form.addEventListener('input', (evt) => {
//     console.log(evt);
// })

// form.addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

const firstInput = document.querySelector('[name="firstInput"]')
// firstInput.addEventListener('focus', (e) => {
//     console.log('focus', e.target.value);
// })
// firstInput.addEventListener('blur', (e) => {
//     console.log('blur', e.target.value);
// })

// =================================================
// e.code - стандартизированное имя клавиши
// e.key - значение клавиши, согласно языковой разметке

// window.addEventListener('keydown', (e) => {
//     console.log('keydown', e.code, e.key);
// })
// window.addEventListener('keypress', (e) => {
//     console.log('keypress', e);
// }) // У системных клавиш нет события keypress
// window.addEventListener('keyup', (e) => {
//     console.log('keyup', e);
// })

// ==================================================

form.addEventListener('click', (e) => {
    console.log(e);
})

const decBtn = document.getElementById('dec')
const incBtn = document.getElementById('inc')
const counter = document.getElementById('count')

function getCounter() {
    let count = 0
    function inc() {
        return (count += 1)
    }
    function dec() {
        return (count -= 1)
    }
    return { inc, dec }
}
const c = getCounter()
console.log(c);

decBtn.addEventListener('click', () => {
    console.log('click');
    let result = c.dec()
    console.log(result);
    counter.textContent = result
})

incBtn.addEventListener('click', () => {
    console.log('click');
    let result = c.inc()
    console.log(result);
    counter.textContent = result
})

// ============================================
elem.addEventListener('click', callback)
elem.removeEventListener('click', callback)