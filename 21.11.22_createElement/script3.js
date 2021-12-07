//부모 디브 생성
const divp=document.createElement('div')
divp.id="photo-contaniner"

// const divaa=[]
// const divbb=document.createElement('div')
// const imgaa=document.createElement('img')
// divbb.append(imgaa)
// for(let i=0;i<5;i++){
//     divaa.append(divbb)
// }
// console.log(divaa)

console.log("----------------------------")
//divp 의 하위 디브 생성
const div1=document.createElement('div')
div1.className="photo-item"
//div1에 들어갈 하위 디브 생성
const img1=document.createElement('img')
img1.src="http://127.0.0.1:5500/index.html"
img1.alt="photo"
//div1에 img1요소 추가(자식요소)
div1.append(img1)

//divp 의 하위 디브 생성
const div2=document.createElement('div')
div2.className="photo-item"
//div2에 들어갈 하위 디브 생성
const img2=document.createElement('img')
img2.src="http://127.0.0.1:5500/index.html"
img2.alt="photo"
//div2에 img2요소 추가(자식요소)
div2.append(img2)

//divp 의 하위 디브 생성
const div3=document.createElement('div')
div3.className="photo-item"
//div3에 들어갈 하위 디브 생성
const img3=document.createElement('img')
img3.src="http://127.0.0.1:5500/index.html"
img3.alt="photo"
//div3에 img요소 추가(자식요소)
div3.append(img3)

//divp 의 하위 디브 생성
const div4=document.createElement('div')
div4.className="photo-item"
//div4에 들어갈 하위 디브 생성
const img4=document.createElement('img')
img4.src="http://127.0.0.1:5500/index.html"
img4.alt="photo"
//div4에 img요소 추가(자식요소)
div4.append(img4)

//divp 의 하위 디브 생성
const div5=document.createElement('div')
div5.className="photo-item"
//div5에 들어갈 하위 디브 생성
const img5=document.createElement('img')
img5.src="http://127.0.0.1:5500/index.html"
img5.alt="photo"
//div3에 img요소 추가(자식요소)
div5.append(img5)


//div1에 div2요소 추가(자식요소)
divp.append(div1, div2, div3, div4, div5)

//id가 root인 html요소 가져옴
const root=document.getElementById("root")
//root에 div1추가
root.append(divp)

//클래스 이름으로 검색하기
const parent=document.getElementsByClassName('photo-item')
const paragraph=document.querySelector('.summury')
//클래스 이름으로 통째로 조회.
console.log(parent)
//배열을 이용한 각각의 DOM객체 조회하기
for(let item of parent){
    console.log(item.children)
    console.log(item.children.alt)
}
console.log("-----------------")
console.log(parent[0].firstChild)
console.log(parent[0].firstChild.alt)
console.log(parent[0].lastChild)
console.log(parent[0].lastChild.alt)
console.log(parent[0].children[0])
console.log(parent[0].children[0].alt)
console.log(parent[0].children)

console.log("-----------------")
const parent2=document.getElementById("photo-contaniner")
console.log(parent2.firstChild.firstChild.alt)

console.log("-----------------")
const parent3=document.querySelectorAll(".photo-item")
console.log(parent3[0])
console.log(parent3[0].childNodes)
console.log(parent3[0].childNodes[0])
console.log(parent3[0].childNodes[0].alt)

// console.log(parent3[0].children.alt)
