// var add_object = {};
// add_object.addattribute = 'test1';
// add_object.addfunction = function () {
//     alert('function test');
// };

// with (add_object) {
//     alert('addatribute는 ' + addattribute);
//     addfunction();
// }

//객체 생성 함수.

let Cat=function(name,age,color,kg){
    this.name=name,
    this.age=age,
    this.color=color,
    this.kg=kg,
    this.weight=kg+'kg'
    this.eat=function (){
        this.kg+=1
    }
}

const kitty=new Cat('kitty',3,'red',5)

console.log(kitty)

kitty.eat()

console.log(kitty)

let Dog=function(){
    this.name = "",
    this.age="",
    this.color ="",
    this.weight=""
}

Dog.prototype.setName=function (e){
    this.name=e
}

Dog.prototype.getName=function(){
    return this.name
}

Dog.prototype.setAge=function (e){
    this.age=e
}

Dog.prototype.setKg=function (e){
    this.kg=e
    this.weight=e+"kg"
}

Dog.prototype.setColor=function (e){
    this.color=e
}

Dog.prototype.eat=function eat(){
    this.kg+=1
    this.weight=this.kg+'kg'
}

const choco = new Dog()
const kong=new Dog()

choco.setName("choco")
choco.setAge(4)
choco.setColor("brown")
choco.setKg(7)
choco.eat()

console.log(choco)
console.log(choco.getName())

kong.setName("kong")
kong.setAge(5)
kong.setColor("white")
kong.setKg(3)
kong.eat()

console.log(kong)
console.log(kong.getName())

console.log(new Dog())
console.log(Dog)
