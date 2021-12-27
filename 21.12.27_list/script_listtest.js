//1
const claps=new Array(100).fill(0)

for(let clap in claps){
    if((clap+1)%3==0){
        let num=parseInt(clap)
        claps[clap]=num+1
    }
}

console.log(claps)

//2
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const newalpha=new Array(alphabet.length)
let alpha='';//없다고 선언해주고 써야함.

for(let i=0;i<alphabet.length;i++){
    for(let j=0;j<i+1;j++){
        alpha+=alphabet[j]
    }
    newalpha[i]=alpha
    alpha=''
}

console.log(newalpha)

// for(let i=0;i<newalpha.length;i++){
//     console.log(newalpha[i])
// }

//3
const three = new Array()
let i=0;
while(i<1000){
    if(i!=0&&i%3==0){
        three.push(i)
    }
    i++;
}
console.log(three)

//4
function randomStr(n){
    const randomalpha=new Array(n);
    for(let i =0; i<n;i++){

        randomalpha[i]=alphabet[Math.floor(Math.random()*alphabet.length)]//MAth.fllor(실수)<소수점때고 정수반환.
    }
    return randomalpha
}
console.log(randomStr(3))
console.log(randomStr(5))
console.log(randomStr(7))

//5
for(let sixidx in three){
    if (three[sixidx]%6==0){
        three[sixidx]=null
    }
}
console.log(three)

//6
const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: {name : "Spider", firstname:'man'}, release: '2017-03-07'}
]

const movies_copied = []

function cloneObject(obj) {//객체 깊은복사
    var clone = {};
    for (var key in obj) {
      if (typeof obj[key] == "object" && obj[key] != null) { //입력받은 객체의 키가 객체로 존재하면
        clone[key] = cloneObject(obj[key]); //clone객체에 cloneObject(재귀함수)로 다시 접근
      } else {
        clone[key] = obj[key];//최종적으로 obj의 키를 clone으로 복사
      }
    }
    return clone;
}

for(let i=0;i<movies.length;i++){
    movies_copied[i]=cloneObject(movies[i])
}

movies[1].title='dododo'
movies[2].release='gagaga'
movies_copied[2].title='hihihi'
movies_copied[2]['hihihi']='gogogo'//2번째 object에 key와 value 추가 가능.
console.log(movies)
console.log(movies_copied[2]['hihihi'])
console.log(movies_copied)
delete(movies_copied[2]['release'])//객체요소 삭제 가능.
console.log(movies_copied)

//7
const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level',
    'b2b'
]

function isPalindreom(e){
    count=0;
    for(let word of e){
        if(isPalindreomword(word)){
            count++;
        }
    }
    return count;
}

function isPalindreomword(e){
    EL=e.length
    for(let i=0;i<EL/2;i++){
        if(e[i]!=e[EL-i-1]){
            return false;
        }else{
            return true;
        }
    }
}

console.log(isPalindreom(words))