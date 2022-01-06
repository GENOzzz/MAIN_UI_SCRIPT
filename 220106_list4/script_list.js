//[배열].slice(부분배열을 추출할 인덱스 시작점, 부분배열을 추출할 인덱스 끝점)
//원본배열로부터 부분배열을 추출한 다음 새로운 배열로 반환한다.
const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

const slicedWords = words.slice(3)
console.log(slicedWords)

const slicedWords2 = words.slice(2, 4)
console.log(slicedWords2)

const slicedWords3 = words.slice(-4, -1)
console.log(slicedWords3)

//slice는 얕은복사
const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

const slicedWords4 = movies.slice(1, 3) // 부분배열 추출

movies[1].title = 'syleemomo' // 원본배열에서 배열요소(객체)의 프로퍼티 변경

console.log(movies)
console.log(slicedWords4)//얕은복사라 원본의 변경된 값이 복사본에 반영

//구조분해
const fruits = ['apple', 'banana', 'orange', 'lemon', 'watermelon']
const [firstFruit] = fruits
console.log(firstFruit)

//,가 위치한 요소는 건너 뛴다는 의미
const [,,thirdFruit] = fruits
console.log(thirdFruit)

const [lastFruit] = fruits.reverse()
console.log(lastFruit)

fruits.reverse()
//스프레드 연산자로 나머지 요소들로 이루어진 부분배열 추출가능
const [firstFruit1, ...rest] = fruits
console.log(rest)

//배열합치기
//[새로운 배열] = [배열 1].concat(배열 2)

const cars = ['car', 'mobile', 'sun', 'foot', 'pen']
const numbers = [1, 2, 3]

const unitedArr = cars.concat(numbers)

console.log(unitedArr)

//concat 대신 스프레드 연산자도 동일함.
const unitedArr2 = [...cars, ...numbers]

console.log(unitedArr2)

//[배열].join('구분문자열')
//구분문자열을 기준으로 각 요소들이 연결됨
const fruits2 = ['apple', 'banana', 'orange']

const fruitsStr = fruits2.join(' & ')

console.log(fruitsStr)

const fruitsStr2 = fruits2.join(' @ ')

console.log(fruitsStr2)

//[배열] = 문자열.split('구분문자')
//구분문자를 기준으로 문자열을 나누어 배열의 각 요소로 반환
const str = ''
const strSeprated = str.split()
console.log(strSeprated)

const sentence = 'I joined swimming club in my highschool'
const splitedSentence = sentence.split()//구분문자를 넣지않으면 문자열 통째로 첫번째 요소로 들어감.
console.log(splitedSentence)

const splitedSentence2 = sentence.split('')//''빈문자열을 기준으로 주게 되면 각 char마다 나누어 저장
console.log(splitedSentence2)

const splitedSentence3 = sentence.split(' ')//공백을 기준으로 자름
console.log(splitedSentence3)

const sentence2 = 'I (joined) swimm[ing <club> in my highschool'
const splitedSentence4 = sentence2.split(/[()[<>]/)//정규표현식 /[구분문자들]/
//대괄호 안에 구분문자를 여러개 설정하면 해당 구분문자들 중 어느 하나이면 문자열을 잘라준다.1
console.log(splitedSentence4)

const splitedSentence5 = sentence.split(' ', 3)//2번째 인자 설정 . 반환할 배열의 크기 지정 가능
console.log(splitedSentence5)

const sentence3 = 'I^,^joined^,^swimming^,^club^,^in^,^my^,^highschool'
const splitedSentence6 = sentence.split(['^', '^'])//정규표현식 ^,^전체가 구분문자가 됨.
console.log(splitedSentence6)

const sentence4 = 'I joined swimming club in my highschool. that club was awsome !'
const foundedKeyword = sentence4.split(' ').filter(word => word === 'club')
console.log(foundedKeyword.length)

const sentence5 = '?죠밌재 트립크스바자'
const splitedSentence7 = sentence5.split('').reverse().join('')
console.log(splitedSentence7)

const modifiedSentence = sentence4.
                        split(' ')
                        .map(word => {
                            return word = word === 'club' ? `${word} 🏊` : word
                        })
                        .join(' ')
console.log(modifiedSentence)