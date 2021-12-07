let administrator = "syleemomo" 
console.log(administrator) // syleemomo 
//let administrator = "you"   //let은 선언후 재 초기화 불가.
console.log(administrator) // you 
administrator = "sunrise" 
console.log(administrator) // sunrise
//let을 쓰는 이유 : var변수는 같은 이름의 변수를 var로 다시 선언하고 초기화시 오류가 없음.
//협업시에 A작업자와 B작업자 서로 같은 이름의 변수를 다르게 생각하고 코드를 작성할수있음.
//이러한 문제 때문에 let으로 변수를 선언함.

const numbers=[] //배열선언
console.log(numbers)
const numberss=[0,1,2,3,4,5,6,7,8,9] 
console.log(numberss)

const person = {} // 객체 리터럴 
console.log(person)
const person2={
    name:'geno',//문자열
    age:28,//숫자
    isActive:true//불리언
}//객체선언
console.log(person2)

const age1 = 23 
const msg1 = "hello world !" 
const isLoading1 = true // 원시타입 자료형 검사 
function changeName(){}
console.log(typeof age1) //타입 검사하기 >> typeof 변수
console.log(typeof msg1) 
console.log(typeof isLoading1)
console.log(typeof changeName) //함수도 typeof로 검사가능.


const isLoading = true; 
const person3 = null;
let city; 
console.log(isLoading) 
console.log(person3) //개발자가 지정한 null
console.log(city)   //undifined 는 컴파일러가 값이 없다고 출력하는 값.


const numbersss = [0, "apple", 2, true, 4, 5, 3.484, 7, 8, 9] //script에서 배열은 객체임. 배열을 흉내낸 객체.
console.log(numbersss)
console.log(Array.isArray(numbersss))//근데 일단 형태가 배열이므로 배열타입으로 인식.

const message5=`happy burthday!\n\
\ti hope you have a great day today!\n\ 
\tyou are amazing guy for me`
console.log(message5) //문자열 입려시 줄바꿈 역슬래쉬(\) 붙이면 한줄로 인식.
//역슬래쉬 사이에 대행문자 가능 (줄바꿈,띄어쓰기,tap등)

const message="she dosen't look like a girly type"
console.log(message)
const message2='she dosen\'t look like a girly type'; 
console.log(message2); //작은 따옴표 사이를 문자열로 인식하기때문에 가운데 따옴표까지를 문자열로 인식함.
//따라서 가운데 따옴표 앞에 \(역슬래쉬)를 붙여 작은따옴표 하나만 인식하도록 만듬.

const name="sunrise"
const age="28"
const message3="happy birthday!" + name;
const message4=`happy birthday! ${name} to ${age} brith` 
//콘솔키(`)로 문자열을 묶으면 가운데 ${}를 통해 문자열합하기 가능
console.log(message3);
console.log(message4);

const administrator1 = "syleemomo"
console.log(administrator1) // syleemomo
//administrator1 = "you" 
//console.log(administrator1) //const는 상수 선언이기 때문에 이후 값을 변경하려 할시 오류 발생


const number = 10
const color = 0x00ff00
const unmask = 0o0074
const temparature = 21.5
const e = -2.9e-37 //<<-2.9*e^-37
const inf = Infinity
const ninf = - Infinity
const nan = NaN //Not A Number
console.log(number)
console.log(color)
console.log(unmask)
console.log(temparature)
console.log(e)
console.log(inf)
console.log(ninf)
console.log(nan)

const fruits = ["apple", "banana", "orange"] 
const car = { 
    name: "Grandier", 
    year: 2016, 
    owner: 'syleemomo' 
} // 객체 타입 자료형 검사 
console.log(typeof fruits)
console.log(typeof car)     //둘다 오브젝트로 출력
console.log(Array.isArray(fruits)) 
console.log(Array.isArray(car)) //구분하기위해 Array.isArray로 배열인지 아닌지(객체인지) 구분가능.
console.log(fruits instanceof Array) 
console.log(car instanceof Object) //instanceof 로도 구분가능. 우항에는 Array또는 Object등이 올수있다.

