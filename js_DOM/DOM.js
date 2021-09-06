// 1. window
// console.log(window);

// 2. document
// console.dir(document);


// Доступ к элементам:

// 1. По селектору тега ==============================
const titleByTeg = document.querySelector('h1')
// console.log(title);
// console.dir(title);
// ===================================================


// 2. По селектору идентификатора ====================
const titleById = document.querySelector('#title')
// console.log(titleById);
// console.dir(titleById);
// Хорошая практика давать элементам айди и 
// обращаться к нему через getElementById
const titleByGetId = document.getElementById('title')
// console.log(titleByGetId);
// console.dir(titleByGetId);
// ===================================================


// 3. По селектору класса ============================
const titleByClass = document.querySelector('.maim-class')
// console.log(titleByClass);
// console.dir(titleByClass);
const titleByClassName = document.getElementsByClassName('div')
// console.log(titleByClassName);
// console.dir(titleByClassName); // HTMLCollection - Коллекция без методов массива
const elemsByClassName = document.querySelectorAll('.div')
// console.log(elemsByClassName);
// ===================================================


// 4. По селектору атрибута =========================
const titleByAttr = document.querySelector('[data-name="my-title"]')
// console.log(titleByAttr);
// console.dir(titleByAttr);
// ==================================================


// 5. По селетору наследника ========================
const elemByParent = document.querySelector('body>p')
// console.log(elemByParent);
// console.dir(elemByParent);

// Доступ ко всем наследникам
const elemsByParent = document.querySelectorAll('body>p')
// console.dir(elemsByParent); // NodeList - Кол-ция эл-тов с методом форЫч
// =================================================


// 6. По селектору потомка =========================
const elemByProto = document.querySelector('body p')
// console.log(elemByProto);
// console.dir(elemByProto);

// Доступ ко всем аотомкам
const elemsByProto = document.querySelectorAll('body p')
// console.log(elemsByProto);
// ==================================================



// Узлы: узел-элемент (тег), узел комментарий и текстовый узел

// Навигация
console.log(titleByTeg.parentNode); // получаем родителя
console.log(titleByTeg.childNodes); // NodeList + text
console.log(titleByTeg.children); // HTMLCollection
// сво-ва элемента
// создание узлов
// клонирование
// встраивание в HTML
// удаление
// ==========================

