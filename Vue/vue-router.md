## 参考
- [可能比文档还详细--VueRouter完全指北](https://juejin.cn/post/6844903665388486664)
- [vue router 官方文档](https://router.vuejs.org/zh)

## 一、概念
- 适用于vue单页面应用
- 本质上是**建立并管理**url和对应组件之间的映射关系

### 1.1 一些定义
- router:一般指的就是路由实例.如$router.
- routes:指router路由实例的routes API.用来配置多个route路由对象.
- route:指的就是路由对象.例如$route指的就是当前路由对象.

### 1.2 动态路由
> 动态路由匹配本质上就是通过url进行传参
> 谁先定义的,谁的优先级就最高

- `$route.path`
    * 类型: string
    * 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
- `$route.params`
    * 类型: Object
    * 一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
- `$route.query`
    * 类型: Object
    * 一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。
- `$route.name`
    * 当前路由的名称，如果有的话。这里建议最好给每个路由对象命名,方便以后编程式导航.不过记住name必须唯一!
- `$route.hash`
    * 类型: string
    * 当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。
- `$route.fullPath`
    * 类型: string
    * 完成解析后的 URL，包含查询参数和 hash 的完整路径。
- `$route.matched`
    * 类型: Array<RouteRecord>
    * 一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。	
- `$route.redirectedFrom`
    * 如果存在重定向，即为重定向来源的路由的名字。

1. params传参
```javascript
routes:[{
	//动态路径参数,以冒号开头
	path:'/user/:id',
	component:User
}]
```
2. query传参
```html
<router-link to="/user?id=foo">foo</router-link>
<!-- this.$route.query.id值为'foo' -->
```

## 二、vue-router的两种模式
### 2.1 Hash模式（默认）
- url变化时,浏览器是不会重新加载的
- Hash(即#)是url的锚点,代表的是网页中的一个位置,仅仅改变#后面部分
- hash发生变化时,url都会被浏览器记录下来,这样你就可以使用浏览器的后退了
  
### 2.2 History模式
- History模式就是通过pushState()方法来对浏览器的浏览记录进行修改,来达到不用请求后端来渲染的效果

## 三、配置路由实例 router.js文件
```javascript
//第一步:引入必要的文件
import Vue from 'vue';//加载全局组件时,都需要引入Vue
import Router from 'vue-router';//引入vue-router
//引入在路由中需要用到的组件
import User from '@/components/user/User' //这里省略了.vue


//第二步:加载Router
Vue.use(Router);//加载全局组件Router

//第三步:配置路由实例
export default new Router({
	//mode:'history', //路由模式:默认为hash,如果改为history,则需要后端进行配合
	//base:'/',//基路径:默认值为'/'.如果整个单页应用在/app/下,base就应该设为'/app/'.一般可以写成__dirname,在webpack中配置.
	routes:[{
		path: '/user', 
		name: 'user', //给路由命名,设置的name要唯一!
		component: User//就是第一步import的组件
		},{
			//路由懒加载:单页面应用,首页时,加载内容时间过长.运用懒加载对页面组件进行划分,减少首页加载时间
			path:'/Page',
			name:'Page',
			component:resolve => require(['@/components/Page'],resolve)
			//此时component则不需要在第一步import
		}]
})
```


## 四、其他
### 4.1 路径切换时,初始化操作
```javascript
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
	// react to route changes...
	// don't forget to call next()
  }
}
```

### 4.2 编程式导航
>** path和params是不能同时生效的**!,否则params会被忽略掉.所以使用对象写法进行params传参时,要么就是path加冒号:,要么就是像上例中的'命名路由'.通过name和params进行传参.然而query却并不受影响,有没有path都可以进行传参.

```javascript
//字符串
this.$router.push('home')

//对象
this.$ruter.push({path:'home'})

//命名路由
this.$router.push({name:'user',params:{userId:2333}})

//带查询参数,变成/register?plan=private
this.$router.push({path:'register',query:{plan:'private'}})
```
> query参数可以正常显示在url地址栏中.刷新页面后也不会丢失,params参数就会丢失
```html
<!--此时通过name匹配到路由对象shotCat.-->	
<router-link :to="{ name:'shotCat',params:{paramId:'hello'},query:{queryId:'world'}}">helloWorld</router-link>  

<!--此时通过path匹配到路由对象shotCat.但是!!!!!此时`paramId`并不能添加到`$route.params`里,只有`queryId`成功添加到`$route.query`-->
<router-link :to="{ path:'/shotCat',params:{paramId:'hello'},query:{queryId:'world'}}">helloWorld</router-link>  
```

