//1
const fruit = 'apple'
let printB = null

// 구현하기
function printA(){
    const fruit='banana'
    console.log(fruit)
}

printB=printA

printA() // banana
printB() // banana.

//2
const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

function filter(f,arrs){
    newArray=[]
    if(arrs===undefined||arrs===null||arrs.length===0)return;
    for(let i in arrs){
        if(f(arrs[i])){
            newArray.push(arrs[i])
        }
    }
    return newArray
}

function filterSeoul(arr){
    if(arr.city==='seoul')return true
    else return false
}

const seoulFriends = filter(filterSeoul, friends)
console.log(seoulFriends)

//3
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
function pow(a, b){
    return a**b
    // 구현하기
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
        case '^':
            ret = funcs[4](a, b)
            break
    }
    return ret
}

// 테스트 케이스
const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider, pow)
const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider, pow)
const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider, pow)
const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider, pow)
const ret5 = calculator('^', 3, 4, add, subtract, multiply, divider, pow)

console.log(ret1)
console.log(ret2)
console.log(ret3)
console.log(ret4)
console.log(ret5)


const comment = '너는 진짜 못말리는 바보 똥개 그지 멍청이 말미잘이다 !'
const insults = ['바보', '똥개', '그지','멍청이']

function separateStr(str,delimeter){
    let arr=str.split(delimeter)

    function filterKeyword(keywords){
        for(let keyword of keywords){
            arr=arr.filter(word=>!word.includes(keyword))
        }
        return arr
    }
    return filterKeyword
}

let strSeparated=separateStr(comment,' ')(insults)
console.log(strSeparated)

//5
const animals = ['cat', 'lion', 'turtle', 'dog', 'pig']
const fruits = ['apple', 'banana', 'strawberry', 'pineapple', 'pear']

function searchItemInCategory(category){
    function searchItem(key){
        return category.filter(item => item === key)[0]
    }
    return searchItem
}

console.log(searchItemInCategory(animals)('turtle')) 
// searchItemInCategory 내부의 category 변수에는 접근하지는 못하지만 외부인자에 의하여 수정이 가능함
console.log(searchItemInCategory(animals)('pig'))
console.log(searchItemInCategory(animals)('banana'))
console.log(searchItemInCategory(fruits)('strawberry'))
console.log(searchItemInCategory(fruits)('apple'))
console.log(searchItemInCategory(fruits)('lion'))

//6
console.log("===============")
const Person=(function(){
    let _name=''
    let _age=0
    let _city=''

    let _friend=JSON.parse(JSON.stringify(friends))
    
    const getFriends=function(){
        return JSON.parse(JSON.stringify(_friend))
    }

})


const person = new Person('영희', 23, 'daegu', friends)

console.log(person.friends === friends) // 전역변수 friends 와 프라이빗변수 _friends 주소가 다름을 확인함 (복사본을 저장하기 때문)
person.friends[0].name =  "태양" // 프라이빗 변수 _friends 를 변경하지 못함 (복사본을 조회하기 때문)

console.log(person.friends) 
console.log(person.filterFriendsInMyCity())

const person2 = new Person('철수', 35, 'seoul', friends)
console.log(person2.friends) 
console.log(person2.filterFriendsInMyCity())
