const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
console.log(colorInput)


function pickRandom(){
    return Math.floor(Math.random()*256);//랜덤으로 0~255 리턴.
}

function setColor(e){//입력이 발생했을때 배경을 랜덤으로
    if(e.target.value==""){//입력된 내용이 없다면
        colorBox.style.backgroundColor="black"//베경을 black으로
    }
    else{
        console.log(e.target.value)
        // let r=(Math.random()*255)
        //let g=(Math.random()*255)
        //let b=(Math.random()*255)
        colorBox.style.backgroundColor = `rgb(${pickRandom()},${pickRandom()},${pickRandom()})`
    }
}

colorInput.addEventListener('input', setColor)