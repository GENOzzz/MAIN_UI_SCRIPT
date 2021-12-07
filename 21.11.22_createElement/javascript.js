const div = document.createElement('div')
div.className="container" //해당 요소의 클래스이름
div.innerText="Hello word" //해당요소 안에 Text를 넣겠다.

console.log(div);//log - 요소(element)출력
console.dir(div);//dir - DOM의 전체 프로퍼티 출력

const inputText=document.createElement('input')
inputText.className="search-img"
inputText.type="text" //해당요소의 type
inputText.placeholedr="search..."

console.log(inputText)
console.dir(inputText)

const div2=document.createElement('div')
div2.className="contatiner2"
div2.innerHTML="<img src='' alt=''/><p>you have happy family</p>>" 
//태그 사이에 공백도 하나의 Node로 판단.(conbsole에서 text로 찍힘)
//div태그안에 html요소를 문자열로 넣을수 있음.
console.log(div2)
console.dir(div2)

const img=document.createElement('img')
img.src=''
img.alt='javascript'

console.log(img)
console.dir(img)

//img=>DOM 객체.

const div3=document.createElement('div')
div3.className="contatiner3 photobox" //classList = 클래스 목록 container3 와 photobox 두개로 인식
div3.innerHTML="<img id='photo' src='' alt=''/>\ <p>you have happy family</p>" 
{/* <div class="container3 photobox">
    "<img src='' alt=''/>\
    <p>you have happy family</p>" 
</div> */}
//태그 사이에 공백도 하나의 Node로 판단.(conbsole에서 text로 찍힘)
//div태그안에 html요소를 문자열로 넣을수 있음.
console.log(div3)
console.dir(div3)

//div요소 (element) 생성 (부모요소)
const div4 = document.createElement('div')
div4.className='parent'
div4.innerText="Bye World!"
//자식요소 생성하기
const img2=document.createElement('img') //img
img2.className='child'
img2.scr='http://127.0.0.1:5500'
img2.alt='photo'

const p=document.createElement('p') //p
p.className='geno'
p.innerText='hello geno!!'
//부모요소에 자식요소 추가하기
div4.appendChild(img2) //appendChild는 한번에 하나
div4.append(p, img, div3)  //append는 한번에 여러개 가능 (순서대로 출력)

const root=document.getElementById('root')//본문에 생성한 ID값을 가져옴.
const search1=document.getElementById('photo')
const root2=document.getElementById('root2')
console.log(search1) //root(HTML)에 DOM(div4)마운트 전에 검색시 null출력 무조건 삽입후 검색해야함.

root.append(div4) //root(HTML문서)에 DOM(div4 삽입)
root2.append(p, img, div3)


console.log(div4)
console.dir(div4)

//DOM 조회(검색)하기
document.getElementById("root")

const search2=document.getElementById('photo')
console.log(search2)

const search3=document.getElementsByClassName('child')
console.log(search3)

const search4=document.querySelector('#photo')
console.log(search4)
const search5=document.querySelector('.geno')
console.log(search5)

let search6=document.querySelector('img')
console.log(search6)

const search7=document.querySelectorAll('#photo img .geno')
for(let s of search7){
    console.log(s)
}
