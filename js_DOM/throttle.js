console.dir(_.throttle);
// _.throttle(callback, time) - принимает в себя

const refs = {
    form: document.querySelector('.form'),
}
const { form } = refs
console.log(form);

form.addEventListener('input', _.throttle((e) => {

    console.log(e.target.value);

}, 2000)
)