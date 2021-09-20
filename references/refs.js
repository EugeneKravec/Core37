// 1-й вариант экспорта
export const refs = {
    form: document.querySelector('.form'),
    propagation: document.querySelector('.propagation'),
    articleProp: document.getElementById('article-prop'),
    articleList: document.getElementById('article-list'),
}
// Иморт будет выглядеть так:
// import { refs } from "../references/refs.js";


// 2-й вариант экспорта
// export default = {
//     propagation: document.querySelector('.propagation'),
//     articleProp: document.getElementById('article-prop'),
//     articleList: document.getElementById('article-list'),
// }
// Иморт будет выглядеть так:
// import refs from "../references/refs.js";