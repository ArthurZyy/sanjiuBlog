# JavaScript 基础2

## 基本引用类型

### Date

### RegExp

- 匹配模式

	-  g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
	-  i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。
	-  m：多行模式，表示查找到一行文本末尾时会继续查找。
	-  y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。
	-  u：Unicode 模式，启用 Unicode 匹配。
	-  s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。

- 实例方法

	- exec()

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

- 思路

	- (1) 创建一个 String 类型的实例；
	- (2) 调用实例上的特定方法；
	- (3) 销毁实例。

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
		- lastIndexOf()

	- 字符串包含方法

		- startsWith()
		- endsWith()
		- includes()

	- trim()方法
	- repeat()方法
	- padStart()和 padEnd()方法
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

- 任何由 ECMAScript 实现提供、与宿主环境无关，并在 ECMAScript程序开始执行时就存在的对象
- Object
- Array
- String
- Global

	- 在全局作用域中定义的变量和函数都会变成Global 对象的属性 。
	- isNaN()、isFinite()、parseInt()和 parseFloat()，实际上都是 Global 对象的方法
	- URL 编码方法

		- ecnodeURI()方法用于对整个 URI 进行编码
		- encodeURIComponent()方法用于编码 URI 中单独的组件
		- decodeURI()
		- decodeURIComponent()

	- eval()
	- Global 对象属性

		- undefined 特殊值 undefined
		- NaN 特殊值 NaN
		- Infinity 特殊值 Infinity
		- Object Object 的构造函数
		- Array Array 的构造函数
		- Function Function 的构造函数
		- Boolean Boolean 的构造函数
		- String String 的构造函数
		- Number Number 的构造函数
		- Date Date 的构造函数
		- RegExp RegExp 的构造函数
		- Symbol Symbol 的伪构造函数
		- Error Error 的构造函数
		- EvalError EvalError 的构造函数
		- RangeError RangeError 的构造函数
		- ReferenceError ReferenceError 的构造函数
		- SyntaxError SyntaxError 的构造函数
		- TypeError TypeError 的构造函数
		- URIError URIError 的构造函数

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

- 在使用对象字面量表示法定义对象时，并不会实际调用 Object 构造函数。

### Array

- 与对象一样，在使用数组字面量表示法创建数组不会调用 Array 构造函数。
- 创建数组

	- let colors = new Array(3); // 创建一个包含 3 个元素的数组
	- let names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
	- let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
	- from()用于将类数组结构转换为数组实例

		- Array.from()还接收第二个可选的映射函数参数
		- const a2 = Array.from(a1, x => x**2);

	- of()用于将一组参数转换为数组实例

		- console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]

- 数组空位

	- ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异
	- 由于行为不一致和存在性能隐患，因此实践中要避免使用数组空位。

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

	- every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
	- filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
	- forEach()：对数组每一项都运行传入的函数，没有返回值。
	- map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
	- some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。

- 归并方法

	- reduce()方法从数组第一项开始遍历到最后一项

		- let sum = values.reduce((prev, cur, index, array) => prev + cur);
		- 数接收 4 个参数：上一个归并值、当前项、当前项的索引和数组本身。
		- 这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数
		- 如果没有给这两个方法传入可选的第二个参数（作为归并起点值），则第一次迭代将从数组的第二项开始

	- reduceRight()从最后一项开始遍历至第一项

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

## 对象、类与面向对象编程

*XMind - Trial Version*