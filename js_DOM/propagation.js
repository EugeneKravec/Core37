// const refs = {
//     propagation: document.querySelector('.propagation'),
//     articleProp: document.getElementById('article-prop'),
//     articleList: document.getElementById('article-list'),
// }

import { refs } from "../references/refs.js";
const { propagation, articleProp, articleList } = refs
console.log(refs);
// EVENT Propagation - распространение событий

// Capture - погружение / затопление.
// Target - цель - узел на котором произошло событие.
// Bubbling - Всплытие - работаем с этим событием.

// =================================================
window.addEventListener('click', (e) => {
    console.log('window:', e);
})
propagation.addEventListener('click', (e) => {
    console.log('propagation:', e);
})
articleProp.addEventListener('click', (e) => {
    console.log('articleProp:', e);
})
articleList.addEventListener('click', (e) => {
    console.log('articleList-1:', e);
})
// =================================================

// EVENT DELEGATION
articleList.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target.attributes.name.value);
    // console.log(e.target.textContent);
    console.log('articleList-2:', e.target.getAttribute('name'))
    e.stopPropagation(); // Все обработчики на єтом же элементе будут вызваны, а выше уже нет
    e.stopImmediatePropagation // TO STOP BUBBLING - BAD PRACTICE

})