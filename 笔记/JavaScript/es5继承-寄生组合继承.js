/* https://zhuanlan.zhihu.com/p/36340941
寄生组合式继承，
即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。
本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
*/
function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype); //创建对象
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    alert(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);

    this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
    alert(this.age);
};