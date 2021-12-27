// //locaStrage
// //브라우저에 사용자의 설정값을 영구적으로 저장
// localStorage.setItem('name', 'syleemomo') // 로컬스토리지 객체에 name 프로퍼티를 syleemomo 로 설정함
// localStorage.getItem('name') // 로컬스토리지 객체의 name 프로퍼티를 조회함
// localStorage.removeItem('name') // 로컬스토리지 객체의 name 프로퍼티를 삭제함
// localStorage.clear() // 로컬스토리지 객체 자체를 제거함
// //sessionStrage
// //브라우저에 사용자의 설정값을 저장하긴 하나 창을 닫을 경우 삭제
// sessionStorage.setItem('name', 'syleemomo') // 세션스토리지 객체에 name 프로퍼티를 syleemomo 로 설정함
// sessionStorage.getItem('name') // 세션스토리지 객체의 name 프로퍼티를 조회함
// sessionStorage.removeItem('name') // 세션스토리지 객체의 name 프로퍼티를 삭제함
// sessionStorage.clear() // 세션스토리지 객체 자체를 제거함 

const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

function isValid(type){
    return type.split('/')[0] === 'image'
}

function displayImg(src){
    imgBox.innerHTML = `<img src='${src}'/>`
}

function rememberImg(e){
    console.log(e.target.result) // reader 객체로 읽어온 데이터  (이미지 경로)
    sessionStorage.setItem('file',JSON.stringify(e.target.result))
    //localStorage.setItem('file', JSON.stringify(e.target.result))
}

function uploadImg(e){
    const file = e.target.files[0]
    const reader = new FileReader() // 사용자가 업로로드한 파일 데이터를 읽어오기 위한 파일 객체

    if(!isValid(file.type)){
        imgBox.innerHTML = 'File type is not valid !'
        return;
    }

    const src = URL.createObjectURL(file)
    displayImg(src) // 화면에 이미지를 보여주기

    reader.onload = rememberImg // 파일 읽기가 끝나면 rememberImg 를 실행함
    reader.readAsDataURL(file) // reader 객체가 파일을 읽어오기
}

// 화면이 처음 로딩될때 로컬스토리지에 저장된 이미지를 보여주기
function renderImg(){
    //const fileStored = JSON.parse(localStorage.getItem('file'))
    const fileStored = JSON.parse(sessionStorage.getItem('file'))
    if(fileStored){
        displayImg(fileStored)
    }
}

fileInput.addEventListener('change', uploadImg)
window.addEventListener('load', renderImg)