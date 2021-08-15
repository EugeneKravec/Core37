
// ================ #1 ======================
function Post(title = 'title', text = 'lorem ipsum') {
    this.title = title
    this.text = text
}

Post.prototype.updateTitle = function (value) {
    return this.title = value
}

const post1 = new Post()
console.log(post1);

// =============== #2 ======================

function NewPost(title, text, imageUrl = '') {
    Post.apply(this, [title, text])
    this.image = imageUrl
}
console.log(NewPost.prototype);
NewPost.prototype = Object.create(Post.prototype)
NewPost.prototype.constructor = NewPost

NewPost.prototype.updateImage = function (url) {
    return (this.image = url)
}

const newPost1 = new NewPost(undefined, undefined,
    'https://cdnimg.rg.ru/img/content/213/70/99/iStock-1148609295_d_850.jpg')

console.log(newPost1);

// ============== #3 ======================

function BestPost(autor, imageUrl, title, text) {
    NewPost.call(this, imageUrl, title, text)
    this.autor = autor
}

BestPost.prototype = Object.create(NewPost.prototype)
BestPost.prototype.constructor = BestPost

BestPost.prototype.showAutor = function () {
    console.log(this.autor);
}

//  new - вызываем экземпляр конструктора

const bestPost1 = new BestPost('Eugene')
console.log(bestPost1);
bestPost1.showAutor()
bestPost1.updateImage('https://')
bestPost1.updateTitle('My new Post about JS')