## 参考
- [vue 路由 按需 keep-alive](https://juejin.cn/post/6844903846901186574)
- [vue.js - keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)

## 示例
![](https://user-gold-cdn.xitu.io/2019/5/19/16acfee7031de2c7?imageslim)

## 定义
### keep-alive
> keep-alive是Vue提供的一个抽象组件，主要用于`保留组件状态`或`避免重新渲染`。
* 用法
  * `<keep-alive> `包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
  * 在路由中设置keepAlive`meta: {keepAlive: true}`

## 思考
