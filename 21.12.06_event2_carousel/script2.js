const box=document.getElementById('box');
const moves=[
    {pos:'left',length:50},
    {pos:'top',length:50},
    {pos:'left',length:0},
    {pos:'top',length:0}
]//움직임을 미리 정의해둠.

let select=0;

function movebox(){
    const pos = moves[select].pos;
    const length=moves[select].length;
    box.style[pos]=length+'px';//box가 움직임.
    select = select===moves.length-1? 0:select+1;
    // select++;
    // if(select>moves.length-1){
    //     select=0;
    // }
}
function startMove(){
    setInterval(movebox,1000)
}

window.addEventListener('load',startMove)

const box2=document.querySelectorAll('.box2');
const moves2=[
    {pos:'margin-bottom',length:50},
    {pos:'margin-bottom',length:0},
]//움직임을 미리 정의해둠.
console.dir(box2)
let prevcnt=0;
let cnt=0;


function movebox2(){//디브를 올리고 내리는 함수
    const pos=moves2[0].pos;
    const length=moves2[0].length;
    console.log("cnt"+cnt)
    //console.log(box2[cnt])
    movedown2()
    //box2[prevcnt].style[pos2]=length2+'px'//제자리
    box2[cnt].style[pos]=length+'px'//올리고
    prevcnt=cnt
    cnt = cnt === box2.length-1? 0:cnt+1;
}
function movedown2(){//div를 내리는 함수
    //console.log("down")
    const pos=moves2[1].pos;
    const length=moves2[1].length;
    box2[prevcnt].style[pos]=length+'px'    
}
function startMove2(){
    setInterval(movebox2,500)
}

window.addEventListener('load',startMove2)