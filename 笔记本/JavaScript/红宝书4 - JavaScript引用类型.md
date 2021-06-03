# 红宝书4 - JavaScript引用类型

## 基本引用类型

### Date

### RegExp

- 实例方法

	- exec()

- 匹配模式

	- g：全局模式
	- i：不区分大小写
	- m：多行模式
	- y：只查找从 lastIndex 开始及之后的字符串
	- u：启用 Unicode 匹配。
	- s：元字符.匹配任何字符（包括\n 或\r）

- 实例属性

	-  global：布尔值，表示是否设置了 g 标记。
	-  ignoreCase：布尔值，表示是否设置了 i 标记。
	-  unicode：布尔值，表示是否设置了 u 标记。
	-  sticky：布尔值，表示是否设置了 y 标记。
	-  lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始。
	-  multiline：布尔值，表示是否设置了 m 标记。
	-  dotAll：布尔值，表示是否设置了 s 标记。
	-  source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。
	-  flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式形式返回（没有前后斜杠）

- 构造函数属性

	-  input 属性中包含原始的字符串。
	-  leftConext 属性包含原始字符串中"short"之前的内容，rightContext 属性包含"short"之后的内容。
	-  lastMatch 属性包含匹配整个正则表达式的上一个字符串，即"short"。
	-  lastParen 属性包含捕获组的上一次匹配，即"s"。

### 原始值包装类型

- Boolean
- Number

	- toFixed() 四舍五入的小数
	- toExponential() 科学计数法
	- toPrecision() 根据数值和精度来决定调用 toFixed()还是 toExponential()
	- Number.isInteger()方法，用于辨别一个数值是否保存为整数

- String

	- JavaScript 字符

		- charAt()方法返回给定索引位置的字符
		- charCodeAt()方法可以查看指定码元的字符编码
		- fromCharCode()方法用于根据给定的 UTF-16 码元创建字符串中的字符

	-  normalize()方法

		- 种规范化形式：NFD（Normalization Form D）、NFC（Normalization Form C）、
NFKD（Normalization Form KD）和 NFKC（Normalization Form KC）

	- 字符串操作方法

		- concat()
		- slice()
		- substr()
		- substring()

	- 字符串位置方法

		- indexOf()
		- lastIndexOf() 区别在于从后往前找

	- 字符串包含方法

		- startsWith()
		- endsWith()
		- includes()

	- trim()方法
	- repeat()方法
	- padStart()和 padEnd()方法

		- 填充

	- 字符串迭代与解构

		- let stringIterator = message[Symbol.iterator](); 

	- 字符串大小写转换

		- toLowerCase()
		- toLocaleLowerCase()
		- toUpperCase()
		- toLocaleUpperCase()

	- 字符串模式匹配方法

		- match()
		- search()
		- replace()
		- split()

	- localeCompare()方法
	- HTML 方法

### 单例内置对象

- Object
- Array
- String
- Global

	- isNaN()、isFinite()、parseInt()和 parseFloat()，实际上都是 Global 对象的方法
	- URL 编码方法

		- ecnodeURI()方法用于对整个 URI 进行编码
		- encodeURIComponent()方法用于编码 URI 中单独的组件
		- decodeURI()
		- decodeURIComponent()

	- eval()
	- Global 对象属性

		- Date Date 的构造函数
		- RegExp RegExp 的构造函数
		- 数据类型的构造函数（Array、Object、Number等）
		- 错误的构造函数（Error、ReferenceError、SyntaxError、TypeError等）

	- window 对象

		- 浏览器将 window 对象实现为 Global对象的代理

