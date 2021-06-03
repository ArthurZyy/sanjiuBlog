# JavaScript - 其他处理

## 错误处理与调试 

### try/catch 语句

### throw 操作符

### 错误类型

- Error
- InternalError

	- JavaScript引擎抛出异常

- EvalError
- RangeError

	- 数值越界

- ReferenceError

	- 找不到对象

- SyntaxError

	- eval()语法报错

- TypeError

	- 变量不是预期类型、访问不存在

- URLError

	- 格式错误的url

### 调试技术

## XML

## JSON

### stringify()和 parse()

## 网络请求与远程资源 

### XHR 

- let xhr = new XMLHttpRequest(); 
- 同源策略

### fetch

- 基于promise，更直观

### websocket

- 双向通道
- 更快的发送小数据块

## 客户端存储

### cookie

- 浏览器限制每个域的cookie数量
- 组成

	- 名称
	- 值
	- 域
	- 路径
	- 过期时间
	- 安全标志

- example

	- Set-Cookie: name=value; domain=.wrox.com; secure

### web storage

- localstorage
- sessionstorage

### IndexedDB

- 异步请求
- 对象存储式数据库

## 模块

### IIFE

- 匿名闭包

### CommonJS

- 一次性加载到内存

### AMD

- 面向客户端

## 工作线程

*XMind - Trial Version*