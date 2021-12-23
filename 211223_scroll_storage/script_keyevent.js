const bar=document.getElementById('bar')
const box = document.getElementById('box')
const gravity = 1
const FPS = 10
const limitBottom = 500
const limitLeft = 700
const limitTop = 200

let vx = 100
let vy = 0
let isJumping = true
let isDead = false

// 처음에 isJumping 을 true 로 설정해서 점핑 가능하게 함
// 점핑 가능하면 계속 점프하다가 vy 가 0 보다 작아지면 isJumping 이 false 가 되면서 더이상 점핑이 불가능함
// 중력은 계속 작용하니까 중력에 의해서 아래로 내려오다가 limit 에 닿으면 isJumping 이 다시 true 가 되면서 점핑이 가능하게 됨

// 슈퍼 마리오가 limitLeft 값을 넘어가면, 즉, 땅을 벗어나면 죽었으므로 isDead 가 true 가 되고 isDead 가 true 이면 계속 아래로 떨어짐

function down(){
    const topStyle = window.getComputedStyle(box).top//getComputedStyle(css) : css속성상 위치를 읽어올때 
    const leftStyle=window.getComputedStyle(box).left
    let top = parseInt(topStyle)


    // 중력이 계속 작용하고 있는중
    vy += gravity
    top += vy //설정한 중력(garavity)에 의해 캐릭터가 내려오는 것 처럼 보임.
   

    // 슈퍼마리오가 땅에 있는 동안에는 죽지 않았으므로 더이상 아래로 떨어지지 않음
    if(!isDead && top >= limitBottom){
        top = limitBottom
        isJumping = true
    }

    if(top>1199){
        isDead=false
        top=0;
        left=0;
        bar.style.backgroundImage=`url('')`
        bar.style.backgroundColor='red'
        const gameOver=document.createElement('div')
        gameOver.id='gameOver'
        gameOver.innerText="    GAME OVER"
        bar.appendChild(gameOver)
    }
    if(top>1200){
        alert('gameOver')
    }

    box.style.top = `${top.toString()}px`
}
const timerId = setInterval(down ,1000/FPS)

function move(e){
   console.log(e.keyCode)
    const leftStyle = window.getComputedStyle(box).left
    const topStyle = window.getComputedStyle(box).top
    let left = parseInt(leftStyle)
    let top = parseInt(topStyle)

    // 여러 키의 동작이 동시에 적용되려면 if 문을 사용하면 됨 (예: spacebar + arrow key)
    if(e.keyCode === 39){
        box.style.backgroundImage = "url('img/gorani.jfif')";
        left += vx
        if(left > limitLeft){
            isDead = true
        }
    }
    else if(e.keyCode === 37){
        box.style.backgroundImage = "url('img/grass.jfif')";
        if(left > 0){
            left -= vx
        }
    }
    else if(e.keyCode === 32 || e.keyCode === 38){//점프키랑 isDaed를 false를 연결 시켰어야함.
        if(isJumping && top >= limitTop){  // 점프 높이에 제한을 둠
            vy -= gravity
            top -= vy*2
        }
        if(vy <= 0){ 
            isJumping = false
        }
        if(left<limitLeft&&top<=limitBottom){
            console.log(isDead)
            isDead=false
        }
    }

    box.style.left = `${left.toString()}px` 
    box.style.top = `${top.toString()}px` 
}

window.addEventListener('keydown', move)