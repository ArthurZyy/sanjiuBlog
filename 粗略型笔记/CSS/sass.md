### 1. 变量
```css
$error-color: red;
.class-a{
    color: $error-color;
}
```
### 2. 导入文件 `@import ""`
### 3. 样式嵌套
```css
.class-a{
    color: red;
    &:hover{
        color: blue;
    }
}
```
### 4. 混入样式
```css
@mixin box-border($border-color: #ccc){
    border: 1px solid $border-color;
}
.class-a{
    @include box-border(red);
}
```
### 5. 样式继承
```css
@mixin box-border($border-color: #ccc){
    border: 1px solid $border-color;
}
.class-b{
    @extend box-border
}
```