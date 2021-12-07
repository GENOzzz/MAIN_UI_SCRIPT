const photos = document.getElementById("photos");
const options=document.querySelectorAll('.options')
const selection=document.getElementById('selection')

let index=0;
let timerId =null;
let previndex=0;//클릭했을때 늘어난 carousel 저장
let preveOption=0;//시간마다 늘어나는 carousel 저장

function changePosition(){
    console.log("HI")
    const photoItems=document.querySelectorAll('.photo')
    index = index===photoItems.length-1? 0:index+1;
    console.log(index);
    photos.style.marginLeft=index*-500+'px';
    //셀렉터 구현. 
    options[preveOption].style.width=20+'px';//changePosition으로 늘어난 carousel 초기화
    options[preveOption].style.borderRadius='50%';
    options[previndex].style.width=20+'px'//thisphoto로 늘어난 carousel초기화
    options[previndex].style.borderRadius='50%'
    options[index].style.width=50+'px';
    options[index].style.borderRadius='5px';
    preveOption=index;
}


// function startCarousel(){
//     console.log('mouse entered!')
//     timerId=setInterval(changePosition,800);
// }
timerId=setInterval(changePosition,800);

function startCarousel(){
    console.log('mosue levead!')
    timerId=setInterval(changePosition,800);
}

function stopCarousel(){
    console.log('mouse entered!')
    clearInterval(timerId);//clearInterval : setInterval정지시키는 함수.
}

function getIndex(e) {
    var i = 0;
    while((e = e.previousSibling) != null) {//이전요소 탐색 /null이아니면 i++
      i++;
      console.log(i)
    }
  
    return i;
  }



function thisphoto(e){
    stopCarousel()
    index = getIndex(e.target)-1
    console.log("pre"+previndex)
    console.log("now"+index)
    options[previndex].style.width=20+'px'//thisphoto로 늘어난 carousel초기화
    options[previndex].style.borderRadius='50%'
    options[preveOption].style.width=20+'px';//changePosition으로 늘어난 carousel 초기화
    options[preveOption].style.borderRadius='50%';
    photos.style.marginLeft=(index)*-500+'px'
    options[index].style.width=50+'px'
    options[index].style.borderRadius='5px'
    previndex=index;
}

// function Returncarousel(){
//     for(let option of options){
//         option.style.width=20+'px'
//         option.style.borderRadius='50%'
//     }
// }

photos.addEventListener('mouseleave',startCarousel)
photos.addEventListener('mouseenter',stopCarousel)

for(let option of options){
    option.addEventListener('mousedown',thisphoto)
}
// for(let option of options){
//     option.addEventListener('mouseleave',Returncarousel)
// }
//selection.addEventListener('mouseleave',Returncarousel)

