const graph = document.getElementById('graph')

let points = [] // 포인트 배열
let coPoints=[]
let tanPoints=[]
let x = 0 // degree
let offset = 0 // 추출 시작점

function degreeToRad(x){
    return x * (Math.PI / 180) //degree => radian 
}
function calSinVal(x){
    return Math.sin(x) //radian => sin
}
function calCosVal(x){
    return Math.cos(x)
}
function calTanVal(x){
    return Math.tan(x)
}
function clearWindow(el){
    el.innerHTML = ''//초기화
}

function getPoint(x){
    return [x, calSinVal(degreeToRad(x))] // x값을 인자로 받으면 y값 자리에 degree => sin 
}
function getCoPoint(x){
    return [x,calCosVal(degreeToRad(x))]
}
function getTanPoint(x){
    return[x,calTanVal(degreeToRad(x))]
}
function isArrayFull(len){
    return len > 360 // 배열길이가 360보다 큰지 확인
}

function displayPoint(point){
    const [x, y] = point
    const xScale = 2, yScale = 100, yShift = 100 //y좌표 이동

    const pointEl = document.createElement('div')
    pointEl.className = 'dot'
    pointEl.style.left = `${(x - offset) * xScale}px` // x-scale: 2배 (offset 만큼 좌표이동)
    pointEl.style.top = `${(y* yScale) * -1 + yShift}px` // y-scale : 100배 (반전 + 좌표이동)
    graph.appendChild(pointEl)
}

function displaycoPoint(point){
    const [x, y] = point
    const xScale = 2, yScale = 100, yShift = 100 //y좌표 이동

    const pointEl = document.createElement('div')
    pointEl.className = 'codot'
    pointEl.style.left = `${(x - offset) * xScale}px` // x-scale: 2배 (offset 만큼 좌표이동)
    pointEl.style.top = `${(y* yScale) * -1 + yShift}px` // y-scale : 100배 (반전 + 좌표이동)
    graph.appendChild(pointEl)
}

function displaytanPoint(point){
    const [x, y] = point
    const xScale = 2, yScale = 100, yShift = 100 //y좌표 이동

    const pointEl = document.createElement('div')
    pointEl.className = 'tandot'
    pointEl.style.left = `${(x - offset) * xScale}px` // x-scale: 2배 (offset 만큼 좌표이동)
    pointEl.style.top = `${(y* yScale) * -1 + yShift}px` // y-scale : 100배 (반전 + 좌표이동)
    graph.appendChild(pointEl)
}

function redraw(){
    clearWindow(graph)//13
    
    points.push(getPoint(x)) //16. points 배열에 포인트 추가
    coPoints.push(getCoPoint(x))
    tanPoints.push(getTanPoint(x))
    x++ // x 좌표 변경

    if(isArrayFull(points.length)){//23. points길이 측정
        points.shift() // 첫번째 요소를 제거함으로써 360개 유지
        coPoints.shift()
        tanPoints.shift()
        offset++ //  offset 증가
    }
    points.forEach(displayPoint) // 화면에 그래프 그리기
    coPoints.forEach(displaycoPoint)
    tanPoints.forEach(displaytanPoint)
    
  
}

setInterval(redraw, 1)