//이벤트 : 특정 사건이나 행동을 의미 브라우저에서의 이벤트는 사용자가 버튼을 클릭하거나 입력창에 뭔가를 입력하는 등의 사건
//이벤트핸들러 함수 : 사용자가 버튼을 클릭한다던지 입력창에 뭔가를 입력했을때 이를 처리하는 로직을 이벤트 핸들러 함수라고 한다.
//이벤트핸들러와 이벤트루프(비동기 처리)이벤트핸들러 함수는 자바스크립트 엔진에 의하여 이벤트루프에 등록되었다가 프로그램 메인에 
//있는 전체코드가 모두 실행된 이후에 사용자가 특정 이벤트를 발생시키면 실행이 된다. 이를 프로그래밍 용어로 비동기 처리라고 한다. 
//비동기 처리는 함수를 등록만 해놓고 나중에 실행하는 것을 의미한다. //자바는 동기처리.

// popup()함수 정의
//인라인방식
function popup(){
    alert('팝업창')
}

//프로퍼티 방식
const popup2 = document.getElementById('popup2')
//익명함수.(함수에 이름이없음)
popup2.onclick = function (){
    alert('팝업창2')
}

//addEventListener메서드 방식
const popupBtn=document.getElementById('popup3')
popupBtn.addEventListener('click',function(){
    alert('팝업창3')
})

function popup4(){
    alert('팝업창4')
    //이벤트 핸들러 함수 해제. (alert창을 한번 띄우고 함수를 해제하여 이후에는 click하여도 실행 x)
    popupBtn2.removeEventListener('click', popup4)
}

const popupBtn2=document.getElementById('popup4')
popupBtn2.addEventListener('click',popup4)
//메서드의 장점 : 하나의 요소에 여러가지 함수를 등록할 수 있다.
function setBtnColor(){
    popupBtn2.style.background="tomato"
    popupBtn.style.background="blue"
}
function unsetBtnColor(){
    popupBtn2.style.background=""
    popupBtn.style.background=""    
}
popupBtn2.addEventListener('mouseover',setBtnColor)
popupBtn2.addEventListener('mouseout',unsetBtnColor)

//이벤트 객체 (이벤트핸들러 함수의 매개변수)
function evt1(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.style.background)

    const target = e.target.style
    target.all = 'unset'
    target.position = 'absolute'
    target.left = '500px'
    target.width = '200px'
    target.height = '70px'
    target.textAlign = 'center'
    target.background = 'red'
    target.borderRadius = '50%'
    target.transition = 'all ease 3s'
}

const evt1Btn1 = document.getElementById('event1')
evt1Btn1.addEventListener('click', evt1)

function evt2(e){
    const target = e.target
    target.classList.add('circle')
}

const evtBtn2 = document.querySelector('.event2')
evtBtn2.addEventListener('click', evt2)
evtBtn2.addEventListener('mouseover',lighton)
evtBtn2.addEventListener('mouseleave',lightoff)

const circle = document.getElementById('circle')
function moveCircle(e){
    console.log(e.clientX, e.clientY)
    const mouseX = e.clientX
    const mouseY = e.clientY
    circle.style.left = mouseX + 'px'
    circle.style.top = mouseY + 'px'
    circle.style.transition='all ease 1.5s'
}

window.addEventListener('click', moveCircle)
//window.addEventListener('mousemove',moveCircle)
circle.addEventListener('mouseover',lighton)
circle.addEventListener('mouseleave',lightoff)



const ledContainer = document.getElementById('led-container')

function lighton(e){
    console.log(e.target)
    console.log(e.target.className)
    if(e.target.className==='circle'){
        e.target.classList.add('con')
    }else if(e.target.className==='event2 circle'){
        e.target.classList.add('eon')
    }
    else{
        e.target.classList.add('on')
    }
    
}
function lightoff(e){//리무브는 if 조건 없이 지우기만 해도 먹긴함.
    if(e.target.className==='circle con'){
        e.target.classList.remove('con')
    }else if(e.target.className=='event2 circle eon'){
        e.target.classList.remove('eon')
    }else{
        e.target.classList.remove('on')
    }
}
let index=0
function lightautooff(){
    const led=document.querySelectorAll('.led')[index]
    led.classList.remove('on')
}
function lightautoon(){
    const led=document.querySelectorAll('.led')[index]
    led.classList.add('on')
    index++;
    if(index>2){index=0}
    setTimeout(lightautooff,1000)
}
function startEffect(){
    console.log('load')
    setInterval(lightautoon,1000)
}
window.addEventListener('load',startEffect)

ledContainer.addEventListener('mouseover', lighton)//마우스가 올라갔을때 lightron호출.
ledContainer.addEventListener('mouseleave', lightoff)//마우스가 내려갔을때 lightoff호출

// for(let led of leds){
//     led.addEventListener('mouseleave', lightoff)
// }
