const colorBox = document.querySelector('.color-box')
const colorList = document.querySelector('.color-list')//동적으로 색상 목록을 표시하고. 클릭 이벤트 연결
const colorInput = document.getElementById('color-input')

const colors = ['silver', 'olive', 'brown', 'green', 'purple', 'palevioletred','red']

function addColors(colors){
    for(let color of colors){
        const item = `<div class='color-item'>${color}</div>`
        colorList.innerHTML += item
    }
}

function typeColor(e){
    console.log(e.target.value)

    if(e.target.value !== ''){
        console.log('you typed something')
        colorList.classList.add('show')
    }else{
        console.log('you didn\'t type anything')
        colorList.classList.remove('show')
    }
}

function setColor(e){
    console.log(e.target)

    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
        console.log('you picked color !', pickedColor)
        colorInput.value = pickedColor
        colorList.classList.remove('show')
        colorBox.style.background = pickedColor
    }
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click', setColor)