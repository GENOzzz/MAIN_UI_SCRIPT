const menuContainer = document.getElementById('menu-container')

function openMenu(e){
    const target = e.target
    if(target.className === 'title'){
        console.dir(target)
        target.nextElementSibling.classList.toggle('open')
    }
}

function closeMenu(e){
    const target = e.target
    if(target.getElementById==='menu-container'){
        console.log(target.children)
    }
}

menuContainer.addEventListener('click', openMenu)
menuContainer.addEventListener('mouseleave',closeMenu)