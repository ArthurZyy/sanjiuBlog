// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20]

function classifyArr(arr) {
    arr = Array.from(new Set(arr)).sort((a, b) =>  a - b)
    let resArr = []
    arr.forEach(item => {
        let index = Math.floor(item / 10)
        resArr[index] = resArr[index] || []
        resArr[index].push(item)
    });
    return resArr
}

console.log(classifyArr(arr))