const refs = {
    propagation: document.querySelector('.propagation'),
    articleProp: document.getElementById('article-prop'),
    articleList: document.getElementById('article-list'),
}

const { propagation, articleProp, articleList } = refs

// EVENT Propagation - распространение событий

// Capture - погружение / затопление.
// Target - цель - узел на котором произошло событие.
// Bubbling - Всплытие - работаем с этим событием.

window.addEventListener('click', (e) => {
    console.log('window', e);
})
propagation.addEventListener('click', (e) => {
    console.log('propagation', e);
})