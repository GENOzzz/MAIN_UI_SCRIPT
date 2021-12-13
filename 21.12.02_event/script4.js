const openBtn = document.getElementById('open-btn');
const sidebar = document.querySelector('.sidebar');
const menus= document.querySelectorAll('.menu');
let prevTarget=null;



function openSidebar(){
    sidebar.classList.add('show')
    // for(let i=0;i<menus.length;i++){
    //     menus[i].classList.add('show')
    //     menus[i].classList.remove('hide')
    // }
}

function closeAll(){
    if(prevTarget!=null){
        prevTarget.nextElementSibling.classList.remove('open')
    }
    sidebar.classList.remove('show')
    for(let i=0;i<menus.length;i++){
        menus[i].classList.remove('hide')
        menus[i].classList.remove('show')
    }
}

function closeSidebar(){
    console.log("mouseleave")
    setTimeout(closeAll,1000)
}


function OpenNClose(e){
    target=e.target;
    if(target.className==='menu'){
        console.log('click')
        for(let i=0;i<menus.length;i++){
            if(menus[i]==target){
                menus[i].classList.add('show')
                menus[i].nextElementSibling.classList.add('open')
            }
            else{
                menus[i].classList.add('hide')
            }
        }
    }
    prevTarget=target;
}

openBtn.addEventListener('click', openSidebar)
sidebar.addEventListener('mouseleave',closeSidebar)
sidebar.addEventListener('click',OpenNClose)