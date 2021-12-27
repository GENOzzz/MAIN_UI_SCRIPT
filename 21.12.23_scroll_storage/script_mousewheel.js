const contents = document.querySelectorAll('.contents')

function startAnimation() {
    for (let content of contents) {
        console.log(content.getBoundingClientRect().top)
        //getBoundingClientRect() 화면상 어느 위치에 있는지 찾는 함수.
        //top, bottom, left, right, width, height, x, y 를 찾을 수 있음. 기준은 왼쪽탑(0,0)좌표.
        if (!content.classList.contains('show') && content.getBoundingClientRect().top < 200) {
            content.classList.add('show')
        }else if (content.classList.contains('show')
        &&content.getBoundingClientRect().top>=300
        &&content.getBoundingClientRect().x>200){
            //없이 그냥 else만 하면 !~contains('show')에 걸려서 사라졌다 나타났다 반복함.
            //x좌표상으로 조건을 주면 원하는 부분만 지우기도 가능
            content.classList.remove('show')
        }else if(content.classList.contains('show')&&content.getBoundingClientRect().top>=400){
            content.classList.remove('show')
        }
    }
}

window.addEventListener('scroll', startAnimation)