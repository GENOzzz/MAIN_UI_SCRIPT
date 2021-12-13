const menuContainer = document.getElementById('menu-container')
let prevTarget=null;


function openMenu(e){
    if(prevTarget!=null){
        prevTarget.nextElementSibling.classList.remove('open')
    }

    const target = e.target
    if(target.className === 'title'){
        console.dir(target)
        target.nextElementSibling.classList.add('open')
    }

    prevTarget=target;
}

function closeMenu(e){
    const target = e.target
    if(target.getElementById==='menu-container'){
        console.log(target.children)
    }
}

menuContainer.addEventListener('click', openMenu)
menuContainer.addEventListener('mouseleave',closeMenu)