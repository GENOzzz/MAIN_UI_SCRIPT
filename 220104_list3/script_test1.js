const userName = document.getElementById('user-name') // 사용자 이름 입력창
const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
const userAge = document.getElementById('user-age') // 사용자 나이 입력창
const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
const users = [] // 사용자 리스트 배열

// 입력창 유효성 검증
function isValid(str){
    return str !== '' && str !== undefined
}

// user 정보로부터 user 에 대한 DOM 객체 생성 및 반환
function buildElement(user){
    const userEl = document.createElement('div')
    userEl.className='user'
    userEl.innerHTML=
    `Name : ${user.name}<br>
    Age : ${user.age}<br>
    E-mail:${user.email}`
    return userEl
}
// users 배열을 이용하여 화면에 사용자 리스트 보여주기
function displayUsers(users){
    while(true){
        if(!userList.hasChildNodes())break;//자식요소가 없다면 while문 탈출
        userList.removeChild(userList.firstChild)//있으면 첫번째 자식요소 지움
    }
	users.forEach(user=>userList.append(buildElement(user)))//users의 첫번째 요소 부터 userList에 append
}

// 입력창 초기화
function initInput(){
    userName.value = ''
    userEmail.value = ''
    userAge.value = ''
}

// 사용자 추가하기
function addUser(){
	users.push({name:userName.value,age:userAge.value,email:userEmail.value})
    console.log(users)
    initInput()
    displayUsers(users)
}

submitBtn.addEventListener('click', addUser)