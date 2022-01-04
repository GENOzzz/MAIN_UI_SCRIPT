//2
const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
const companiesReversed = []
let companiesLength=companies.length

while(companies.length!=0){
   let company=companies.pop()
   companiesReversed.push(company)
}

console.log(companiesReversed)

//3
const friends = [
   {name: 'victoria', age: 13, city: 'seoul'},
   {name: 'sun', age: 34, city: 'busan'},
   {name: 'johseb', age: 25, city: 'busan'},
   {name: 'syleemomo', age: 9, city: 'seoul'},
   {name: 'hannah', age: 41, city: 'daegu'},
   {name: 'shara', age: 37, city: 'seoul'},
   {name: 'martin', age: 28, city: 'daegu'},
   {name: 'gorgia', age: 39, city: 'seoul'},
   {name: 'nana', age: 24, city: 'busan'},
   {name: 'dannel', age: 19, city: 'seoul'},
]

const newFriends = [
   {name: 'Ami', aage: 27, city: 'ulsan'},
   {name: 'gracias', aage: 21, city: 'ulsan'},
]

friends.splice(3,0,...newFriends)
console.log(friends)

friends.splice(6,2)
console.log(friends)

const newFriends2=[]

friends.forEach(friend=>{
   if(friend.city!='seoul'){
      newFriends2.push(friend)
   }
})

console.log(newFriends2)

const youngFriends=[]
friends.sort((friend1,friend2)=>friend1.age-friend2.age)
console.log(friends)
friends.forEach(friend=>{
   if(friend.age<30){
      youngFriends.push(friend)
   }
})
console.log(youngFriends)

function sortName(element){
   return element.name
}

friends.sort(function(a,b){
   let nameA=a.name.toUpperCase();
   let nameB=b.name.toUpperCase();
   if(nameA<nameB)return -1;
   if(nameA>nameB)return 1;
   return 0;
})

console.log(friends)

const movies = [
   {title: 'Harry Potter', release: '2003-02-22'}, 
   {title: 'Indiana Jhones', release: '2009-01-09'}, 
   {title: 'Dracula', release: '2007-04-13'},
   {title: 'Terminator', release: '2007-04-11'},
   {title: 'Jurassic Park', release: '2007-05-13'},
   {title: 'Iron man', release: '2012-12-18'},
   {title: 'Spider man', release: '2017-03-07'}
]

movies.sort((a,b)=>a.release.split('-')[0]-b.release.split('-')[0])

movies.sort(function(a,b){
   let Arelease=a.release.split('-')
   let Brelease=b.release.split('-')
   if(Arelease[0]<Brelease[0])return 1;//return이 양수면 순서 변경 음수면 순서그대로를 이용하여 오름차순,내림차순 정렬.
   if(Arelease[0]>Brelease[0])return -1;
   if(Arelease[0]==Brelease[0]){
      if(Arelease[1]<Brelease[1])return 1;
      if(Arelease[1]>Brelease[1])return -1;
      if(Arelease[1]==Brelease[1]){
         if(Arelease[2]<Brelease[2])return 1;
         if(Arelease[2]>Brelease[2])return -1;
         return 0;
      }
   }
})


console.log(movies)