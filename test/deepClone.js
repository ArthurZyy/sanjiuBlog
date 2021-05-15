let _toString = Object.prototype.toString
let map = {
    array: 'Array',
    object: 'Object',
    function: 'Function',
    string: 'String',
    null: 'Null',
    undefined: 'Undefined',
    boolean: 'Boolean',
    number: 'Number'
}
let getType = (item) => {
    return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
    return map[type] && map[type] === getType(item)
}
// 深复制 深度优先遍历
let DFSdeepClone = (obj, visitedArr = []) => {
    let _obj = {}
    if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
        let index = visitedArr.indexOf(obj)
        _obj = isTypeOf(obj, 'array') ? [] : {}
        if (~index) { // 判断环状数据
            _obj = visitedArr[index]
        } else {
            visitedArr.push(obj)
            for (let item in obj) {
                _obj[item] = DFSdeepClone(obj[item], visitedArr)
            }
        }
    } else if (isTypeOf(obj, 'function')) {
        _obj = eval('(' + obj.toString() + ')');
    } else {
        _obj = obj
    }
    return _obj
}

var obj = {
    arr: [1],
    fn: function (params) {
        console.log(1)
    }(),
    obj: {
        a: '1'
    }
}

obj2 = DFSdeepClone(obj)
obj2.fn()