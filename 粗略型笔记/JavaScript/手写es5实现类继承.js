function Parent(){
    this.name = 'parent';
    this.pay = [1,2,3];
}

function Child(){
    Parent.call(this);
    this.type = 'child';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;