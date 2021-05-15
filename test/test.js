function myNew(fn, ...args) {
    var obj = Object.create(fn.prototype)
    var result = fn.call(obj, args)
    return result instanceof 'object' ? result : instans

}