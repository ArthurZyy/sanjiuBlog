// 某公司 1 到 12 月份的销售额存在一个对象里面
// 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

let obj = {1:222, 2:123, 5:888};
obj.length = 13;
let _obj = Array.from(obj).map(item => item || null).slice(1)
console.log(_obj)