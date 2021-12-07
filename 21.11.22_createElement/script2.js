
// 사진리스트의 div 요소 검색하기
console.log('사진 리스트의 div요소 검색하기-----------------------------')
const photos = document.querySelectorAll('.photo-item')
console.log(photos)

// 사진리스트의 img 요소 검색하기 
const imgs = document.querySelectorAll('.photo-item img')
console.log(imgs)
//유사배열의 순서에 따른 요소 겁색 
//src속성 조회하기.
console.log(imgs[0].src)
console.log(imgs[1].src)
console.log(imgs[2].src)

//for반복문을 통한 검색
for(let img of imgs){   //for ~of 반복문. 눈에 잘 익혀둘것.
    console.log(img)
}

//사진리스트의 div요소 검색하기
//클래스 이름으로 검색하기
const photos2=document.getElementsByClassName('photo-item')
//배열을 이용한 각각의 DOM객체 조회하기
for(let photo of photos2){
    console.log(photo)
}

//태그 이름으로 요소 검색하기.
const imgs2 = document.getElementsByTagName('img')
for(let img2 of imgs){
    console.log(img2)
}
console.log('부모요소 접근하기-----------------------------')
//부모요소 접근하기
const photos3 = document.querySelectorAll('.photo-item')//.photo-item인 모든 요소를 검색.
//parentElement를 이용해 접근하는 방법.
console.log(photos3[0].parentElement)
//parentElement를 두번 사용해 더욱 상위 요소에 접근하는 방법.
console.log(photos3[0].parentElement.parentElement)
//closet메서드를 사용하는 방법
//자식요소의 closest 메서드의 인자로 검색하고자 하는 
//부모요소에 대한 CSS 선택자를 전달하면 해당 부모 요소를 반환한다.
const photos4 = document.querySelectorAll('.photo-item')
console.log(photos4[0].closest('#photo-container'))
console.log(photos4[0].closest('#root'))

console.log('자식요소 접근하기-----------------------------')
//자식요소 접근하기
const parent=document.querySelector('.parent')

//부모요소.children >> 감싸고있는 element만 반환 (node는 반환 X)
console.log(parent.children)

//부모요소.childNode >> 해당하는 요소의 모든 노드 반환 (공백도 노드 이므로 주의할것.)
console.log(parent.childNodes)

//부모요소.firstElementChild >> 첫번째 요소(element)만 반환
console.log(parent.firstElementChild)

//부모요소.firstChild >> 첫번째 노드 반환
console.log(parent.firstChild)

//부모요소.lastElementChild >> 마지막 요소(element)만 반환
console.log(parent.lastElementChild)

//부모요소.lastChild >> 마지막 노드 반환
console.log(parent.lastChild)

console.log('형제요소 접근하기-----------------------------')
//형제요소 접근하기 (동등한 위치의 요소)
//자식요소.nextElementSibling >> 해당요소의 다음 형제 요소(element)를 반환
const bro = document.querySelector('#photo')
console.log(bro.nextElementSibling)

//자식요소.nextSibling >> 해당 요소의 다음 노드 반환(노드는 공백도 포함 항상 명심)
console.log(bro.nextSibling) //현재 nextSibling(텍스트)

//자식요소.previousElementSibling>>이전 형제 요소 반환
const backbro = document.querySelector('#photo3') 
console.log(backbro.previousElementSibling)

const backbro2=document.querySelector('#photo') //이전에 동등한 위치에 형제 요소가 없을경우 null 반환
console.log(backbro2.previousElementSibling)

//자식요소.previousSibling>>이전 형제 노드 반환
console.log(backbro2.previousSibling)

console.log('객체의 속성 조회하기------------------------------')
//DOM객체의 속성 조회하기
// img 요소의 속성 조회하기
console.log('img요소의 속성 조회하기------------------------------')
const img = document.querySelector('#img1')
console.log(img.id)
console.log(img.src)
console.log(img.alt)

// p 요소의 속성 조회하기
console.log('p 요소의 속성 조회하기------------------------------')
const p = document.querySelector('.summary')
console.log(p.className)
console.log(p.innerText)

// input 요소의 속성 조회하기
console.log('input 요소의 속성 조회하기------------------------------')
const input = document.querySelector('#search')
console.log(input.id)
console.log(input.type)
console.log(input.placeholder)
console.log(input.innerHTML) // 존재하지 않는 속성 (은 출력되지않는다 .)



