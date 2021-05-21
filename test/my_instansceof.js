function myInstanceof(left, right) {
    let proto = left.__proto__.constructor.prototype
    while (true) {
        if(proto === null) return false
        if(proto === right.prototype) return true
        proto = proto.__proto__.constructor.prototype
    }
}

function a(params) {
    
}

console.log(myInstanceof(a, Function))