- Math

	- Math 对象属性

		- Math.E 自然对数的基数 e 的值
		- Math.LN10 10 为底的自然对数
		- Math.LN2 2 为底的自然对数
		- Math.LOG2E 以 2 为底 e 的对数
		- Math.LOG10E 以 10 为底 e 的对数
		- Math.PI π 的值
		- Math.SQRT1_2 1/2 的平方根
		- Math.SQRT2 2 的平方根

	- min()和 max()方法
	- 舍入方法

		- Math.ceil()方法始终向上舍入为最接近的整数。
		- Math.floor()方法始终向下舍入为最接近的整数。
		- Math.round()方法执行四舍五入。
		- Math.fround()方法返回数值最接近的单精度（32 位）浮点值表示。

	- Math.random()方法返回一个 0~1 范围内的随机数，其中包含 0 但不包含 1。
	- 其他方法

		- Math.abs(x) 返回 x 的绝对值
		- Math.exp(x) 返回 Math.E 的 x 次幂
		- Math.expm1(x) 等于 Math.exp(x) - 1
		- Math.log(x) 返回 x 的自然对数
		- Math.log1p(x) 等于 1 + Math.log(x)
		- Math.pow(x, power) 返回 x 的 power 次幂
		- Math.hypot(...nums) 返回 nums 中每个数平方和的平方根
		- Math.clz32(x) 返回 32 位整数 x 的前置零的数量
		- Math.sign(x) 返回表示 x 符号的 1、0、-0 或-1
		- Math.trunc(x) 返回 x 的整数部分，删除所有小数
		- Math.sqrt(x) 返回 x 的平方根
		- Math.cbrt(x) 返回 x 的立方根
		- Math.acos(x) 返回 x 的反余弦
		- Math.acosh(x) 返回 x 的反双曲余弦
		- Math.asin(x) 返回 x 的反正弦
		- Math.asinh(x) 返回 x 的反双曲正弦
		- Math.atan(x) 返回 x 的反正切
		- Math.atanh(x) 返回 x 的反双曲正切
		- Math.atan2(y, x) 返回 y/x 的反正切
		- Math.cos(x) 返回 x 的余弦
		- Math.sin(x) 返回 x 的正弦
		- Math.tan(x) 返回 x 的正切

## 集合引用类型

### Object

### Array

- 创建数组

	- let colors = new Array(3); // 创建一个包含 3 个元素的数组
	- let names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
	- let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
	- from()用于将类数组结构转换为数组实例

		- Array.from()还接收第二个可选的映射函数参数
		- const a2 = Array.from(a1, x => x**2);

	- of()用于将一组参数转换为数组实例

		- console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]

- 数组索引

	- 数组 length 属性的独特之处在于，它不是只读的。通过修改 length 属性，可以从数组末尾删除或添加元素

- 检测数组

	- Array.isArray()

- 迭代器方法

	- keys()返回数组索引的迭代器
	- values()返回数组元素的迭代器
	- entries()返回索引/值对的迭代器

- 复制和填充方法

	- 使用 fill()方法可以向一个已有的数组中插入全部或部分相同的值
	- copyWithin()会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置

- 转换方法

	- valueOf()返回的还是数组本身
	- toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串
	- toLocaleString()方法时，会得到一个逗号分隔的数组值的字符串。
	- join()方法接收一个参数，即字符串分隔符，返回包含所有项的字符串

- 栈方法

	- push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度
	- pop()方法则用于删除数组的最后一项，同时减少数组的length 值，返回被删除的项

- 队列方法

	- shift()，它会删除数组的第一项并返回它，然后数组长度减 1
	- unshift()就是执行跟 shift()相反的操作：在数组开头添加任意多个值，然后返回新的数组长度

- 排序方法

	- reverse()方法就是将数组元素反向排列
	- sort()会按照升序重新排列数组元素

		- sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面

- 操作方法

	- concat()方法可以在现有数组全部元素基础上创建一个新数组
	- slice()用于创建一个包含原有数组中一个或多个元素的新数组。
	- splice()

		- 删除

			- splice(0, 2)会删除前两个元素。

		- 插入

			- splice(2, 0, "red", "green")会从数组位置 2 开始插入字符串"red"和"green"

		- 替换

			- splice(2, 1, "red", "green")会在位置 2 删除一个元素，然后从该位置开始向数组中插入"red"和"green"

- 搜索和位置方法

	- 严格相等搜索

		- indexOf()、lastIndexOf()和 includes()

	- 和按断言函数搜索

		- find()返回第一个匹配的元素
		- findIndex()返回第一个匹配元素的索引

- 迭代方法

	- every()：每一项都为true则返回true
	- some()：其中一项true则返回true
	- filter()：过滤
	- forEach()
	- map()：返回结果组成的数组