const age3="32"
const temparature3="37.6"
const msg3="hellow world 237"

const age3_casted=Number(age3)
const temparature3_casted=Number(temparature3)
const msg3_casted=Number(msg3)

console.log(age3)
console.log(typeof age3) //>>문자열로 인식
console.log(age3_casted)
console.log(typeof age3_casted)//Number를 통해 형변환.

console.log(temparature3)
console.log(typeof temparature3) //>>문자열로 인식
console.log(temparature3_casted)
console.log(typeof temparature3_casted)//Number를 통해 형변환.

console.log(msg3)
console.log(typeof msg3) //>>문자열로 인식
console.log(msg3_casted)
console.log(typeof msg3_casted)//Number를 통해 형변환을 했지만 숫자만 출력불가.

const msg4="237 hellow world"
const msg4_casted=parseInt(msg4)
console.log(msg4_casted) //parseInt로 숫자만 출력가능
//const msg3="hellow world 237"
const msg3_casted1=parseInt(msg3)
console.log(msg3_casted1) //parseInt로 숫자만 출력가능하지만 문자열 뒤에 있으면 출력불가(가운데 있어도 불가)

const age2 = 27 
const temperature2 = 32.7 // 정수형 실수형 구분하기 
console.log(Number.isInteger(age2)) 
console.log(Number.isInteger(temperature2))

// 원시타입과 객체 타입 
const age6 = 17 
console.log(typeof age6) 
const temp6 = 23.9 
console.log(typeof temp6) 
const isLoading6 = false
console.log(typeof isLoading6)  
const numbers6 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers6)) //<<배열로 인식중이라 typeof로 검사시 undifined로 출력.
const person6 = { name: 'GENO', city: 'DAEGU' } // 문자열형으로 변환하기 
console.log(typeof person6) 

const age6_casted = age6.toString() //toString() >> 문자열로 변경
const temp6_casted = temp6.toString() 
const isLoading6_casted = isLoading6.toString() 
const numbers6_casted = numbers6.toString() 
const person6_casted = person6.toString() 

console.log(age6_casted) 
console.log(typeof age6_casted) 

console.log(temp6_casted) 
console.log(typeof temp6_casted) 

console.log(isLoading6_casted) 
console.log(typeof isLoading6_casted) 

console.log(numbers6_casted) 
console.log(typeof numbers6_casted) 

console.log(person6)
console.log(person6_casted) 
console.log(typeof person6_casted)
///////////////////////////////////////
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(''))
//위 6문장은 모두 false로 판단한다. 외의 조건은 모두 true로 판단.


//변수호이스팅 >> 변수 호이스팅은 변수를 선언하기 전에 사용하는 것이다
console.log(age8)//var는 호이스팅 가능
var age8=10;
//console.log(age9)   //let 과 const는 호이스팅 불가.
//let age9=10;
//console.log(age10)
//const age10=10;

const age7 = 17 
const temp7 = 23.9 
const isLoading7 = false
const numbers7 = [1, 2, 3, 4, 5] 
const person7 = { name: 'sunrise', city: 'seoul' } 

const age7_casted = Boolean(age7) //boolean타입으로 형변환.
const temp7_casted = Boolean(temp7) 
const isLoading7_casted = Boolean(isLoading7) 
const numbers7_casted = Boolean(numbers7) 
const person7_casted = Boolean(person7) 

console.log(age7_casted) 
console.log(typeof age7_casted) 
console.log(temp7_casted) 
console.log(typeof temp7_casted) 
console.log(isLoading7_casted) 
console.log(typeof isLoading7_casted) 
console.log(numbers7_casted) 
console.log(typeof numbers7_casted) 
console.log(person7_casted) 
console.log(typeof person7_casted) //boolean타입으로 변환시 값이 들어가있으면 모두 true로 출력