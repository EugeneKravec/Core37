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



// Узлы: 
// узел - элемент(тег), узел - комментарий и текстовый узел

// Навигация
// console.log(titleByTeg.parentNode); // получаем тег родителя
// console.log(titleByTeg.childNodes); // NodeList + text
// console.log(titleByTeg.children); // HTMLCollection
// firstChild lastChild previousSibling nextSibling - text||elem
// firstElementChild lastElementChild previousElementSibling nextElementSibling - tag only

// сво-ва элемента
// console.dir(titleByTeg);
// id - отдельное сво-во
// class - в сво-ве classList в виде DOMTokenList

// console.log(titleByTeg.classList);
// titleByTeg.classList.add('new-title')
// console.log(titleByTeg.classList.contains('sdfs'));
// console.log(titleByTeg.classList.contains('new-title'));
// titleByTeg.classList.remove('main-class')
// titleByTeg.classList.replace('new-title', 'title')
// titleByTeg.classList.toggle('main-class')

// attributes
// console.log(titleByTeg.attributes); // NamedNodeMap - object
// console.log(titleByTeg.attributes.id);
// console.log(titleByTeg.dataset);
// // добавить новый атрибут
// titleByTeg.setAttribute('name', 'main-title')
// console.log('GET', titleByTeg.getAttribute('name'));

// console.log(titleByTeg.textContent);

// СТИЛИ 
console.log(titleByTeg.style); // Инлайново будут записываться стили
titleByTeg.style.color = 'blue'
titleByTeg.style.background = 'yellow'
titleByTeg.style.padding = '20px'
titleByTeg.style.margin = '20px'
titleByTeg.textContent = 'wo wo wo'

// создание узлов - объект с бекеда
// 3 способа создания разметки:
// 1. createElement() => object

const button = document.createElement('button')
button.textContent = 'click'
button.style.background = 'green'
button.classList.add('my-btn')
button.setAttribute('type', 'button')
button.dataset.type = 'my-button'

console.log('textContent', button.textContent);
console.dir(button);
console.log(button);

// 2. `` - строчная разметка => string

const stringBtn = `<button class="my-btn" type="button" data-type="my-button" style="background:green">click</button>`
// console.log(stringBtn);

// 3. Клонирование

const cloneButtonBefore = button.cloneNode(false)
cloneButtonBefore.textContent = 'before'

const cloneButtonAfter = button.cloneNode(false)
cloneButtonAfter.textContent = 'after'

const cloneButtonPrepend = button.cloneNode(false)
cloneButtonPrepend.textContent = 'Prepend'

const cloneButtonAppend = button.cloneNode(false)
cloneButtonAppend.textContent = 'Append'

// ВСТРАИВАНИЕ в HTML - 2 вида

// 1. Для объектов, созданных через createElement
titleByTeg.after(cloneButtonAfter) // строго после элемента
titleByTeg.before(cloneButtonBefore) // строго перед элементом

titleByTeg.appendChild(cloneButtonAppend)
titleByTeg.prepend(cloneButtonPrepend)


// удаление
// ==========================

