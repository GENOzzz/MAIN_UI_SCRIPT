const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')
const newInput=document.getElementById('newInput')
let num=0;

function isValid(type){
    return type.split('/')[0] === 'image'
}

function displayImg(e){
    // if(imgBox.hasChildNodes()){//기존에 이미지나 text가 있다면(imgBox가 자식요소를 갖고 있다면.)
    //     while(imgBox.hasChildNodes()){
    //         imgBox.removeChild(imgBox.firstChild)//해당하는 첫 요소를 지우고
    //     }
    // }
    const files = e.target.files
    console.log(e.target.files)
    for(let file of files){//요줄이 키포인트. for(let i of iii)
        if(!isValid(file.type)){
            imgBox.innerHTML =`<p>'File type is not valid !'</p>`
            return;
        }
        else{
            const reader = new FileReader()
            const src=URL.createObjectURL(file)
            imgUp(src)
            reader.onload=rememberImg
            reader.readAsDataURL(file)
        }
    }
}

function rememberImg(e){
    console.log(JSON.stringify(e.target.result))
    localStorage.setItem(`${num}`, JSON.stringify(e.target.result))
    num++;
}

function imgUp(src){
    const img=document.createElement('img')
    img.src=src
    imgBox.appendChild(img)
}

function renderImg(){
    console.log(num)
    console.log(localStorage.length)
    max=getNode()
    while(num<localStorage.length+max){
        console.log("가져오는"+num)
        const fileStored=JSON.parse(localStorage.getItem(`${num}`))
        if(fileStored){
            imgUp(fileStored)
        }
        num++;
    }
}

function getNode(){
    if(localStorage.length>0){//로컬스토리지에 파일이 하나라도 있다면.
        while(!localStorage.getItem(`${num}`)){//해당 로컬스토리지의 key값 num을 찾을때 까지
            num++;//num++하면서 접근.
        }
        console.log("찾아낸"+num)
        if(num==0)return 0;
        else{
            return num;
        }
    }
}

function newClick(){
    fileInput.click()
}

function clearStorage(e){
    if(e.keyCode===32){
        localStorage.clear()
    }
}

fileInput.addEventListener('change', displayImg)
newInput.addEventListener('click',newClick)
window.addEventListener('keydown',clearStorage)
window.addEventListener('load',renderImg)