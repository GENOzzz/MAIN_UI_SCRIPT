//indexOf 검색시작 위치로부터 순서대로 검색
const animals=['lion','tiger','cat','dog','pig','cat','duck','cat']

const searchCat=animals.indexOf('cat')
console.log(searchCat)

const searchCat2=animals.indexOf('cat',3)//검색 시작 위치 추가가능
console.log(searchCat2)

const searchGiraffe=animals.indexOf('giraffe')
console.log(searchGiraffe)//해당 요소가 없으면 -1반환

const animalToSearch='cat'//쿼리(query)
const catBox=[]//찾은 인덱스 값들을 저장할 배열
let foundIndex=animals.indexOf(animalToSearch)//맨처음 찾은 인덱스 반환.
while(foundIndex!=-1){//없으면 -1을 반환하므로.
    catBox.push(foundIndex)//찾은 인덱스 catBox에 추가
    foundIndex=animals.indexOf(animalToSearch,foundIndex+1)//다시 추가 검색
}

console.log(catBox)

//lastIndexOf 검색시작 위치로 부터 역순으로 검색
const searchCatlast=animals.lastIndexOf('cat')
console.log(searchCatlast)

const searchCatlast2=animals.lastIndexOf('cat',6)
console.log(searchCatlast2)

//.find(판별함수) <<콜백함수 요소반환
//.findIndex(판별함수) <<인덱스 반환
// 판별함수
// function 판별함수이름(배열요소, 인덱스, 배열){
// 	return 판별조건
// }
const fruits=['apple','banana','orange','dragonfruit','wetermelon']

//판별함수
function longest(element){
    return element.length>6//판별조건
}
const found=fruits.find(longest)
console.log(found)

//.includes(검색) 주어진 값을 요소로 가지고 있는지 판단. true / false 반환
const seasons=['spring','summer','autumn','winter']

console.log(seasons.includes('summer'))//true
console.log(seasons.includes('fall'))//false

const title='Harry potter'

console.log(title.includes('potter'))//true
console.log(title.includes('z'))//false
console.log(title.includes('r'))//true

//판별함수
const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

function isShort(word){
    return word.length < 5
}
const wordsFiltered = words.filter(isShort)
//const wordsFilterd=words.filter(word=>word.length<5)//화살표 함수.
console.log(wordsFiltered)

function isLong(word){
    if(word.length>5){
        return true//판별조건을 만족하는 값은 새로운 배열에 추가
    }else{
        return false//그렇지 않으면 추가안함.
    }
}
const wordsFilteredlong=words.filter(isLong)
console.log(wordsFilteredlong)

//.forEach(배열요소 각각에 대해 실행할 콜백함수) 
//>>각각에대하여 인자로 주어진 콜백함수 실행. 반환값은 undefined

const currentTime = [3, 8, 23] // 시, 분, 초
const timeStr = []

//데이터 재가공 => map,forEach
function addZero(time){
    timeStr.push(`${time < 10 ? '0' + time : time}`)//요소가 10보다 작은지 판별하고 0을 붙일지 말지.
}

currentTime.forEach(addZero)

console.log('********* CURRENT TIME *********')
console.log(timeStr.join(':'))//배열 사이 구분 문자열
console.log('***********************************')

const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']

console.log('********* USER EMAIL LIST *********')
function addDotCom(userID){
    console.log(userID + '@gmail.com')
}

userIDs.forEach(addDotCom)
console.log('***********************************')

//[새로운 배열]=[배열].map(콜백함수) //실행하고 새로운 배열로 반환.
const numbers = [1, 2, 3, 4, 5]

function multiplyByThree(n){
    return n * 3
}

const numbersRefined = numbers.map(multiplyByThree)//새로운 배열을 받을 변수를 정해줘야함.
console.log(numbersRefined)

const userEmails = [
    'victoria@gmail.com',
    'sun@gmail.com',
    'johseb@gmail.com',
    'syleemomo@gmail.com',
    'hannah@gmail.com',
    'shara@gmail.com',
    'martin@gmail.com',
    'gorgia@gmail.com',
    'nana@gmail.com',
    'dannel@gmail.com'
]

function removeDotCom(userEmail){
    return userEmail.split('@')[0]
}

function displayUserID(userID){
    console.log(userID)
}

const userIDs2 = userEmails.map(removeDotCom)

console.log(userIDs2)
console.log('********* USER ID LIST *********')
userIDs.forEach(displayUserID)
console.log('********************************')