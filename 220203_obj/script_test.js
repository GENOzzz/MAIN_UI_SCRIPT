// 수면 만족도에 영향을 미치는 요소
// 1. 잠들기까지 걸린 시간 // 짧을수록 수면만족도가 높다
// 2. 잠에서 깨어나는데 걸린 시간 // 짧을수록 수면만족도가 높다
// 3. 잠자는 동안 중간에 깬 횟수 // 횟수가 적을수록 수면만족도가 높다
// 4. 잠자는 동안 뒤척인 횟수 // 적을수록 수면만족도가 높다
// 5. 델타파 비율 //  비율이 높을수록 수면만족도가 높다// 
//수면만족도 = 델타파 비율  / (잠들기까지 걸린 시간 X 잠에서 깨어나는데 걸린 시간 X 깬 횟수 X 뒤척임 횟수)

// min ~ max 사이의 랜덤숫자를 생성하는 함수 (min, max 포함)
function pickRandomNumber(min, max){
    return Math.floor( Math.random() * (max-min+1) ) + min 
}

function Person(){
    this.startSleep=pickRandomNumber(1,10),
    this.wakeUp=pickRandomNumber(1,10),
    this.middleUp=pickRandomNumber(1,5),
    this.middleToss=pickRandomNumber(1,10),
    this.delta=pickRandomNumber(0,50),
    this.satisfaction=0
}

Person.prototype={
    Sleepsatisfaction(){
        this.satisfaction=this.delta/(this.startSleep*this.wakeUp*this.middleUp*this.middleToss)
    },
    get getSatisfaction(){
        return this.satisfaction
    }
}

function goodSleep(person){
    if(person.getSatisfaction>=0.37&&person.getSatisfaction<=50){
        return true
    }else{
        return false
    }
}

const groupA=[]
const groupB=[]
const groupC=[]

for(let i=0;i<100;i++){
    groupA.push(person=new Person())
    groupB.push(person=new Person())
    groupC.push(person=new Person())
}

function testSleep(group){
    group.forEach(person=>(
        person.Sleepsatisfaction(),
        person.satisfaction=person.getSatisfaction
    ))
}

testSleep(groupA)
testSleep(groupB)
testSleep(groupC)

function cntGoodsleep(group){
    let cnt=0;
    group.forEach(person=>{
        if(goodSleep(person)){
            cnt++
        }
    })
    return cnt
}

function test(){
    Acnt=cntGoodsleep(groupA)
    Bcnt=cntGoodsleep(groupB)
    Ccnt=cntGoodsleep(groupC)
    console.log("groupA cnt"+Acnt)
    console.log("groupB cnt"+Bcnt)
    console.log("groupC cnt"+Ccnt)
    if(Acnt>Bcnt&&Acnt>Ccnt){
        alert("A bed is more good sleep")
    }
    if(Bcnt>Acnt&&Bcnt>Ccnt){
        alert("B bed is more good sleep")
    }
    if(Ccnt>Bcnt&&Ccnt>Acnt){
        alert("C bed is more good sleep")
    }
}

test()
