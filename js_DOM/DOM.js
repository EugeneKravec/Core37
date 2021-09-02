// 1. window
console.log(window);

// 2. document
// console.dir(document);

// узлы


// Доступ к элементам:
// 1. По селектору тега
const titleByTeg = document.querySelector('h1')
// console.log(title);
// console.dir(title);

// 2. По селектору идентификатора
const titleById = document.querySelector('#title')
// console.log(titleById);
// console.dir(titleById);

// 3. По селектору класса
const titleByClass = document.querySelector('.maim-class')
// console.log(titleByClass);
// console.dir(titleByClass);

// 4. По селектору атрибута
const titleByAttr = document.querySelector('[data-name="my-title"]')
// console.log(titleByAttr);
// console.dir(titleByAttr);

// 5. По селетору наследника
const elemByParent = document.querySelector('body>h1')
// console.log(elemByParent);
// console.dir(elemByParent);

// Доступ ко всем наследникам
const elemsByParent = document.querySelectorAll('body>h1')
// console.dir(elemsByParent); // NodeList - Кол-ция эл-тов с методом форЫч

// 6. По селектору потомка
const elemByProto = document.querySelector('body p')
console.log(elemByProto);
console.dir(elemByProto);



// сво-ва элемента
// создание узлов
// клонирование
// встраивание в HTML
// удаление
// ==========================

