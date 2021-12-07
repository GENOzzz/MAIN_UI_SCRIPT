const openBtn = document.getElementById('open-btn')
const sidebar = document.querySelector('.sidebar')

function openSidebar(){
    sidebar.classList.add('show')
    setTimeout(closeSidevar,3000);
}
function closeSidevar(){
    sidebar.classList.remove('show')
}

openBtn.addEventListener('click', openSidebar)
// sidebar.addEventListener('mouseleave',closeSidevar)