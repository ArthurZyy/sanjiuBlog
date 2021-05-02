# 必备知识 
## BOX：CSS布局的基本单位
### box类型
* **block-level box**: display 属性为 **block**, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；
* **inline-level box**: display 属性为 **inline**, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；

# 定义
`BFC`全称为**块级格式化上下文**(BlockFormattingContext)。
>理解为独立的行政单位。
容器里的box的布局和容器外的box布局无关。

# 触发BFC的条件
* **根元素**
* **浮动元素**float属性不为none
* **绝对定位元素**position为absolute或fixed
* **display**为inline-block, table-cell, table-caption, flex, inline-flex
* **overflow**不为visible（常用）

# BFC的约束规则
* 内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）
* 处于同一个BFC中的元素相互影响，可能会发生外边距重叠
 > 在p外面包裹一层容器，并触发该容器生成一个BFC。那么两个P便不属于同一个BFC，就不会发生margin重叠了。
* 每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
* 计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算
* 浮动盒区域不叠加到BFC上

# 参考
[BFC原理详解](https://segmentfault.com/a/1190000006740129)