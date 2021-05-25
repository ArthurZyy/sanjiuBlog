## 参考
- [Vuex官方文档](https://vuex.vuejs.org/zh/)

## 概念
> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

## 为什么要使用Vuex
- 多个组件依赖于同一状态时。
- 来自不同组件的行为需要变更同一状态。

## store 模式
> 如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式 (opens new window)就足够您所需了。
```javascript
var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
```

## 核心概念
### State
- store 中的状态是响应式
### Getters
### Mutation
- `store.commit('increment', 10)`
- 使用常量替代 Mutation 事件类型
- Mutation 必须是同步函数
- 使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
### Action
- `store.dispatch('increment')`
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。
### Module
```javascript
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

const moduleA = {
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```
#### 命名空间
```javascript
modules: {
  foo: {
    namespaced: true,

    getters: {
      // 在这个模块的 getter 中，`getters` 被局部化了
      // 你可以使用 getter 的第四个参数来调用 `rootGetters`
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },

    actions: {
      // 在这个模块中， dispatch 和 commit 也被局部化了
      // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}
```

