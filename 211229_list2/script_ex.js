//1번
const lyrics = `
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
바라보는 눈빛 속에
눈빛 속에 나는 마치
나는 마치 뭐에 홀린 놈
이젠 벗어나지도 못해
걸어오는 너의 모습
너의 모습 너는 마치
내 심장을 밟고 왔나봐
이젠 벗어나지도 못해
어딜 가나 당당하게
웃는 너는 매력적
착한 여자 일색이란
생각들은 보편적
도도하게 거침 없게
정말 너는 환상적
돌이킬 수 없을만큼
네게 빠져 버렸어
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
딴딴 딴따다 따 따란딴
딴딴 딴따다 따
네게 반해버렸어 baby
딴딴 딴따다 따 따란딴
딴딴 딴따다 따 따라빠빠라
Hey girl gir gir gir gir girl i
눈만뜨면 니 생각 Hey girl
자나깨나 사실 너 하나 밖에 안보여
말해봐 니 맘에 내가
말해봐 자리 잡았는지
말해줘 내게 말해줘
나는 바보 바보 바보
주변 사람들은 말해
내가 너무 적극적
이 세상에 그런 사람
어디 한둘이냐고
그걸 몰라 그녈 몰라
시기하며 하는 말
내가 부럽다면 그건
그대들이 지는 거
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
딴딴 딴따다 따 따란딴
딴딴 딴따다 따
네게 반해버렸어 baby
딴딴 딴따다 따 따라라라
딴딴 딴따다 따 따라빠빠라
Lets dance dance dance dance
Lets dance dance dance dance
Lets dance dance dance dance dance dance
Hey 이제 그만 내게 와줄래
정말 미칠 것만 같아 yeah
난 너만 사랑하고 싶어
절대 다시 한눈 팔 생각 없어 hey hey hey.
애인이라기보다 친구같은
내가 되고 싶어
너의 모든 고민 슬픔
함께 간직하고파
다시 없을 만큼 만큼
너를 너무 사랑해
내가 바란 사람 니가 바로 그
That that that girl
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
`
const keyword1 = 'Sorry'
const keyword2 = '부셔'

function searchWord(keyword, n){
	let count=0
    let foundIndex=lyrics.indexOf(keyword)
    while(foundIndex!=-1){
        count++
        foundIndex=lyrics.indexOf(keyword,(foundIndex+n))//찾은 인덱스 위치 + 문자열 길이.
        //console.log(foundIndex)
    }
    return count
}

console.log(searchWord(keyword1, keyword1.length))
console.log(searchWord(keyword2, keyword2.length))

//2
const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]
function findMovies(element){
    const year=element.release.split('-')[0]
    //console.log(year)
    if(year>2005&&year<2010){
        return element
    }
}
console.log(movies.find(findMovies))

//3
function findMan(element){
    //const titles=element.title.split(' ')<<어차피 문자열도 배열임.
    if(element.title.includes('man')) {return element}
}

console.log(movies.find(findMan))

//4
function startJ(element){
    const year=element.release.split('-')[0]
    if(year<2010){
        if(element.title.startsWith('J')){
            return element
        }
    }
}
console.log(movies.find(startJ))

//5
const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level'
]

function ifAprint(element){
    if(element.includes('a')){
        console.log(element)
    }
}
words.forEach(ifAprint)

//6
const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)
    products.forEach(priceMascara)
})

function priceMascara(element){
    if(element.price<10){
        if(element.product_type==='mascara')
        console.log(element)
    }
}
//7
function ratingLipstick(element){
    if(element.product_type==='lipstick'){
        if(element.rating>4&&element.rating<5){
            console.log(element)
        }
    }
}
fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)
    products.forEach(ratingLipstick)
})
//8
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
const soeoulFriends=[]
function inSeoulage(element){
    if(element.city==='seoul'){
        if(element.age<30){
            soeoulFriends.push(element)
        }
    }
}
friends.forEach(inSeoulage)
console.log(soeoulFriends)
//setTimeout(()=>console.log(soeoulFriends),5000)

//9
function seoulCity(element){
    return element.city==='seoul'
}
function daeguCity(element){
    return element.city==='daegu'
}
function busanCity(element){
    return element.city==='busan'
}
const seoulCitizen=friends.filter(seoulCity)
const deaguCitizen=friends.filter(daeguCity)
const busanCitizen=friends.filter(busanCity)
console.log("seoul : "+seoulCitizen.length)
console.log("daegu : "+deaguCitizen.length)
console.log("busan : "+busanCitizen.length)

//10
function age40(element){
    return element.age>40
}
console.log(friends.some(age40))

//11
const users = [
    {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
    {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
    {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
    {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
    {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
    {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
    {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
    {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
    {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
    {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
]

function errorUser(element){
    if(element.age<0){return element}
    else if(element.age%1!=0){return element}
    else if(!element.email.includes('@')){return element}
    else if(!element.email.includes('.com')){return element}
}

const ErrorUsers=users.filter(errorUser)
console.log(ErrorUsers)

function cleanUser(element){
    if(element.age>0){
        if(element.age%1===0){
            if(element.email.includes('@')){
                if(element.email.includes('.com')){
                    return element
                }
            }
        }
    }
}

const CleanUsers=users.filter(cleanUser)
console.log(CleanUsers)
