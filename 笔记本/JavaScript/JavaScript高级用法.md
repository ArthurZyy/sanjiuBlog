# JavaScript高级用法

## Proxy 和 Reflect

### const proxy = new Proxy(target, Reflect); 

### const { proxy, revoke } = Proxy.revocable(target, handler); 

### Object 上的方法适用于通用程序，而反射方法适用于细粒度的对象控制与操作。

### 作用

- 跟踪属性访问
- 隐藏属性
- 阻止修改或删除属性
- 函数参数验证
- 构造函数参数验证
- 数据绑定
- 可观察对象

## Function

### 函数箭头

- 没有arguments、super、new.target
- 不能作为构造函数
- 没有prototype

## Promise 和 async/await

### 状态

- pending
- resolved
- rejected

### 方法

- resolve()
- reject()
- then()
- catch()
- finally()
- all()
- race()

### async/await

- 如果return值

	- async function foo() {
    console.log(1);
    return 3;
}
// 给返回的期约添加一个解决处理程序
foo().then(console.log);
console.log(2);
   // 1
   // 2
   // 3

*XMind - Trial Version*