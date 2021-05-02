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