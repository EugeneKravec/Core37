console.dir(_.debounce);
// _.throttle(callback, time) - принимает в себя

// const refs = {
//     form: document.querySelector('.form'),
// }

import { refs } from "../references/refs.js";

const { form } = refs
console.log(form);

const options = {
    // leading: true,
    traling: false,
}

form.addEventListener('input', _.debounce((e) => {

    console.log(e.target.value);
    // Не выводит первый символ, как Throttle 
    // Отпустили руки от клавиатуры и он вывел
}, 1000, options)
)