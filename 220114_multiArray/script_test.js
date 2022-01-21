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

// 1. sin값 계산 포인트 값을 추가하기
// 2. points 배열에 360개가 넘어가는지 안 넘어가는지에 따라서 그려주는걸 다르게 하기
// if(points배열 <360) points배열을 가지고 그려주기
// else points배열에서 offset과 range값을 가지고 360개 추출한 다음에 그려주기
// 3.offset값을 증가 시키기
// 4.다시 1번으로 돌아가기
const graph = document.getElementById('graph')

let points = [] // 포인트 배열
let x = 0 // degree
let offset = 0 // 추출 시작점

function degreeToRad(x){
    return x * (Math.PI / 180)
}
function calSinVal(x){
    return Math.sin(x)
}
function clearWindow(el){
    el.innerHTML = ''
}
function getPoint(x){
    return [x, calSinVal(degreeToRad(x))]
}
function isArrayFull(len){
    return len > 360
}

function displayPoint(point){
    const [x, y] = point
    const xScale = 2, yScale = 100, yShift = 100

    const pointEl = document.createElement('div')
    pointEl.className = 'dot'
    pointEl.style.left = `${(x - offset) * xScale}px` // x-scale: 2배 (offset 만큼 좌표이동)
    pointEl.style.top = `${(y* yScale) * -1 + yShift}px` // y-scale : 100배 (반전 + 좌표이동)
    graph.appendChild(pointEl)
}

function redraw(){
    clearWindow(graph)
    
    points.push(getPoint(x)) // 포인트 추가
    x++ // x 좌표 변경

    if(isArrayFull(points.length)){
        points.shift() // 첫번째 요소를 제거함으로써 360개 유지
        offset++ //  offset 증가
    }
    points.forEach(displayPoint) // 화면에 그래프 그리기
  
}

setInterval(redraw, 5)

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
