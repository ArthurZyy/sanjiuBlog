`call()`、`apply()`、`bind()`都是函数对象的一个方法，作用是改变函数的调用对象。

### 一、方法的定义

* call：`fun.call(thisArg, arg1, arg2)`

* apply：`fun.apply(thisArg, [arg1, arg2])`

* bind：`fun.apply(thisArg, arg1, arg2)()`


### 二、call、apply、bind的区别

1. `call`的`arg`传参需一个一个传，`apply`则直接传一个数组
2. `call`和`apply`直接执行函数，而`bind`需要再一次调用