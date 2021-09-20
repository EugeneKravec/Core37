// const refs = {
//     propagation: document.querySelector('.propagation'),
//     articleProp: document.getElementById('article-prop'),
//     articleList: document.getElementById('article-list'),
// }
import { refs } from "../references/refs.js";
import images from "../references/images.js"
const { propagation, articleProp, articleList } = refs


console.dir(IntersectionObserver);

const options = {
    root: articleList,
    rootMargin: '5px 5px 5px 5px',
    threshold: 0.5,
}

function callback(elems) {
    console.log(elems);
}
const myObserver = new IntersectionObserver(callback, options)

console.log('Экзмепляр наблюдателя', myObserver);

myObserver.observe(1)