- 归并方法

	- reduce()

		- let sum = values.reduce((prev, cur, index, array) => prev + cur);
		- 数接收 4 个参数：上一个归并值、当前项、当前项的索引和数组本身。
		- 这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数
		- 如果没有给这两个方法传入可选的第二个参数（作为归并起点值），则第一次迭代将从数组的第二项开始

	- reduceRight() 逆向

### 定型数组

### Map

- const m = new Map(); 

	- 如果想在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数组。

- 初始化之后，可以使用 set()方法再添加键/值对。另外，可以使用 get()和 has()进行查询，可
以通过 size 属性获取映射中的键/值对的数量，还可以使用 delete()和 clear()删除值
- Map 可以使用任何 JavaScript 数据类型作为
键
- Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作
- 通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器
- keys()和 values()分别返回以插入顺序生成键和值的迭代器
- 键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。
- 与Object对比

	- Map内存占比高
	- Map插入更快
	- 如果代码涉及大量查找操作，那么某些情况下可能选择 Object 更好一些
	- 如果代码涉及大量删除操作，那么毫无疑问应该选择 Map。

### WeakMap 弱映射

- const wm = new WeakMap(); 
- 键只能是 Object 或者继承自 Object 的类型
- 使用 set()再添加键/值对，可以使用 get()和 has()查询，还可以使用 delete()删除
- 不可迭代键

### Set

- const m = new Set(); 

	- 如果想在创建的同时初始化实例，则可以给 Set 构造函数传入一个可迭代对象

- 使用 add()增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete()和 clear()删除元素
- 以通过 values()方法及其别名方法 keys()（或者 Symbol.iterator 属性，它引用 values()）取得这个迭代器

### WeakSet 弱集合

- WeakSet 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱集合”中值的方式
- 不可迭代值

### 迭代与扩展操作

- 原生集合类型定义了默认迭代器

	-  Array
	-  所有定型数组
	-  Map
	-  Set

## 迭代器和生成器

### 迭代器

- 迭代器模式

	- 可迭代协议

		- 支持迭代的自我识别能力
		- 创建实现Iterator 接口的对象的能力

	- 检查是否存在默认迭代器属性

		- console.log(arr[Symbol.iterator]); 

	- 实现了 Iterable 接口

		-  字符串
		-  数组
		-  映射
		-  集合
		-  arguments 对象
		-  NodeList 等 DOM 集合类型

	- 接收可迭代对象的原生语言特性

		-  for-of 循环
		-  数组解构
		-  扩展操作符
		-  Array.from()
		-  创建集合
		-  创建映射
		-  Promise.all()接收由期约组成的可迭代对象
		-  Promise.race()接收由期约组成的可迭代对象
		-  yield*操作符，在生成器中使用

- 迭代器协议

	- let arr = ['foo'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: true, value: undefined } 

- 自定义迭代器

	- 把计数器变量放到闭包里，然后通过闭包返回迭代器

- 提前终止迭代器

### 生成器

- 在一个函数块内暂停和恢复代码执行
- 生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。
- 调用生成器函数会产生一个生成器对象。生成器对象一开始处于暂停执行（suspended）的状态。
- 生成器对象也实现了 Iterator 接口，因此具有 next()方法。调用这个方法会让生成器
开始或恢复执行。
- 通过 yield 中断执行
- yield 关键字必须直接位于生成器函数定义中
- 通过 yield 中断执行

	- 生成器对象作为可迭代对象

		- function* generatorFn() {
 yield 1;
 yield 2;
 yield 3;
} 

	- 使用 yield 实现输入和输出
	- 产生可迭代对象

		- function* generatorFn() {
 yield* [1, 2, 3];
} 

	- 使用 yield*实现递归算法

- 生成器作为默认迭代器

	- * [Symbol.iterator]() {
 yield* this.values;
 } 


- 提前终止生成器

## 对象、类与面向对象编程

### 对象

- 基本定义

	- 一组属性的无序集合

