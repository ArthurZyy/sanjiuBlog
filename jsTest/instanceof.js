function myInstanceof(left, right){
    let proto = Object.getPrototypeOf(left)
    while (true) {
        if(proto == null) return false
        if(proto == right.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

let a = []
console.log(myInstanceof(a, String))
console.log(myInstanceof(a, Array))