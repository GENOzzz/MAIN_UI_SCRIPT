const colorBox = document.querySelector('.color-box')
const colorList = document.querySelector('.color-list')
const colorInput = document.getElementById('color-input')

const colors = ['silver', 'olive', 'brown', 'green', 'purple', 'palevioletred']
let index = -1
let prevIndex = -1

function addColors(colors){
    for(let color of colors){
        const item = `<div class='color-item'>${color}</div>`
        colorList.innerHTML += item
    }
}

function typeColor(e){
    console.log(e.target)
    console.log(e.target.value)

    if(e.target.value !== ''){
        console.log('you typed something')
        colorList.classList.add('show')
        colorInput.addEventListener('keyup', selectColor)
    }else{
        console.log('you didn\'t type anything')
        colorList.classList.remove('show')
        colorInput.removeEventListener('keyup', selectColor)
    }
}


function setBackground(color){
    console.log('you picked color !', color)
    colorInput.value = color
    colorList.classList.remove('show')
    colorBox.style.background = color
    colorInput.removeEventListener('keyup', selectColor) // 이벤트 제거
}

function setColor(e){
    console.log(e.target)   

    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
        setBackground(pickedColor)//배경색 변경
    }
    
}

function changeHighLightItem(key){
    if(colorList.classList==('color-list show')){//colorList가 보여지고 있을때만 작동하도록.
        prevIndex = index
        if(key === 40){//아래쪽 방향키
            index++
            if(index > colors.length - 1){
                index = 0
            }
        }else if(key === 38){//위쪽 방향키
            index--
            if(index < 0){
                index = colors.length - 1
            }
        }else if(key === 13){//엔터키
            const colorItem = document.querySelectorAll('.color-item')[index]
            const pickedColor = colorItem.innerText
            setBackground(pickedColor)
        }

    }
}

function unsetHighLightColorItem(){
    if(prevIndex >= 0){
        const colorItem = document.querySelectorAll('.color-item')[prevIndex]
        colorItem.classList.remove('highlight')
    }
}
function highlightColorItem(){
    if(index >= 0){
        const colorItem = document.querySelectorAll('.color-item')[index]
        colorItem.classList.add('highlight')
    }
}

function selectColor(e){
    if(e.keyCode){
        console.log(e.keyCode)
        changeHighLightItem(e.keyCode)
        unsetHighLightColorItem()
        highlightColorItem()
    }
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorInput.addEventListener('keyup', selectColor)
colorList.addEventListener('click', setColor)