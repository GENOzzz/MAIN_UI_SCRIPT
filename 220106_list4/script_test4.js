const lyricsEl = document.getElementById('lyrics')
const searchEl = document.getElementById('search')

const lyrics = `
어느새 빗물이 \n
내 발목에 고이고 \n
참았던 눈물이 \n
내 눈가에 고이고 I cry \n
텅 빈 방엔 시계소리 \n
지붕과 입 맞추는 비의 소리 \n
오랜만에 입은 코트 주머니 속에 반지 \n
손 틈새 스며드는 memory \n
며칠 만에 나서보는 밤의 서울 \n
고인 빗물은 작은 거울 \n
그 속에 난 비틀거리며 아프니까 \n
그대 없이 난 한 쪽 다리가 짧은 의자 \n
둘이서 쓰긴 작았던 우산 \n
차가운 세상에 섬 같았던 우산 \n
이젠 너무 크고 어색해 \n
그대 곁에 늘 젖어있던 왼쪽 어깨 (뭐해?) \n
기억의 무게에 고개 숙여보니 \n 
버려진 듯 풀어진 내 신발끈 \n
허나 곁엔 오직 비와 바람 \n
(없다) 잠시라도 우산을 들어줄 사람 \n
And I cry \n
어느새 빗물이 \n
내 발목에 고이고 \n
참았던 눈물이 \n
내 눈가에 고이고 I cry \n
그대는 내 머리 위의 우산 \n
어깨 위에 차가운 비 내리는 밤 \n
내 곁에 그대가 습관이 돼버린 나 \n
난 그대 없이는 안 돼요. Alone in the rain \n
Alone in the rain, rain, rain \n
Nothin' but pain, pain, pain \n
Girl, I just want you to know \n
Alone in the rain, rain, rain \n
Nothin' but pain, pain, pain \n
And I just can't let you go \n
하늘의 눈물이 고인 땅 \n
별을 감춘 구름에 보인 달 \n
골목길 홀로 외로운 구두 소리 \n
메아리에 돌아보며 가슴 졸인 맘 \n
나를 꼭 닮은 그림자 \n
서로가 서로를 볼 수 없었던 우리가 \n
이제야 둘인가? 대답을 그리다 \n
머릿속 그림과 대답을 흐린다 \n
내 눈엔 너무 컸던 우산 \n
날 울린 세상을 향해 접던 우산 \n
영원의 약속에 활짝 폈던 우산 \n
이제는 찢겨진 우산 아래 두 맘 \n
돌아봐도 이젠 없겠죠 \n
두 손은 주머니 속 깊게 넣겠죠 \n
이리저리 자유롭게 걸어도 \n
두 볼은 가랑비에도 쉽게 젖겠죠 \n
난 열어놨어, 내 마음의 문을 \n
그댄 내 머리 위의 우산 \n
그대의 그림자는 나의 그늘 \n
그댄 내 머리 위의 우산 \n
나의 곁에 \n
그대가 없기에 \n
나 창 밖에 우산을 들고 \n 
기다리던 그대, I cry \n
그대는 내 머리 위의 우산 \n
어깨 위에 차가운 비 내리는 밤 \n
내 곁에 그대가 습관이 돼버린 나 \n
난 그대 없이는 안 돼요. I need you back in my life \n
그대는 내 머리 위의 우산 \n
어깨 위에 차가운 비 내리는 밤 \n
내 곁에 그대가 없는 반쪽의 세상 \n
그대 나 없이는 안 돼요. Forever in the rain \n
버려진 우산 \n
버려진 우산 \n
I need you back \n
버려진 우산 \n
Without you \n
`
// 구현하기
lyrics.split([' ']).forEach(word=>{
    const one=document.createElement('div')
    one.id='word'
    one.innerHTML=`${word}&nbsp`
    lyricsEl.append(one)
})

function isVaild(str){
    return str!=""&&str!=undefined
}

searchEl.addEventListener('input',()=>{
    const words=document.querySelectorAll("#word")
    const highwords=document.querySelectorAll(".highlight")
    //console.log(words)
    if(!isVaild(searchEl.value)){
        highwords.forEach(a=>a.classList.remove('highlight'))
        return;
    }
    highwords.forEach(a=>a.classList.remove('highlight'))
    words.forEach(word=>{
        if(word.innerText.split(/ ,/)[0].toLowerCase().includes(searchEl.value.toLowerCase())){
            word.classList.add('highlight')
            //console.log(word)
        }
    })
})

//5
const commentInput = document.getElementById('user-comment-input') // 사용자 댓글 입력창
const userComments = document.getElementById('user-comments') // 사용자 댓글 리스트 출력

const submitBtn = document.getElementById('user-comment-add') //  사용자 댓글 추가 버튼
const comments = [] // 사용자 댓글목록 배열
const insults = ['shit', 'fuck', 'poop', 'dumb', '새끼', '놈', '똥', '씨발', '좇', '시발', '좆', '죽어', '뒤져', '병신', '년']


// 댓글 정보로부터 댓글에 대한 DOM 객체 생성 및 반환
function buildElement(comment){
    const newWords=document.createElement('div')
    newWords.className='comment'
    const newComments=comment.split(' ').map(word=>{
        insults.forEach(fuck=>{
            if(word.includes(fuck)){
                word=word.replace(`${word}`,'😁')
            }
        })
        return word;
    })
    newWords.innerHTML+=newComments.join(' ')
    console.log(newWords)
    return newWords;
}

// comments 배열을 이용하여 화면에 댓글목록 보여주기
function displayComments(comments){
    //userComments.innerHTML = ''
    userComments.append(comments)
}

// 입력창 초기화
function initInput(){
    commentInput.value = ''
}

// 댓글 추가하기
function addComment(){
    const comment = commentInput.value

    if(comment !== ''){
        displayComments(buildElement(comment))
        initInput()
    }else{
        alert('You need to give a comment !')
    }
}

submitBtn.addEventListener('click', addComment)