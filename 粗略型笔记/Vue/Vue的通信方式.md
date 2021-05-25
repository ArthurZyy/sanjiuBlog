## 参考
- [vue中8种组件通信方式, 值得收藏!](https://juejin.cn/post/6844903887162310669)

## vue组件中关系说明:
![](https://user-gold-cdn.xitu.io/2019/7/11/16bde5b613aac4ee?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
如上图所示, A与B、A与C、B与D、C与E组件之间是父子关系； B与C之间是兄弟关系；A与D、A与E之间是隔代关系； D与E是堂兄关系（非直系亲属） 针对以上关系我们归类为：

- 父子组件之间通信
- 非父子组件之间通信(兄弟组件、隔代关系组件等)

## 一、props / $emit
> 父组件通过props的方式向子组件传递数据，而通过$emit 子组件可以向父组件通信。 
> 总结: prop 只可以从上一级组件传递到下一级组件（父子组件），即所谓的单向数据流。而且 **prop 只读**，不可被修改，所有修改都会失效并警告。
```javascript
// 父组件中
<template>
  <div class="section">
    <com-article :articles="articleList" @onEmitIndex="onEmitIndex"></com-article>
    <p>{{currentIndex}}</p>
  </div>
</template>

<script>
import comArticle from './test/article.vue'
export default {
  name: 'HelloWorld',
  components: { comArticle },
  data() {
    return {
      currentIndex: -1,
      articleList: ['红楼梦', '西游记', '三国演义']
    }
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx
    }
  }
}
</script>
```
```javascript
<template>
  <div>
    <div v-for="(item, index) in articles" :key="index" @click="emitIndex(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {
    emitIndex(index) {
      this.$emit('onEmitIndex', index)
    }
  }
}
</script>
```
## 二、 $children / $parent
- 父组件中: `this.$children[0].messageA`
- 子组件中: `this.$parent.msg`
> 要注意边界情况，如在#app上拿$parent得到的是new Vue()的实例，在这实例上再拿$parent得到的是undefined，而在最底层的子组件拿$children是个空数组。也要注意得到$parent和$children的值不一样，$children 的值是数组，而$parent是个对象


## 三、provide/ inject
> provide/ inject 是vue2.2.0新增的api, 简单来说就是父组件中通过provide来提供变量, 然后再子组件中通过inject来注入变量。
```javascript
// A.vue

<template>
  <div>
	<comB></comB>
  </div>
</template>

<script>
  import comB from '../components/test/comB.vue'
  export default {
    name: "A",
    provide: {
      for: "demo"
    },
    components:{
      comB
    }
  }
</script>

```
```javascript
// B.vue

<template>
  <div>
    {{demo}}
    <comC></comC>
  </div>
</template>

<script>
  import comC from '../components/test/comC.vue'
  export default {
    name: "B",
    inject: ['for'],
    data() {
      return {
        demo: this.for
      }
    },
    components: {
      comC
    }
  }
</script>

```
```javascript
// C.vue
<template>
  <div>
    {{demo}}
  </div>
</template>

<script>
  export default {
    name: "C",
    inject: ['for'],
    data() {
      return {
        demo: this.for
      }
    }
  }
</script>

```


## 四、ref / refs
> ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据
```javascript
// 子组件 A.vue

export default {
  data () {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}

```
```javascript
// 父组件 app.vue

<template>
  <component-a ref="comA"></component-a>
</template>
<script>
  export default {
    mounted () {
      const comA = this.$refs.comA;
      console.log(comA.name);  // Vue.js
      comA.sayHello();  // hello
    }
  }
</script>

```
## 五、eventBus
> eventBus 又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。

1. 初始化
> 首先需要创建一个事件总线并将其导出, 以便其他模块可以使用或者监听它.

```javascript
// event-bus.js

import Vue from 'vue'
export const EventBus = new Vue()
```

2. 发送事件
> 假设你有两个组件: additionNum 和 showNum, 这两个组件可以是兄弟组件也可以是父子组件；这里我们以兄弟组件为例:  

```javascript
<template>
  <div>
    <show-num-com></show-num-com>
    <addition-num-com></addition-num-com>
  </div>
</template>

<script>
import showNumCom from './showNum.vue'
import additionNumCom from './additionNum.vue'
export default {
  components: { showNumCom, additionNumCom }
}
</script>
```

```javascript
// addtionNum.vue 中发送事件

<template>
  <div>
    <button @click="additionHandle">+加法器</button>    
  </div>
</template>

<script>
import {EventBus} from './event-bus.js'
console.log(EventBus)
export default {
  data(){
    return{
      num:1
    }
  },

  methods:{
    additionHandle(){
      EventBus.$emit('addition', {
        num:this.num++
      })
    }
  }
}
</script>
```
3. 接收事件
```javascript
// showNum.vue 中接收事件

<template>
  <div>计算和: {{count}}</div>
</template>

<script>
import { EventBus } from './event-bus.js'
export default {
  data() {
    return {
      count: 0
    }
  },

  mounted() {
    EventBus.$on('addition', param => {
      this.count = this.count + param.num;
    })
  }
}
</script>

```

4. 移除事件监听者
```javascript
import { eventBus } from 'event-bus.js'
EventBus.$off('addition', {})
```

## 六、Vuex
### 1. Vuex介绍
> Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.  
> Vuex 解决了**多个视图依赖于同一状态**和**来自不同视图的行为需要变更同一状态**的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上

### 2. Vuex各个模块
1. `state`：用于数据的存储，是store中的唯一数据源
2. `getters`：如vue中的计算属性一样，基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算
3. `mutations`：类似函数，改变state数据的唯一途径，且不能用于处理异步事件
4. `actions`：类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作
5. `modules`：类似于命名空间，用于项目中将各个模块的状态分开定义和操作，便于维护

> 具体使用，新开一页写

## 七、localStorage / sessionStorage
-  通过`window.localStorage.getItem(key)`获取数据 
-  通过`window.localStorage.setItem(key,value)`存储数据
> 注意用JSON.parse() / JSON.stringify() 做数据格式转换 localStorage / sessionStorage可以结合vuex, 实现数据的持久保存,同时使用vuex解决数据和状态混乱问题.

# 八 $attrs与 $listeners
```javascript
// 待了解
```

## 总结
常见使用场景可以分为三类:

- 父子组件通信: `props`; `$parent / $children`; `provide / inject` ; `ref` ;  `$attrs / $listeners`
- 兄弟组件通信: `eventBus` ; 	`vuex`
- 跨级通信:  `eventBus`；`Vuex`；`provide / inject` 、`$attrs / $listeners`