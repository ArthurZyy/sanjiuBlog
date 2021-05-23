function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    console.log(this.age);
};
let p1 = new Person("lihua", 18);
console.log(p1.name);
p1.say();

console.log('--------------------------------------')

function MyNew(fn, ...args){
    let obj = Object.create(fn.prototype)
    let result = fn.call(obj, ...args)
    return typeof result === 'object' ? result : obj
}