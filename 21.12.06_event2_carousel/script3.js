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
        e.stopPropagation();
    }

    prevTarget=target;
}

menuContainer.addEventListener('click', openMenu)