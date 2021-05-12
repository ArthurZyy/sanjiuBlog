## 参考
* [JavaScript深入系列15篇正式完结！](https://juejin.cn/post/6844903479429824526)
* [深入理解JavaScript作用域和作用域链](https://juejin.cn/post/6844903797135769614)
* [JavaScript：彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)  
## JavaScript的执行
##### 解释阶段：
- 词法分析
- 语法分析
- 作用域规则确定
##### 执行阶段：
- 创建执行上下文
- 执行函数代码
- 垃圾回收

## 一、原型、原型链
```javascript
// 构造函数
function Person (){}
// prototype：实例的原型
// 原型是JavaScript对象在创建的时候关联的另一个对象，从这个对象"继承"属性
Person.prototype.name = "Kevin";
// 实例
var person = new Person();
// JavaScript对象的__proto__属性，指向对象的原型
console.log(person.__proto__ === Person.prototype); // true
// 原型的constructor属性，指向构造函数
console.log(Person === Person.prototype.constructor); // true
// 给实例的属性赋值，则读取实例的属性
person.name = 'Daisy';
console.log(person.name) // Daisy
// 如果读取不到，则查找对象关联的原型的属性，如果还查找不到就去查找原型的原型
delete person.name;
console.log(person.name) // Kevin
// 同理，person没有构造函数，就会读取Person.prototype的constructor
console.log(person.constructor === Person); // true
console.log(person.constructor === Person.prototype.constructor); // true
// 最后：继承是复制的操作，但原型只是在对象之间创建关联，可以通过原型链访问另一个对象的属性
```

## 二、作用域
##### 作用域
> 作用域是指程序源代码中**定义变量的区域**。
> 作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
> JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

- 全局作用域（任何地方都能访问到）
- 函数作用域（声明在函数内部的变量）
- 块级作用域（通过新增命令let和const声明）

##### 静态作用域
JavaScript采用的是静态作用域，即定义的时候确定了作用域。

##### 动态作用域
1. 从内部查找变量
2. 从调用的地方查找变量
3. 从全局查找变量

## 三、执行上下文
##### 执行上下文
> 当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution contexts)"。
* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this
##### 可执行代码
* 全局代码
* 函数代码
* eval代码

## 四、变量对象（VO）
> 变量对象是与执行上下文相关的**数据作用域**，存储了在上下文中定义的变量和函数声明。

##### 全局上下文
> 全局上下文中的变量对象就是全局对象

##### 函数上下文
> 函数上下文的变量对象初始化只包括 Arguments 对象

##### 执行过程
1. 进入执行上下文
   > 当进入执行上下文时，这时候还没有执行代码
   > 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等**初始的属性值**
   ```javascript
    function foo(a) {
        var b = 2;
        function c() {}
        var d = function() {};
        b = 3;
    }

    foo(1);
   ```
   ```javascript
   AO = {
        arguments: {
            0: 1,
            length: 1
        },
        a: 1,
        b: undefined,
        c: reference to function c(){},
        d: undefined
    }
   ```
2. 代码执行
   > 在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值
   ```javascript
   AO = {
        arguments: {
            0: 1,
            length: 1
        },
        a: 1,
        b: 3,
        c: reference to function c(){},
        d: reference to FunctionExpression "d"
    }
   ```

## 五、作用域链
> 函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！

##### 自由变量
> 当前作用域没有定义的变量，这成为 自由变量 。

##### 作用域链
> 如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 作用域链 。


1. 创建函数，同时把**作用域链**保存到[[scope]]
2. 执行函数，创建函数执行上下文，把函数执行上下文压入执行上下文
3. 复制[[scope]]创建作用域链
4. 用arguments创建活动对象并初始化，加入参数声明
5. 将活动对象压入作用域链顶端
6. 开始执行函数，修改AO的属性值
7. 执行完毕，函数上下文从执行上下文栈中弹出


## 六、this
[JavaScript 深入之从 ECMAScript 规范解读 this](https://juejin.cn/post/6844903473872371725)
QAQ我觉得我是没读懂，有空回头再来看看
##### Reference
> 只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。
> Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。
```javascript
var foo = 1;

// 对应的Reference是：
var fooReference = {
    base: EnvironmentRecord,
    name: 'foo',
    strict: false
};
```
```javascript
var foo = {
    bar: function () {
        return this;
    }
};

foo.bar(); // foo

// bar对应的Reference是：
var BarReference = {
    base: foo,
    propertyName: 'bar',
    strict: false
};
```
> 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)
> 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)

## 七、深入执行上下文
> 1.执行全局代码，创建全局执行上下文，**全局上下文（globalContext）** 被压入 **执行上下文栈(ECStack)**
```javascript
    ECStack = [
        globalContext
    ];
```
> 2.全局上下文初始化
```javascript
    globalContext = {
        VO: [global, scope, checkscope], // 变量对象
        Scope: [globalContext.VO], // 作用域 push 全局上下文的变量对象
        this: globalContext.VO  // this 指向 全局上下文的变量对象
    }
```
> 初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]
```javascript
    checkscope.[[scope]] = [
      globalContext.VO
    ];
```
> 3.执行 checkscope 函数，创建 **checkscope 函数执行上下文（checkscopeContext）**，checkscope 函数执行上下文被压入执行上下文栈
```javascript
    ECStack = [
        checkscopeContext,
        globalContext
    ];
```
> 4.checkscope 函数执行上下文初始化：
    1. 复制函数 [[scope]] 属性创建作用域链，
    2. 用 arguments 创建活动对象，
    3. 初始化活动对象，即加入形参、函数声明、变量声明，
    4. 将活动对象压入 checkscope 作用域链顶端。
    同时 f 函数被创建，保存作用域链到 f 函数的内部属性[[scope]]
