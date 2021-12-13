const pageContents=[];//데이터 리스트를 담고 있는 배열
const numOfData=100;//전체 리스트 수(변경가능)
const limit=4;
const numOfBtns=Math.ceil(numOfData/limit);//페이지 네이션 버튼 개수.
let offset=0;//각 페이지에 표시할 배열안의 시작index을 정할 offset;

const contents=document.getElementById('contents');//화면에 띄울 contents
const pageBtns = document.getElementById('page-btns');//버튼 컨테이너.

//데이터 구조(서버에서 데이터 들어올때.)
/*
[
    {name:"",age:34,id:""},
    {name:"",age:24,id:""},
    {name:"",age:28,id:""},
    {name:"",age:31,id:""},
]
*/
//데이터 리스트 생성하기
for(let i=0;i<numOfData;i++){
    pageContents.push({name:'sunrise',age:28,id:i});
}
console.log(pageContents)

//페이지네이션 버튼 보여주기
for(let i=0;i<numOfBtns;i++){
    const btn = document.createElement('button');
    btn.className='page-btn';
    btn.innerText=i+1;

    pageBtns.appendChild(btn);
}

//첫페이지 보여주기.
for(let i=0;i<offset+limit;i++){
    const listItem=pageContents[i];
    contents.innerHTML+=`
    <div id=${listItem.id} class='list-item>
     <h3>${listItem.name}(${listItem.id})</h3>
     <h3>${listItem.age}</h3>
    </div>
    `
    //콘솔키로 묵고 각요소의 id와 이름 나이를 추가함.
}

function changePage(e){
    const target=e.target;
    if(target.className==='page-btn'){
        const indexSelected=parseInt(target.innerText)-1;
        offset=indexSelected*limit;//누적 개념 X

        const listSelected=[];
        for(let i=offset;i<offset+limit;i++){
            const item=pageContents[i];
            listSelected.push(item)
        }
        console.log(listSelected)
        
        //화면 초기화
        contents.innerHTML=''

        //화면에 특정 페이지 리스트만 보여주기.
        for(let listItem of listSelected){
            contents.innerHTML+=`
                <div id=${listItem.id} class='list-item'>
                    <h3>${listItem.name} (${listItem.id})</h3>
                    <h3>${listItem.age}</h3>
                </div>
             `
        }
    }
}

pageBtns.addEventListener('click',changePage)