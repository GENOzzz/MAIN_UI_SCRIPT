let sofaPrice=360000
console.log(sofaPrice)

let friendFoot=275
console.log(friendFoot)

const PI=3.14
console.log(PI)

const name1="sunrise"
const message="happy halloween"
console.log(`${message}, ${name1}`)


const letter = "Dear syleemomo. \n\
Hello, syleemomo ^^ \n\
My name is kiki. Your sincere friend \n\
How are you thesedays? \n\
Are you busy or not? \n\
I guess you haven\'t sleep much last night \n\
I am spending good day thesedays ! \n\
I hope to see you soon. See you later :)"   //줄바꿈 뒤에 공백시에 에러생김.유의.

console.log(letter)

//배열선언
const fruits=['사과','수박','바나나','배','샤인머스켓','딸기']
console.log(typeof fruits)
console.log(Array.isArray(fruits))//배열이므로 true
console.log(fruits)

//객체선언
const FavoritFood = {
    type : '중식',
    name : '짬뽕',
    price : 8000
}
console.log(typeof FavoritFood)
console.log(Array.isArray(FavoritFood))//객체이므로 false
console.log(FavoritFood)

//타입검사
const hoursForDay = 24 
const bookName = "Harry Potter" 
const isChecked = true

console.log(typeof hoursForDay)
console.log(typeof bookName)
console.log(typeof isChecked)

//배열인지 객체인지 검사
const cities = ["seoul", "deagu", "busan"] 
const bookInfo = { 
    name: 'Harry Potter', 
    price: 17000, 
    author: 'J.K Rolling' 
}
console.log(Array.isArray(cities)) //배열이므로 true
console.log(Array.isArray(bookInfo)) //객체이므로 false

// 정수형인지 실수형인지 구분하기 - 자료형 검사
const distanceSeoulToBusan = 370 
const sizeOfYourHeight = 275.9 

console.log(Number.isInteger(distanceSeoulToBusan)) //정수형이므로 true
console.log(Number.isInteger(sizeOfYourHeight)) //실수형이므로 false

//숫자형으로 변형
const speedOfCar = "37.5 m/s" 
const heightOfYourFriend = "289 cm"

const speed_casted=parseFloat(speedOfCar) 
//parseFloat으로 문자열과 결합해있는 숫자만 뽑아 speed_casted에 저장
const yourFriend_casted=parseInt(heightOfYourFriend) 
//parseInt으로 문자열과 결합해있는 숫자만 뽑아 yourFriend_casted에 저장

console.log(speed_casted)
console.log(yourFriend_casted)

// 문자열 타입으로 변환하기
const heightOfYourFriend1 = 289 
const temperature = 13.9 
const fruits1 = ["apple", "banana", "orange"] 

const Frein_casted=heightOfYourFriend1.toString()
const temp_casted=temperature.toString()
const fruits1_casted=fruits1.toString()

console.log(Frein_casted)
console.log(temp_casted)
console.log(fruits1_casted)



