//배열 리터럴 사용
const _2dArray = [[1, 2], [3, 4], [5, 6], [7,8], [9, 10]]

const _2dArray1 = []
const rows = 5
const columns = 2

for (let i = 0; i < rows; i++) {
    const element = []
    for (let j = columns * i; j < columns * i + columns; j++) {
        element.push(j + 1)
    }  
    _2dArray1.push(element)
}
console.log(_2dArray1) // const _2dArray = [[1, 2], [3, 4], [5, 6], [7,8], [9, 10]]


//생성자함수 사용
const _2dArray2 = new Array(5)

for(let i=0; i<_2dArray2.length; i++){
    const element = new Array(2)
    for(let j=2*i; j<2*i+element.length; j++){
        element[j-2*i] = j+1
    }
    _2dArray2[i] = element
}

console.log(_2dArray2)

const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

for(let fruit of fruits){
    for(let i in fruit){
        switch(i){
            case '0':
                console.log('name', fruit[i])
                break;
            case '1': 
                console.log('price', fruit[i])
                break;
        }
    }
}
//2차원배열에 요소를 넣는 방법
for(let fruit of fruits){
    fruit.push(Math.floor(Math.random()*100 + 1))
}
console.log(fruits)

//배열삭제
delete fruits[1]
console.log(fruits)//[Array(2),empty,Array(2)]

fruits.splice(1, 1)
console.log(fruits)//[Array(2),Array(2)]

//2차원 배열을 출력하는 방법
console.log(fruits.toString())//apple,570,69,strawberry,30,30
const fruits2=[{name : 'apple',price : 570}, {name : 'orange',price : 270, }, {name : 'strawberry',price : 30 }]
console.table(fruits2)//table 형태로 정리해서 출력해줌 배열은 각 인덱스로 *객체도 정리해줌

//객체배열을 2차원배열로 변환
const persons = [
    {name: 'sunrise', age: 23},
    {name: 'victoria', age: 19},
    {name: 'daniel', age: 28},
    {name: 'ammy', age: 21},
    {name: 'smith', age: 32},
]

for(let i in persons){
    persons[i] = [persons[i]['name'], persons[i]['age']]
}

console.log(persons)

//2차원배열을객체배열로 변환
for(let i in persons){
    persons[i] = {name: persons[i][0], age: persons[i][1]}
}

console.log(persons)

//2차원배열을 1차원배열로 변환 concat
let _1dArray = []

const persons2 = [
    [
        "sunrise",
        23
    ],
    [
        "victoria",
        19
    ],
    [
        "daniel",
        28
    ],
    [
        "ammy",
        21
    ],
    [
        "smith",
        32
    ]
]

for(let person of persons2){
    _1dArray = _1dArray.concat(person)//concat은 기존의 배열을 변경하지 않음.
}

console.log(_1dArray)

//1차원배열을 2차원배열로 변환
console.log('=================================')
const persons3 = [
    "sunrise",
    23,
    "victoria",
    19,
    "daniel",
    28,
    "ammy",
    21,
    "smith",
    32
]


const columns2 = 2
const rows2 = persons3.length / columns2
const _2dArray3 = new Array(rows2).fill(0)

for(let i=0; i<rows2; i++){
    const person = new Array(columns2).fill(0)
    for(let j=0; j<columns2; j++){
        person[j] = persons3[columns2*i+j] //열의 갯수 x 행의 인덱스 + 열의 인덱스
        console.log(columns2*i+j)
    }
    _2dArray3[i] = person
}

console.table(_2dArray3)

const graph = document.getElementById('graph')

const points = []
const points2=[]
const dx = 1 // degree
let x = 0 // degree
let y = 0
let radx = 0 // radian

// 다음 (X,Y) 포인트 값 계산
function getNextPoint(){
    radx = x * (Math.PI / 180) //degree to radian
    y = Math.sin(radx)//
    points.push([x, y])
    x += dx
    // console.log(points)
}

// (X,Y) 포인트 값으로부터 DOM 객체 생성 및 화면에 표시
function displayPoint(point){
    const pointEl = document.createElement('div')
    pointEl.className = 'dot'
    pointEl.style.left = `${point[0] * 2}px` // x-scale: 2배
    pointEl.style.top = `${point[1]* 100 * -1 + 100}px` // y-scale : 100배 (반전 + 좌표이동)
    graph.appendChild(pointEl)
}


// (X,Y) 포인트 값을 요소로 가지는 2차원 배열 생성
for(let i=0; i<360; i++){
    getNextPoint()
}

console.table(points)

points.forEach(displayPoint)


const signDiv = document.getElementById('sign')

const sign = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


function displaySign(value){
    const cellEl = document.createElement('div')
    cellEl.className = value === 0 ? 'cell' : 'cell bright'
    signDiv.appendChild(cellEl)
}

const rows3 = sign.length
const columns4 = sign[0].length

for(let i=0; i<rows3; i++){
    for(let j=0; j<columns4; j++){
        displaySign(sign[i][j])
    }
}