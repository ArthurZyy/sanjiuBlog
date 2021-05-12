### 盒模型
* `content`、`border`、`padding`、`margin`
* 标准盒模型 
    * `width = content`
    * `box-sizing: content-box;`
* IE盒模型 
    * `width = content + border + padding`
    * `box-sizing: border-box;`
* 边距重叠：**标准文档流中，竖直方向的margin不叠加，只取较大的值作为margin**

### BFC（边距重叠解决方案）
#### 如何生成BFC
* 方法1：`overflow`: 不为`visible`，可以让属性是 `hidden`、`auto`。【最常用】
* 方法2：浮动中：`float`的属性值不为`none`。意思是，只要设置了浮动，当前元素就创建了BFC。
* 方法3：定位中：只要`posiiton`的值不是 `static`或者是`relative`即可，可以是`absolute`或`fixed`，也就生成了一个BFC。
* 方法4：`display`为`inline-block`, `table-cell`, `table-caption`, `flex`, `inline-flex`