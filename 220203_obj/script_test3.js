const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

function randomNum(list){
    return Math.floor(Math.random()*(list.length))
}

function Person(){
    this.hairColor=hairColors[randomNum(hairColors)]
    this.hairType=hairTypes[randomNum(hairTypes)]
    this.glasses=glasses[randomNum(glasses)]
    this.height=heights[randomNum(heights)]+"cm"
    this.weight=weights[randomNum(weights)]+"kg"
}

const people=[]

for(let i=0;i<10000;i++){
    people.push(person=new Person)
}

console.log(people)

const classified={}

people.forEach(person=>{
    for(key in person){
        value=person[`${key}`]
        classified[value]=(classified[value]||0)+1
    }
})

console.log(classified)

sortPeople=[]

for(key in classified){
    let characters=key
    if(characters=="true"){characters="put On glasses"}
    else if(characters=="false"){characters="No glasses"}
    const a={character : characters,
    cnt : classified[key]}
    sortPeople.push(a)
}

console.log(sortPeople)

sortPeople.sort((a,b)=>b.cnt-a.cnt)

const root=document.getElementById('root')

sortPeople.forEach(person=>{
    const characters=document.createElement('div')
    characters.className="characters"
    const character=document.createElement('div')
    character.className="character"
    character.innerText=`${person.character}`
    const cnt=document.createElement('div')
    cnt.className="cnt"
    cnt.innerText=`${person.cnt}`
    characters.append(cnt,character)
    root.append(characters)
})
