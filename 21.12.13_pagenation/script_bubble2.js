const fruits = document.querySelectorAll('.fruit');
const fruitContainer = document.getElementById('fruits')
let prevTarget = null

function moveToRight(e){

    // 바로 전에 클릭한 타겟의 위치 초기화
    if(prevTarget !== null){
        prevTarget.style.marginLeft = '0px'
    }
    
    // 현재 클릭한 타겟의 위치 변경
    const target = e.target
    if(target.className==='fruit'){
        target.style.marginLeft = '100px'
        // 현재 타겟 저장
        prevTarget = target
    }
    else{
        target.style.background=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
    }
}

fruitContainer.addEventListener('click',moveToRight)