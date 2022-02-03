function Book(name, price, release, authors){
    this.name = name
    this.price = price
    this.release = release
    this.authors = authors
}

//prototype.으로 등록한 메소드는 메모리 할당을 1번만 하면
//모든 객체가 공유가능. this로 등록할 경우 메모리 낭비.
Book.prototype={
    getInfo(){
    console.log('----- 책 정보 -----')
    console.log('제목: ', this.name)
    console.log('가격: ', this.price)
    console.log('초판: ', this.release)
    console.log('저자: ', this.authors.join(' '))
    },
    discount(){
        if(this.name === 'python'){
            this.price -= 1000
        }
    },
    get getPrice(){
        return this.price
    },
    set addAuthor(newAuthor){
        this.authors.push(newAuthor)
    }
}

const book = new Book(
    'javascript',
    21000,
    '2019-12-03',
    ['mark', 'victoria']
)

console.dir(Book) // 생성자 함수 출력
console.log(Book.prototype) // 생성자 함수의 프로토타입 객체

book.getInfo()

console.log(book)

const book1 = new Book(
    'javascript',
    21000,
    '2019-12-03',
    ['mark', 'victoria'],
)

const book2 = new Book(
    'python',
    18700,
    '2022-01-07',
    ['syleemomo']
)


book1.discount()
book1.addAuthor = 'sunrise'
console.log(book1.name, book1.getPrice)
console.log(book1.authors)

book2.discount()
console.log(book2.name, book2.getPrice)

console.log("======================================")
for(let prop in book){
    console.log(prop,book[prop])
}

console.log("======================================")
for(let key of Object.keys(book)){
    console.log(key, book[key])
}

console.log(Object.keys(book))

console.log(Object.values(book))

console.log('price' in book)
console.log('title' in book)
console.log('getPrice'in book)
console.log(book.hasOwnProperty('price'))
console.log(book.hasOwnProperty('title'))
//상속받은 프로퍼티도 true
console.log('getInfo'in book)
//상속받은 프로퍼티는 false반환
console.log(book.hasOwnProperty('getInfo'))


book.name = 'python'
book['price'] = 3700
book.authors[1] = 'sun'

console.log(book)

const book3 = {...book, release: '2022-01-17'}
console.log(book)
console.log(book3)

// delete book.price
// console.log(book)


let book4

const books=[book,book1,book2,book3,
    book4=new Book(
        'harrypoter',
        17000,
        '2022-02-03',
        ['K-rolling']
    )
]

console.log(books)

console.log("===========================")

const target = Object.assign({}, book)

book.price = 3200
book.authors[0]='하이!'

console.log(book) 
console.log(target)

const target2 = JSON.parse(JSON.stringify(book))

book.authors[0] = '변경'

console.log(book) 
console.log(target2)