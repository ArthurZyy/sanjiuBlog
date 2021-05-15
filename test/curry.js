// 柯里化
let index = 1
function multi() {
    console.log('i', index++)
    var args = Array.prototype.slice.call(arguments);
    console.log('args', args)
    var fn = function () {
        var m = Array.prototype.slice.call(arguments)
        console.log(m)
        var newArgs = args.concat(m);
        return multi.apply(this, newArgs);
    }
    fn.toString = function () {
        console.log('tostring', args)
        return args.reduce(function (a, b) {
            return a * b;
        })
    }
    return fn;
}
multi(1, 2)(3)(4)(5)