//함수도 객체다.

function add(a, b){
    return a + b
}

add['description'] = 'add two numbers'
add['parameter-info'] = function(){
    console.log(`parameters: ${add.name} function needs ${add.length} parameters`)
}

console.dir(add)

console.log('--- function information ---')
console.log('description: ', add['description'])
add["parameter-info"]()

const a = 3
const b = 5

function subtract(a, b){
    return a - b
}

if(a < b){
    console.log(-subtract(a, b))
}else{
    console.log(subtract(a, b))
}