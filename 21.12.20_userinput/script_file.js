const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')
const newInput=document.getElementById('newInput')


function isValid(type){
    return type.split('/')[0] === 'image'
}

function displayImg(e){
    if(imgBox.hasChildNodes()){//기존에 이미지나 text가 있다면(imgBox가 자식요소를 갖고 있다면.)
        while(imgBox.hasChildNodes()){
            imgBox.removeChild(imgBox.firstChild)//해당하는 첫 요소를 지우고
        }
    }
    console.log(e.target.files)
    const files = e.target.files
    for(let file of files){//요줄이 키포인트. for(let i of iii)
        if(!isValid(file.type)){
            imgBox.innerHTML =`<p>'File type is not valid !'</p>`
            return;
        }
        else{
            imgUp(file)
        }
    }
}

function imgUp(file){
    img = document.createElement('img')
    img.src = URL.createObjectURL(file)            
    imgBox.appendChild(img)
}

function newClick(){
    fileInput.click()
}

fileInput.addEventListener('change', displayImg)
newInput.addEventListener('click',newClick)