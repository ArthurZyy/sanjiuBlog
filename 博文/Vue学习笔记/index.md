> **尽量用自己的语言描述的学习笔记**

# 参考
- [Vue.js - 渐进式JavaScript 框架](https://cn.vuejs.org/)
- [最全的 Vue 面试题+详解答案](https://juejin.cn/post/6961222829979697165)

# 一、先从一些问答题入手
### 1. MVC 和 MVVM 区别
定义：
* `MVC`
  * M(模型) + V(视图) + C(控制器)
* `MVVM`
  * M(模型) + V(视图) + VM(视图模型)
  * viewModel自动将数据渲染到view
  * view变化的时候，通知viewModel更新数据

### 2. 为什么 data 是一个函数
Vue中的组件每复用一次，data以函数返回值的形式定义，这样每次都会返回一份新的data，相当于每个组件实例创建了一个私有的数据空间。

### 3. Vue 组件通讯有哪几种方式
- `props` `$emit`
- `$parent` `$children`
- `vuex`
- `eventBus`
- `provide` `inject`
- `$refs`
- `$attrs` `$listeners`

### 4. Vue 的生命周期方法有哪些 一般在哪一步发请求
基本：
- `beforeCreated`
- `created`
- `beforeMounted`
- `mounted`
- `beforeUpdated`
- `Updated`
- `beforeDestroyed`
- `destroyed`

特殊：
- `activated` keep-alive专属，组件被激活时调用
- `deactivated` keep-alive专属，组件被销毁时调用

异步请求应该在哪一步发起？
- `created`
- `beforeMounted`
- `mounted`
  
data已经创建，可以对服务器端返回的数据进行赋值。
更推荐在created周期发起请求：
- 更快的获取到数据，减少加载时间
- 有助于一致性：ssr不支持其他两个钩子函数

### 5. v-if 和 v-show 的区别
v-if: 不满足条件则不加载
v-show: 不满足条件则隐藏

适用场景：
v-if: 很少改变
v-show: 需要频繁切换


### 6. 说说 vue 内置指令
- `v-bind`
- `v-if` `v-else` `v-else`
- `v-for`
- `v-on`
- `v-html`
- `v-text`
- `v-model`
- `v-pre`
- `v-once`  只渲染一次
- `v-cloak` ？？？

### 7. 怎样理解 Vue 的单向数据流
- 数据从父组件传到子组件
- 子组件没权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改

### 8. computed 和 watch 的区别和运用的场景
- `computed`是计算属性，依赖其他数据计算值，只有当依赖的数据改变的时候，才会重新计算。适合用于模板渲染。
- `watch`是监听到值的改变，就会执行回调。适合用于检测某些值的变化，然后完成一段复杂的业务逻辑。


### 9. v-if 与 v-for 为什么不建议一起使用
v-for的优先级高于v-if，会解析两遍

### 10. Vue2.0 响应式数据的原理
1. `Object.defindProperty`劫持数据属性
2. 

### 11. Vue 如何检测数组变化
对数组的方法重写：
- push
- pop
- shift
- unshift
- splice
- reverse
- sort

### 12. vue3.0 用过吗 了解多少
- Proxy取代了Object.defindProperty

### 13. Vue3.0 和 2.0 的响应式原理区别


### 14. Vue 的父子组件生命周期钩子函数执行顺序


### 15. 虚拟 DOM 是什么 有什么优缺点
vdom是对真实dom的抽象，使用JS原生对象描述。
优点：
- 保证性能下限
- 跨平台
- 无需手动操作dom
缺点：
- 不能极致优化
- 首次渲染会比较慢

### 16. v-model 原理
`<input v-model="value"/>`
`<inpit :value="value",  @input="value = $event.target.value"/>`

### 17. v-for 为什么要加 key
key是vdom的唯一标记
可以使diff算法更准确更快速

### 18. Vue 事件绑定原理
$on $emit

### 19. vue-router 路由钩子函数是什么 执行顺序是什么
类型：
- 全局守卫
- 路由守卫
- 组件守卫

流程：
1. 触发进入其他路由
2. 组件守卫 离开 beforeRouteLeave
3. 全局守卫 前置 beforeEach
4. 组件守卫 重用 beforeRouteUpdate
5. 路由守卫 独享 beforeEnter
6. 解析异步路由组件
7. 组件守卫 进入 beforeRouteEnter
8. 全局守卫 解析 beforeResolve
9. 导航被确认
10. 全局守卫 后置 afterEach
11. 触发dom更新（mounted）
12. 执行 beforeRouteEnter 的next回调函数


### 20. vue-router 动态路由是什么 有什么问题
`{ path: "/user/:id", component: User },`

### 21. 谈一下对 vuex 的个人理解
类似数据仓库， state 存储数据， actions 可以进行异步操作，mutations修改存储数据， getter 从 store 获取数据 modle可以把store拆分成多个，并保存在同一个状态树里面

### 22. Vuex 页面刷新数据丢失怎么解决
可以把数据存放在localstore里面，使用vuex-persist插件持久化操作

### 23. Vuex 为什么要分模块并且加命名空间
由于Vuex是单一状态树，把所有的数据存储在一起，会导致应用变得非常复杂。使用module把store分割成多个命名空间，

### 24. 使用过 Vue SSR 吗？说说 SSR
服务器直接把vue渲染为成HTML
缺点：
- 无法执行beforeCreated、created以外的钩子函数
- 对一些需要其他钩子函数的拓展库，需要特殊处理
- 渲染比较消耗服务器性能

### 25. vue 中使用了哪些设计模式
1. 单例模式 - 整个程序仅有一个实例
2. 发布订阅模式 - vue事件机制
3. 观察者模式 - 响应式数据原理
4. 工厂模式 - 传入参数即可创建实例

### 26. 你都做过哪些 Vue 的性能优化
1. 避免v-for和v-if同时使用，v-for必须加key
2. 合理使用v-show和v-if
3. 图片、路由懒加载
4. 对象层级不要太深
5. 不需要响应式的数据不要放在data
6. 合理使用computed和watch
7. 使用keep-alive缓存组件
8. 第三方插件按需引入
9. 组件销毁后，把全局变量和事件销毁
10. 防抖、节流

### 27. Vue.mixin 的使用场景和原理
抽离公共业务逻辑，混入组件

### 28. nextTick 使用场景和原理
可以在下个dom更新循环之后执行延迟回调，用于获取更新后的dom

### 29. keep-alive 使用场景和原理
组件缓存，切换组件的时候，不会进行卸载，只会deactivated

### 30. Vue.set 方法原理
因为Object.defindProperty不能监听到数组的index 和 给对象增加属性的操作
原理：
1. 数组本身增加Observer（观察者）属性
2. 触发？？？

### 31. Vue.extend 作用和原理
mixin是对Vue类的options进行混入
extend是产生一个继承自Vue的子类，只会影响这个子类的实例对象

   
### 32. 写过自定义指令吗 原理是什么
   
### 33. Vue 修饰符有哪些
按类型分：
- 事件修饰符
- 鼠标修饰符
- 键盘修饰符
- v-model修饰符
- 系统修饰符

- `.stop` 阻止默认事件传播
- `.prevent` 阻止标签默认行为
- `.capture` 使用事件捕获模式
- `.self` 只在元素自身处理
- `.once` 只触发一次
- `.passive` 不想阻止默认事件
   
### 34. Vue 模板编译原理
1. 模板字符串 =》 element AST（解析器）
2. AST静态节点标记
   
### 35. 生命周期钩子是如何实现的
   
### 36. 函数式组件使用场景和原理
   
### 37. 能说下 vue-router 中常用的路由模式实现原理吗

#### hash
   
### 38. diff 算法了解吗
