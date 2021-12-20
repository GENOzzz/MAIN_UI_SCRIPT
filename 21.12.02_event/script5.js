//클릭할때마다 색상변경
function changeColor(e){
    var r = (Math.random()*255);
    var g = (Math.random()*255);
    var b = (Math.random()*255);
    console.log(e)
    console.log(e.target)
    console.log(e.target.style.width)
    console.log(e.target.style.backgroud)
    const target=e.target.style
    target.background=`rgb(${r},${g},${b})`;
    //target.backgroud='rgb('+r+','+g+','+b+')';
}

const container = document.getElementById('container')
const tiles=document.querySelectorAll('.tile');
console.log(tiles)

for(let tile of tiles){
    tile.addEventListener('click',changeColor)
}

//클릭한 위치에 div생성
const body = document.querySelector('body');
function makeCircle(e){
    const circle = document.createElement('div');
    circle.className='circle';
    body.append(circle);
    console.log(e.clientX, e.clientY);
    const mouseX = e.clientX;//window로부터 좌표를따옴.
    const mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
    circle.style.transition='all ease 1.5s'//지연시간.
}

window.addEventListener('click', makeCircle)
// window.addEventListener('mousemove',makeCircle)


