//1
const myArray=[]

for(let i=0;i<5;i++){
    const smallArray=[]
    let x=i*2+1
    let y=i*2+2
    smallArray.push(x)
    smallArray.push(y)
    myArray.push(smallArray)
}

console.log(myArray)

//2
function build2DArray(rows, columns){
    const rowsArray=new Array(rows)
    for(let i =0;i<rows;i++){
        const columnsArray=new Array(columns).fill(0)
        rowsArray[i]=columnsArray
    }
    return rowsArray
}

console.log(build2DArray(7, 3))

//3
const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

for(let i in fruits){
    fruits[i] = {name: fruits[i][0], price: fruits[i][1]}
}
console.log(fruits)

//4
const fruits2 = [['apple', 570, 32], ['orange', 270, 65], ['strawberry', 30, 120]]
for(let i in fruits){
    fruits2[i] = {name: fruits2[i][0], totalPrice: fruits2[i][1]*fruits2[i][2]}
}
console.log(fruits2)

//5
//setInterval 메서드를 사용하여 포인트를 계속 추가하고, 포인트 갯수가 360개를 넘어가면 360개만 추출하여 화면에 보여준다. 
//추출시작점(offset)과 추출범위(range)에 대한 변수를 추가하고, 아래와 같이 실시간 사인 그래프를 구현해보자!
const graph = document.getElementById('graph')


// 1. sin값 계산 포인트 값을 추가하기
// 2. points 배열에 360개가 넘어가는지 안 넘어가는지에 따라서 그려주는걸 다르게 하기
// if(points배열 <360) points배열을 가지고 그려주기
// else points배열에서 offset과 range값을 가지고 360개 추출한 다음에 그려주기
// 3.offset값을 증가 시키기
// 4.다시 1번으로 돌아가기
const points1 = []
const dx = 1 // degree
let x = 0 // degree
let y = 0
let radx = 0 // radian
let offset=0//추출시작점
let range=0//추출범위

function startGraph(offset,range){
    for(let i=0;i<range;i++){
        getNextPoint(offset)
    }
}

function getNextPoint(offset){
    x=offset
    radx=x*(Math.PI/180)
    y=Math.sin(rads)
    points1.push(x,y)
    offset+=dx
    console.table(points1)
}

// 다음 (X,Y) 포인트 값 계산
function getNextPoint(){
    radx = x * (Math.PI / 180) //degree to radian
    y = Math.sin(radx)//
    points1.push([x, y])
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

for(let i=0; i<720; i++){
    getNextPoint()
}

//(X,Y) 포인트 값을 요소로 가지는 2차원 배열 생성c


//console.table(points1)
points1.forEach(displayPoint)

//6
const signDiv = document.getElementById('sign')

const sign1 = [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const sign2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
]
const sign3 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const sign4 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const sign5 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
]

const signs = [sign1, sign2, sign3, sign4, sign5]
let index = 0

function displaySign(value){
    const cellEl = document.createElement('div')
    cellEl.className = value === 0 ? 'cell' : 'cell bright'
    return cellEl
}

function beforeDisplay(e){
    const rows = e.length
    const columns = e[0].length
    const cellEAll=document.createElement('div')
    cellEAll.id='sign'
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            cellEAll.appendChild(displaySign(e[i][j]))
        }
    }
    signDiv.appendChild(cellEAll)
}

function ready(e){
    if(signDiv.hasChildNodes()){
        signDiv.firstElementChild.remove()
    }
    beforeDisplay(e)
}

function startGame(){
    ready(signs[index])
    index++
    if(index==5){
        index=0
    }
}

setInterval(startGame,1000)
