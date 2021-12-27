const fruits=[,,,]//쉼표만큼 배열 크기 지정 가능.

for(let i =0;i<fruits.length;i++){
    console.log(fruits[i])
}

const fruits1=new Array()//생성자 함수를 사용하여 선언 가능.

fruits1[0]="apple0"
fruits1[1]="apple1"
fruits1[2]="apple2"

for(let i =0;i<fruits1.length;i++){
    console.log(fruits1[i])
}

const fruits2=new Array('banana','banana1','banana2')

for(let i =0;i<fruits2.length;i++){
    console.log(fruits2[i])
}

const fruits3 = new Array(3).fill(0)//new Array(크기) 지정가능, fill(초기값)지정가능 *자주씀

console.log(fruits3)

for(let i=0; i<fruits3.length; i++){
    console.log('I like ', fruits3[i])
}

//배열 요소 CRUD(배열요소 생성, 조회, 변경, 삭제)
const movies = []

movies[0] = 'Harry Potter'
movies[1] = 'Indiana Jhones'
movies[2] = 'Jurassic Park'
movies[3] = 'Iron man'
movies[4] = 'Spider man'

//반복문 안에 var 를 사용하면 반복문으로 배열을 모두 조회한 다음에도 인덱스 값(i)이 남아있기 때문에 
 //되도록이면 let 이나 const 를 사용하도록 한다. 
console.log('/* My Favorite Movie List basic for*/')
for(let i=0; i<movies.length; i++){
    console.log(movies[i])
}
console.log('*****************************')

console.log('/* My Favorite Movie List for~in*/')
for(let index in movies){//in은 index로 조회
    console.log(movies[index])
}
console.log('*****************************')

console.log('/* My Favorite Movie List for~of*/')
for(let movie of movies){ //of는 요소로 조회
    console.log(movie)
}
console.log('*****************************')
console.log("변경전")
console.log(movies)

movies[2] = 'Terminator'
console.log("변경후")
console.log(movies)

delete movies[2]//해당 요소가 지워지고 자리가 empty가 됨 요소가 당겨지는것이 아님.
console.log("삭제")
console.log(movies)

//배열 참조 CRUD (참조, 참조변경, 참조 삭제)

const movies_copied = movies
console.log("주소복사")
console.log(movies_copied)

console.log("스프레드 연산자")
const movies_copied1 = [...movies]
movies_copied[2]="DOKDO"
//자바스크립트 최신문법에서는 스프레드 연산자(...)을 사용하여 원본 배열을 복사할 수 있다. 
//이렇게 하면 새로운 배열이 생성되기 때문에 원본배열과 복사한 배열의 주소값은 다르다.
console.log("복사배열")
console.log(movies_copied1)
console.log('원본배열')
console.log(movies)

console.log("주소카피")
console.log(movies_copied===movies)
console.log("스프레드연산자")
console.log(movies_copied1===movies)//복사한 뒤에는 원본이나 복사본의 내용을 변경하여도 서로 영향 x
