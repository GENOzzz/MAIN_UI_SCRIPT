//화면에 띄울 내용
const pageContents = [
    'page1', 'page 2', 'page 3', 'page 4', 'page 5',
    'page 6', 'page 7', 'page 8', 'page 9', 'page 10',
]

const contents = document.getElementById('contents')
const pageBtns = document.getElementById('page-btns')



for(let i=0;i<pageContents.length;i++){
    const btn = document.createElement('button')
    btn.className = 'page-btn'
    btn.innerText = i + 1

    pageBtns.appendChild(btn)
}
contents.innerHTML = pageContents[0]

function changePage(e){
    const target = e.target
    //버튼을 클릭한 경우.
    if(target.className === 'page-btn'){
        console.log(target)   //문자열로 들어가므로 parseInt로 형변환.
        const indexSelected = parseInt(target.innerText) - 1 //인덱스는 0번부터 시작하므로 1을 빼주어야함.
        console.log(indexSelected)
        contents.innerHTML = pageContents[indexSelected]
    }
}

pageBtns.addEventListener('click', changePage)