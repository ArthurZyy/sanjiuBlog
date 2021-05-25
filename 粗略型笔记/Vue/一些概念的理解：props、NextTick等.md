# 参考
- [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.cn/post/6844903918753808398)
- [vue-cli@2.0 的简单分析](https://juejin.cn/post/6844903622216548359)

# 响应式
1. Object.defineProperty - get ，用于 依赖收集
2. Object.defineProperty - set，用于 依赖更新
3. 每个 data 声明的属性，都拥有一个的专属依赖收集器 subs
4. 依赖收集器 subs 保存的依赖是 watcher
5. watcher 可用于 进行视图更新

# watch
1. 监听的数据改变的时，watch 如何工作
> watch 在一开始初始化的时候，会 读取 一遍 监听的数据的值，于是，此时 那个数据就收集到 watch 的 watcher 了  
> 然后 你给 watch 设置的 handler ，watch 会放入 watcher 的更新函数中  
> 当 数据改变时，通知 watch 的 watcher 进行更新，于是 你设置的 handler 就被调用了  

2. 设置 immediate 时，watch 如何工作
> 当你设置了 immediate 时，就不需要在 数据改变的时候 才会触发。  
> 而是在 初始化 watch 时，在读取了 监听的数据的值 之后，便立即调用一遍你设置的监听回调，然后传入刚读取的值  

3. 设置了 deep 时，watch 如何工作

# computed
1. computed 通过 watcher.dirty 控制是否读取缓存
2. computed 会让 【data依赖】 收集到 【依赖computed的watcher】，从而 data 变化时，会同时通知 computed 和 依赖computed的地方

# nextTick
> 设置一个回调，用于异步执行

# mixins

# methods 
1. methods 会逐个复制到 实例上
2. methods 方法会使用 bind 绑定实例作用域，确保作用域不被修改

# filter  
> fitler 其实就是从组件选项 filters 获取你设置的某个filter，并调用，然后使用你函数执行的返回值渲染

# Vue 源码的简短的总结
1. 封装了很多常用的函数！
2. 真的用了很多设计模式
3. 使用很多闭包！
4. 使用很多标志位

# 思路
1. 依赖收集
2. 依赖更新
3. Virtual DOM ，dom 节点 生成虚拟Vnode 节点
4. Compile， 模板编译
5. Diff、Patch， 节点比较更新
6. NextTick ，延迟执行回调
7. Render， 渲染机制
8. LifeCircle ，生命周期
9. Model ，双向绑定
10. Event ，事件机制

# Vue SSR
> SSR大致的意思就是vue在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的html 片段直接返回给客户端这个过程就叫做`服务端渲染`。

优点：
1. 更好的seo
2. 加载更快

缺点
1. 更多的开发限制
2. 更多的服务器负载

# 父组件可以监听到子组件的生命周期吗？
### 首先，什么是@hook
1. git的hook
> git的hook机制是 在一些常用的git命令之后去触发一些开发者自定义的脚本（这些脚本存在于本地，在.git/hooks下)。

2. 从VUE源码看hook
> Vue的各生命周期，其实就是Vue开发者规定的一些hook，和git里面规定的hook类似，你只要往hook里面填自定义内容，它就可以执行。如vue实例里的beforeCreate,created,mounted等，都是hook。  
> 简单来说，**hook其实就是一种回调函数**，只不过这种回调函数的名称已经被固定，内容不固定，且函数名称作为了一个接口被暴露出去。这样也更好了进行了抽象化：将经常变化的内容抽象暴露出去，将固定不变的代码进行封装。

3. 简单应用
```javascript
// 处理组件内定时器的步骤
<script>
  export default {
    mounted() {
      const timer = setInterval(() => { ... }, 1000);
    // $once是一个函数，可以为Vue组件实例绑定一个自定义事件，但该事件只能被触发一次，触发之后随即被移除。
      this.$once('hook:beforeDestroy', () => clearInterval(timer);)
    }
  };
</script>
```

4. 当我们需要在父组件上知道子组件什么时候被创建、挂载或者是更新，特别是当为原生js库创建组件时，可以通过使用` @hook: 前缀监听生命周期中的钩子`，并指定回调函数。