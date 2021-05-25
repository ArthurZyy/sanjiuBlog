function myNew(fn, ...args){
    // 新建一个新的对象，并链接到原型
    let instance = Object.create(fn.prototype);
    // 绑定this，并执行构造函数
    let result = fn.call(instance, ...args);
    // 确保返回值为对象
    return typeof result == 'object' ? result : instance
}