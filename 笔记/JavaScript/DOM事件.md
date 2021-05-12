

### DOM事件的级别
* DOM0的写法
```javascript
    element.onclick = function(){

    }
```
* DOM2的写法
```javascript
    element.addEventListener('click', function(){

    }, false)
```
>【重要】上面的第三参数中，true表示事件在捕获阶段触发，false表示事件在冒泡阶段触发（默认）。如果不写，则默认为false。

* DOM3的写法
```javascript
    element.addEventListener('keyup', function(){

    }, false)
```
### DOM事件模型、DOM事件流
1. 捕获：从window对象到目标对象
2. 目标阶段
3. 冒泡：从目标对象到window对象
### DOM事件捕获的具体流程
* window
* document
* html
* body
* 父元素
* 子元素
### 常见api
* 阻止默认事件：`event.preventDefault();`
* 阻止冒泡
    * w3c：`event.stopPropagation();`
    * ie10以下：`event.cancelBubble = true;`
    * 兼容代码
    ```javascript
    box3.onclick = function (event) {

        alert("child");

        //阻止冒泡
        event = event || window.event;

        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
    ```
    * 设置事件优先级：`event.stopImmediatePropagation();`
    * 当前所绑定的事件对象：`event.currentTarget` [父元素]
    * 当前被点击的元素：`event.target` [子元素]

### 自定义事件
```javascript
var myEvent = new Event('clickTest');
    element.addEventListener('clickTest', function () {
        console.log('smyhvae');
    });

	//元素注册事件
    element.dispatchEvent(myEvent); //注意，参数是写事件对象 myEvent，不是写 事件名 clickTest
```