```javascript
    checkscopeContext = {
        // 活动对象
        AO: {
            arguments: {
                length: 0
            },
            scope: undefined,
            f: reference to function f(){}
        },
        // 作用域链
        Scope: [AO, globalContext.VO],
        this: undefined
    }
```
> 5.执行 f 函数，创建 f 函数执行上下文，f 函数执行上下文被压入执行上下文栈
```javascript
    ECStack = [
        fContext,
        checkscopeContext,
        globalContext
    ];
```
> 6.f 函数执行上下文初始化, 以下跟第 4 步相同：
```javascript
    fContext = {
        AO: {
            arguments: {
                length: 0
            }
        },
        Scope: [AO, checkscopeContext.AO, globalContext.VO],
        this: undefined
    }
```
> 7.f 函数执行，沿着作用域链查找 scope 值，返回 scope 值

> 8.f 函数执行完毕，f 函数上下文从执行上下文栈中弹出
```javascript
    ECStack = [
        checkscopeContext,
        globalContext
    ];
```
> .checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
```javascript
    ECStack = [
        globalContext
    ];
```

## 八、闭包
> 闭包是指那些能够访问自由变量的函数。
> 从实践角度：即使创建它的上下文已经销毁，它仍然存在

## 九、参数按值传递
##### 1. 按值传递
##### 2. 引用传递
##### 3. 按共享传递
> 而共享传递是指，在传递对象的时候，传递对象的引用的副本。
> **注意： 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！**
> 参数如果是基本类型是按值传递，如果是引用类型按共享传递。


## 十、call和apply的模拟实现
#### 1、call
> call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下**调用**某个函数或方法。
1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数
```javascript
// 模拟 call bar.mycall(null);
//实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.myCall = function(context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol('key')
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组
  
  let result = context[key](...args);
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
};
```
#### 2、apply
```javascript
Function.prototype.myApply = function(context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol('key')
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组
  
  let result = context[key](args); // 这里和call传参不一样
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
}
```

## 十一、bind的模拟实现

```javascript
Function.prototype.myBind = function (context, ...outerArgs) {
  // this->func context->obj outerArgs->[10,20]
  let self = this

  // 返回一个函数
  return function F(...innerArgs) { //返回了一个函数，...innerArgs为实际调用时传入的参数
    // 考虑new的方式
    if(self instanceof F) {
      return new self(...outerArgs, ...innerArgs)
    }
    // 把func执行，并且改变this即可
    return self.apply(context, [...outerArgs, ...innerArgs]) //返回改变了this的函数，参数合并
  }
}
```

十二、new的模拟实现
> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
```javascript
function myNew(fn, ...args){
    let instance = Object.create(fn.prototype);
    let result = fn.call(instance, ...args);
    return typeof result == 'object' ? result : instance
}
```

## 十二、类数组对象与 arguments
```javascript
// 类数组对象
var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}
```
> Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments 指代该函数的 Arguments 对象。

## 十三、Promise
```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('ok');
        resolve('is ok');
    });
});

p.then((data) => {
    console.log('resolved',data);
    console.log(somedata); //此处的somedata未定义
}).catch((err) => {
    console.log('rejected',err);
});
```
```javascript
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})

let p = Promise.all([Promise1, Promise2, Promise3])

p.then(function(){
  console.log('三个都成功则成功')
}, function(){
  console.log('只要有失败，则失败')
})
```
```javascript
 //请求某个图片资源
function requestImg(){
    var p = new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function(){
            resolve(img);
        }
        img.src = '图片的路径';
    });
    return p;
}
//延时函数，用于给请求计时
function timeout(){
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}
Promise.race([requestImg(), timeout()]).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log(err);
});
```
[async参考](async结合Promise.js)

## 十四、同步、异步、事件循环(Event Loop)
#### 1.单线程
1. 主线程：负责解释和执行JavaScript代码的线程
2. 工作线程
   > 处理AJAX请求的线程、处理DOM事件的线程、定时器线程、读写文件的线程(例如在Node.js中)等等。

#### 2.同步和异步
> **同步**：如果在函数A返回的时候，调用者就能够得到预期结果(即拿到了预期的返回值或者看到了预期的效果)，那么这个函数就是同步的。  
> **异步**：如果在函数A返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的。

#### 3.异步过程的构成要素
> 主线程发起一个异步请求，相应的工作线程接收请求并告知主线程已收到(异步函数返回)；主线程可以继续执行后面的代码，同时工作线程执行异步任务；工作线程完成工作后，通知主线程；主线程收到通知后，执行一定的动作(调用回调函数)。
* 发起函数(或叫注册函数)`A`
* 回调函数`callbackFn`

#### 4.消息队列和事件循环
* > 工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。  
* > **消息队列**：消息队列是一个先进先出的队列，它里面存放着各种消息。
* > **事件循环**：事件循环是指主线程重复从消息队列中取消息、执行的过程。
* > **消息**：注册异步任务时添加的回调函数。
* > 消息队列中的每条消息实际上都对应着一个事件

> **主线程只会做一件事情，就是从消息队列里面取消息、执行消息，再取消息、再执行。** 当消息队列为空时，就会等待直到消息队列变成非空。而且主线程只有在将当前的消息执行完成后，才会去取下一个消息。这种机制就叫做 **事件循环机制** ，取一个消息并执行的过程叫做一次循环。

![](https://segmentfault.com/img/bVxLvF)

#### 5.异步与事件
