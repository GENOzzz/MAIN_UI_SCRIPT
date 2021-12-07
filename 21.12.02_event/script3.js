const instantMsg=document.querySelector('.instant-msg');

function showMsg(){
    instantMsg.classList.add('show')
    setTimeout(hideMSg,3000);//서로 연동시키기 위해 각함수가 호출됐을때 시간별로 상대함수를 호출.
}

function hideMSg(){
    instantMsg.classList.remove('show')
    setTimeout(showMsg,3000);
}

///setTimeout메서드 : 함수호출,시간(밀리초)
setTimeout(showMsg,1000);
setTimeout(hideMSg,3000);

const clock=document.getElementById('clock');

function changeFormat(t){
    //10보다 작으면 t앞에 0을 붙여줌.
    return t<10? `0${t}`:t
}
//현재시각을 가져옴.
function getTime(){
    const time = new Date()//자바스크립트 내장함수 : 현재시각을 불러옴.
    const hours = time.getHours() //중의 시간을 가져옴
    const minutes = time.getMinutes()//분을 가져옴
    const seconds = time.getSeconds()//초를가져옴

    clock.innerHTML = 
    `${changeFormat(hours)}:${changeFormat(minutes)}:${changeFormat(seconds)}`
}

setInterval(getTime,1000)//1초마다 getTime을 호출