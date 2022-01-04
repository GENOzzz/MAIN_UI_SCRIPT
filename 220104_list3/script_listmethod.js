const seasons = ['spring', 'summer', 'autumn']
console.log(seasons) //  변경된 원본배열 출력

const arrLength = seasons.push('winter')
console.log(arrLength) // 변경된 배열 길이 출력

const multiplyBySix = []

for(let i=1; i<100; i++){
    multiplyBySix.push( 6 * i )
}

console.log(multiplyBySix) //  6의 배수로 이루어진 배열

const movies = ['Haprry potter', 'Doctor stranger', 'Iron man', 'Spider man', 'Widow']
const moviesInfo = []

function addMovieInfo(movie, index){//function(value,index,array) 순서
    moviesInfo.push( {title: movie, id: index} )
}
movies.forEach(addMovieInfo)

console.log(moviesInfo) //  무비 ID 가 추가된 영화 목록 생성

const moviesInfoplus=[]
let id=1;

movies.forEach(value=>{
    moviesInfoplus.push({id : id, title:value})
    id++;
})

console.log(moviesInfoplus)

moviesInfoplus.forEach(char=>{
    char.date='2022/01/04'
})
console.log(moviesInfoplus)

const cities = ['seoul', 'busan', 'daegu']

cities.push('deajeon', 'ulsan')//push는 다수의 값을 추가할수 있다.

console.log(cities)

const cities2 = ['seoul', 'busan', 'daegu']
const citiesToAdd = ['deajeon', 'ulsan']

cities2.push(...citiesToAdd)
console.log(cities2)

cities2.push(citiesToAdd)//스프레드 연산자 없이 넣으면 배열 그대로 3번째 index에 들어감.
console.log(cities2)

const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']

console.log(companies.pop())//pop은 가장 뒤에 요소를 제거,반환/빈배열일경우 undifine 반환
console.log(companies)

const fruits = ['apple', 'orange', 'watermelon']

const removedFruits = fruits.splice(1, 0, 'banana')//[배열].splice(변경 시작 인덱스, 삭제할 요소의 수, 추가할 요소 1, 추가할 요소2, ...)

console.log(fruits)//1번째에 banan추가 ['apple', 'banana', 'orange', 'watermelon']
console.log(removedFruits)//제거된 요소가 없으므로 []빈배열 반환.

const removedFruits2 = fruits.splice(2, 1)


console.log(removedFruits2)//제거된 orange 반환.
console.log(fruits)// 2번째인 orange가 제거된 배열['apple', 'banana', 'watermelon']

const removedFruits3 = fruits.splice(0, 2, 'pear', 'lemon')//0번째에서부터 2개 삭제후 pear,lemon추가 추가 요소는 시작 인덱스부터 들어간다.

console.log(fruits)//기존배열 0번째에서 2개 삭제되고 ['pear', 'lemon']추가.
console.log(removedFruits3)//삭제되었던 배열 반환.

const removedFruits4 = fruits.splice(-2, 1)//뒤에서 부터도 삭제가능 가장 뒤 요소 index는 -1

console.log(fruits)
console.log(removedFruits4)

fruits.splice(fruits.length,0,'strawberry','orange','apple')
console.log(fruits)
const removedFruits5 = fruits.splice(2)//2번째부터 뒤에요소 다 삭제

console.log(fruits)
console.log(removedFruits5)

//현재 fruits=['pear', 'watermelon']
const removedFruits6 = fruits.splice(1, 1, 'lemon')//1번째 1개 제거후 그자리에 lemon투입

console.log(fruits)
console.log(removedFruits6)

// sort 메서드는 배열요소를 설정한 규칙에 따라 정렬한다. sort 메서드는 원본배열을 변경한다.
const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

words.sort()//오름차순

console.log(words)

console.log(words.reverse())//내림차순
console.log(words)//reverse또한 원본배열을 변경

const numbers = [100, 3, 394, 27, 4, 82, 6, 5, 94]

numbers.sort()

console.log(numbers)//숫자를 문자열로생각해 앞자리를 비교하기때문에 생각한 방식으로 작동x

//숫자는 비교함수를 사용하여 sort안에 넣어주어야함. [배열].sort(비교함수)
// function 비교함수 이름(배열요소 1, 배열요소 2){
// 	if(배열요소 1 > 배열요소 2) return 1 // 배열요소 1 이 크면 반환값 1을 설정함으로써 순서를 변경함
//     if(배열요소 1 < 배열요소 2) return -1 // 배열요소 1이 작으면 반환값 -1을 설정함으로써 순서를 변경하지 않음
//     return 0
// }
function compareNumbers(a, b){
    if(a > b) return 1 // 앞의 숫자(a)가 뒤의 숫자(b)보다 크면 순서를 변경함 (1을 반환하면 순서를 변경함)
    if(a < b) return -1 // 앞의 숫자(a)가 뒤의 숫자(b)보다 작으면 순서를 변경하지 않음 (-1을 반환하면 순서를 변경하지 않음)
    return 0 // 두 숫자가 동일하면 순서를 변경하지 않음
}
numbers.sort(compareNumbers)

console.log(numbers)

// 숫자 오름차순 정렬하기
function compareNumbers2(a, b){
    return a - b    //양수면 순서변경 음수면 순서변경x
}
numbers.sort(compareNumbers2)

console.log(numbers)

// 숫자 내림차순 정렬하기
function compareNumbers3(a, b){
    return b - a
}
numbers.sort(compareNumbers3)

console.log(numbers)
console.log("화살표")
numbers.sort((a,b)=>a-b)//화살표 함수로도 사용가능

console.log(numbers)