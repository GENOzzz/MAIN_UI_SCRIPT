//1
function findMaxValue(...args){
    let minNum=0;
    let maxNum=0;
    for(let arg of args){
        if(arg==parseFloat(arg)){
            minNum=parseFloat(arg)
            if(minNum>maxNum){
                maxNum=minNum
            }
        }   
    }
    return maxNum;
}

// 테스트 케이스 
console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))

//2
function Movie(title, author, release){
    this.title = title
    this.author = author
    this.release = release

    this.printMovieInfo = () => {
        const getInfo=()=>{
            return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
        }
        
        console.log(getInfo()) 
    }
}

const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
movie.printMovieInfo()

//3
// getDistance 함수 구현하기
function getDistance(p1,p2={x:0,y:0}){
    d1=p1.x-p2.x
    d2=p1.y-p2.y
    d=Math.sqrt(d1*d1+d2*d2)
    return d;    
}
 
 // 테스트 케이스
 console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
 console.log(getDistance({x: 3, y: 4}))

 //4
 // countDuplication 함수 구현하기 
function countDuplication (flag,...args){
    //flag=>배열의 첫번째 요소를 가져옴
    let cnt=0
    args.forEach(a=>{
        if(a===flag)
        cnt++
    })
    return cnt;
}

// 테스트 케이스 
console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4

//5
function add(...args){
    console.log(args)
    let sumNum=0;
    args.forEach(a=>{
        sumNum+=!isNaN(parseFloat(a))? parseFloat(a):0
    })
    return sumNum
}

// 테스트 케이스
console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9

//6
// divider 함수 구현하기
function divider(flag,...args){
    //flag=> 배열의 첫번째요소를 배열에서 제거하고 저장.
    const newArray=[]
    for(let i of args){
        if(flag==0){
            newArray.push(i)
        }else{
            newArray.push(i/flag)
        }
    }
    return newArray
}


// 테스트 케이스 
console.log(divider(2, 39, 4, 7, 28, 62, 28))
console.log(divider(0, 39, 4, 7, 28, 62, 28))

//7
const numbers = [121, 23, 345, 43, 59]

function pickIndex(len){
    return Math.floor(Math.random() * len)
}

function shuffle(arr){
    let tmp
    for(let i in arr){
        let randomNum=pickIndex(arr.length)
        tmp=arr[i]
        arr[i]=arr[randomNum]
        arr[randomNum]=tmp
    }    
    return arr    
}

console.log(shuffle(numbers))
