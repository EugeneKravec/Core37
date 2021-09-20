console.dir(_.throttle);
// _.throttle(callback, time) - принимает в себя

// const refs = {
//     form: document.querySelector('.form'),
// }

import { refs } from "../references/refs.js";
const { form } = refs
console.log(form);

form.addEventListener('input', _.throttle((e) => {

    console.log(e.target.value);
    // Выводит первый символ, а затем через время остальное
}, 2000)
)