- 属性的类型

	- 数据属性

		- [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
性，以及是否可以把它改为访问器属性
		- [[Enumerable]]：表示属性是否可以通过 for-in 循环返回
		- [[Writable]]：表示属性的值是否可以被修改
		- [[Value]]：包含属性实际的值

	- 访问器属性

		- [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为数据属性。
		- [[Enumerable]]：表示属性是否可以通过 for-in 循环返回
		- [[Get]]：获取函数，在读取属性时调用。
		- [[Set]]：设置函数，在写入属性时调用。

- 其他

	- 修改属性的默认特性

		- let person = {};
Object.defineProperty(person, "name", {
 writable: false,
 value: "Nicholas"
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas" 

	- 访问器属性是不能直接定义的，必须使用 Object.defineProperty()。
	- 自定义属性，数据属性的configurable、enumerable 和 writable 特性值都是 false

- 读取属性的特性

	- Object.getOwnPropertyDescriptor()方法可以取得指定属性的属性描述符。
	- Object.getOwnPropertyDescriptors()静态方法。这个方法实际上
会在每个自有属性上调用 Object.getOwnPropertyDescriptor()并在一个新对象中返回它们。

- 合并对象

	- Object.assign()

		- 可枚举（Object.propertyIsEnumerable()返回 true）
		- 自有（Object.hasOwnProperty()返回 true）属性

	- 多个源对象都有相同的属性，则使用最后一个复制的值
	- Object.assign()没有“回滚”之前
赋值的概念，因此它是一个尽力而为、可能只会完成部分复制的方法。

- 对象标识及相等判定

	- console.log(Object.is(+0, 0)); // true

- 增强的对象语法

	- 1. 属性值简写
	- 2. 可计算属性
	- 3. 简写方法名

- 对象解构

	- 1. 嵌套解构
	- 2. 部分解构
	- 3. 参数上下文匹配

- 属性和方法

	- constructor：用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object()函数。
	- hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号。
	- isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型。（第 8 章将详细介绍原型。）
	- propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用（本章稍后讨论的）for-in 语句枚举。与 hasOwnProperty()一样，属性名必须是字符串。
	- toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
	- toString()：返回对象的字符串表示。
	- valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。

### 创建对象

- 工厂模式
- 构造函数模式

	- new 操作符

		- 内存中创建一个新对象
		- 将对象内部的[[Prototype]]特性赋值为构造函数的prototype属性
		- this指向新对象
		- 执行构造函数内部的代码
		- 如果构造函数返回非空对象，则返回该对象，否则返回新对象

- 原型模式
- 对象迭代

	- 1. 其他原型语法

		- function Person() { }
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};
// 恢复 constructor 属性
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});

	- 2. 原型的动态性

		- 即使实例在修改原型之前已经存在，任何时候对原型对象所做的修改也会在实例上反映出来
		- 重写整个原型会切断最初原型与构造函数的联系，但实例引用的仍然是最初的原型

	- 3. 原生对象原型

### 继承

- 实现继承是 ECMAScript 唯一支持的继承方式，而这主要是通过原型链实现的
- 具体总结还是去看网上的基础方式N解吧

### 类

- 构成

	- 构造函数方法

		- constructor() {} 

	- 实例方法

		- sayName() { }

	- 获取函数

		- get myBaz() {}

	- 设置函数

		- set myBaz() {}

	- 静态方法

		- static myQux() {}
		- 这些方法通常用于执行不特定于实例的操作，也不要求存在类的实例

- 方法定义的位置

	- class Person {
    constructor() {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log('instance', this);
    }
    // 定义在类的原型对象上
    locate() {
        console.log('prototype', this);
    }
    // 定义在类本身上
    static locate() {
        console.log('class', this);
    }
}
let p = new Person();
p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ... }
Person.locate(); // class, class Person {} 

- 可以把方法定义在类构造函数中或者类块中，但不能在类块中给原型添加原始值或对象作为成员数据
- 类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键

	- const symbolKey = Symbol('symbolKey');
class Person {
    stringKey() {
        console.log('invoked stringKey');
    }
    [symbolKey]() {
        console.log('invoked symbolKey');
    }
    ['computed' + 'Key']() {
        console.log('invoked computedKey');
    }
}
let p = new Person();
p.stringKey(); // invoked stringKey
p[symbolKey](); // invoked symbolKey
p.computedKey(); // invoked computedKey 

### 面向对象编程

## 规范

### 为了将某个特性标识为内部特性，规范会用
两个中括号把特性的名称括起来，比如[[Enumerable]]

### year_中的下划线常用来表示该
属性并不希望在对象方法的外部被访问。

*XMind - Trial Version*