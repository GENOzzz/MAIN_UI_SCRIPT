function buildElement(tagName,attributes,elements){
    const el=document.createElement(tagName)

    for(let key in attributes){
        console.log(key,attributes[key])
        el[key]=attributes[key]
    }
    for(let element of elements){
        if(typeof element==='string'){
            el.innerText=element
        }else{
            el.appendChild(element)
        }
    }
    return el;
}
//console.log(buildElement('img',{'src':'dog.png','alt':'강아지'},[]))
const menu=buildElement('div',{'id':'menu'},[
    buildElement('img',{'className':'bar','src':'dog.png'},[]),
    buildElement('img',{'className':'bar','src':'dog.png'},[]),
    buildElement('img',{'className':'bar','src':'dog.png'},[])
    ])
console.log(menu);

document.body.appendChild(menu);

arr=[1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]

for(let key of arr){
    document.write(key+" ")
}
document.write("<br></br>")
for(let key in arr){
    document.write(key+" ")
}
document.write("<br></br>")
var arrr=new Set([1,2,3,4,3,4,5,4,4,5,3,5,2,5,5,1])
for(var key of arrr){
    document.write(key+" ")
}
document.write("<br></br>")
for(var key in arrr){
    document.write(key+" ")
}
document.write("<br></br>")
for (var key in arrr){

}

