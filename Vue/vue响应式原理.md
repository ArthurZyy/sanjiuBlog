# 什么是响应式
数据发生变化后，会重新对页面渲染，这就是Vue响应式

* 侦测数据的变化
* 收集视图依赖了哪些数据
* 数据变化时，自动“通知”需要更新的视图部分，并进行更新

对应专业俗语分别是：
* 数据劫持 / 数据代理
* 依赖收集
* 发布订阅模式

# 如何侦测数据的变化
* Object.defineProperty
* ES6的Proxy



# 参考
[深入浅出Vue响应式原理](https://segmentfault.com/a/1190000019700618)  
[【Vue原理】响应式原理 - 白话版](https://segmentfault.com/a/1190000019598656?utm_source=sf-similar-article)