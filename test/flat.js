const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

// 
function myFlat1(arr) {
    let arrResult = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            arrResult = arrResult.concat(arguments.callee(item));
        } else {
            arrResult.push(item);
        }
    });
    return arrResult;
}

function myFlat2(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? arguments.callee(cur) : cur)
    }, [])
}

function myFlat3(arr) {
    let arrResult = []
    let stack = [].concat(arr);
    while (stack.length) {
        const item = stack.pop()
        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            arrResult.unshift(item)
        }
    }
    return arrResult
}

function myFlat4(arr, num = 1) {
    return num > 0
        ? arr.reduce((pre, cur) =>
            pre.concat(Array.isArray(cur) ? myFlat4(cur, num - 1) : cur), [])
        : arr.slice()
}

function* myFlat5(arr, num = 1) {
    for (const item of arr) {
        if (Array.isArray(item) && num > 0) {
            yield* myFlat5(item, num - 1)
        } else {
            yield item;
        }
    }
}

Array.prototype.myFlat6 = function (num = 1) {
    if (!Number(num) || Number(num) < 0) {
        return this;
    }
    let arr = this.concat()
    while (num > 0) {
        if(arr.some(x =>  Array.isArray(x))){
            arr = [].concat.apply([], arr)
        } else {
            break
        }
        num --
    }
    return arr
}


let arrResult = myFlat5(arr, 2)
arrResult = arr.myFlat6(2)
console.log(arrResult)