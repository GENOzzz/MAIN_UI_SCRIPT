const fruit = 'apple' // 전역변수

// 글로벌 스코프에 선언된 printA 함수
function printA(){
    const fruit = 'banana' // 지역변수
    console.log(fruit)
    printB()
}

printA() // banana

function printB(){
    console.log(fruit) 
}

printA() // apple
printB() // apple 
//printB 함수 내의 fruit 변수는 
//printB 함수가 호출될때 결정되는 것이 아니라 
//선언될때 결정되는 것이다. 

const global = 3 // 전역변수 (상위 스코프)

function globalFunction(){
    const localOuter = 2 // 외부함수 스코프
    function localFunction(){
        const local = 1 // 지역변수 
        return global + localOuter + local
    }
    return localFunction()
}

console.log(globalFunction())

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

function map(f, arr){
    const newArr = []
    for(let i in arr){
        newArr[i] = f(arr[i])
    }
    return newArr
}

function str2num(element){
    return parseInt(element)
}

const numbersParsed = map(str2num, numbers)
console.log(numbersParsed)

console.log("====================")
function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divider(a, b){
    return a / b
}

function calculator(mode, a, b, ...funcs){
    let ret = null
    switch(mode){
        case '+':
            ret = funcs[0](a, b)
            break
        case '-':
            ret = funcs[1](a, b)
            break
        case '*':
            ret = funcs[2](a, b)
            break
        case '/':
            ret= funcs[3](a, b)
            break
    }
    return ret
}

const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider)
const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider)
const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider)
const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider)

console.log(ret1)
console.log(ret2)
console.log(ret3)
console.log(ret4)

console.log("====================")
function initCount(){
    let cnt = 0
    function increaseCount(){
        cnt++
        return cnt
    }
    return increaseCount
}

const cnt1 = initCount() // 클로저 (독립적인 실행환경) 생성=>지역변수 cnt값을 기억함
const cnt2 = initCount() // 클로저 (독립적인 실행환경) 생성
const cnt3 = initCount() // 클로저 (독립적인 실행환경) 생성

cnt1() // 지역변수 cnt 는 함수실행에 의해서만 변경가능함
console.log(cnt1()) 

cnt2()
cnt2()
console.log(cnt2())

cnt3()
cnt3()
cnt3()
console.log(cnt3())

console.log("====================")
function makeAdder(){
    let a = 0
    let b = 0
    let c = 0
    function addNums(){
        return ++a + ++b + ++c
    }
    return addNums
}

const adder1 = makeAdder()
const adder2 = makeAdder()
const adder3 = makeAdder()


console.log(adder1())
console.log(adder2())
console.log(adder3())

let a1 = 0, b1 = 0, c1 = 0
let a2 = 0, b2 = 0, c2 = 0
let a3 = 0, b3 = 0, c3 = 0

function addNums(a, b, c){
    return ++a + ++b + ++c
}

console.log("====================")
console.log(addNums(a1, b1, c1))
console.log(addNums(a2, b2, c2))
console.log(addNums(a3, b3, c3))

console.log("====================")
function multiplyXtimes(x){
    function multiply(y){
        return x * y
    }
    return multiply
}

const multiply3times = multiplyXtimes(3) 

console.log(multiply3times(4)) // 인자로 주어진 값에 3배를 반환
console.log(multiply3times(13)) // 인자로 주어진 값에 3배를 반환

const multiply5times = multiplyXtimes(5)

console.log(multiply5times(4)) // 인자로 주어진 값에 5배를 반환
console.log(multiply5times(13)) // 인자로 주어진 값에 5배를 반환

const multiply7times = multiplyXtimes(7)

console.log(multiply7times(4)) // 인자로 주어진 값에 7배를 반환
console.log(multiply7times(13)) // 인자로 주어진 값에 7배를 반환

console.log("====================")

function initCount2(){
    let _cnt = 0
    function _updateCount(diff){
        _cnt += diff
    }
    return {
        increaseCount(){
            _updateCount(1)
        },
        decreaseCount(){
            _updateCount(-1)
        },
        get cnt(){
            return _cnt
        }
    }
}

const counter1 = initCount2() // 클로저 (독립적인 실행환경) 생성
const counter2 = initCount2() // 클로저 (독립적인 실행환경) 생성
const counter3 = initCount2() // 클로저 (독립적인 실행환경) 생성

counter1.increaseCount()
console.log(counter1.cnt) // 1

counter2.increaseCount()
counter2.increaseCount()
counter2.increaseCount()
counter2.decreaseCount()
console.log(counter2.cnt) // 2

counter3.decreaseCount()
counter3.decreaseCount()
counter3.decreaseCount()
counter3.decreaseCount()
counter3.increaseCount()
console.log(counter3.cnt) // -3