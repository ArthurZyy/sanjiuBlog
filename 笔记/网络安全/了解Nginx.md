# 参考
[nginx在应用程序中的作用](http://www.conardli.top/blog/article/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%80%85%E5%BF%85%E5%A4%87%E7%9A%84nginx%E7%9F%A5%E8%AF%86.html)

# nginx在应用程序中的作用
1. 解决跨域
2. 请求过滤
3. 配置gzip
4. 负载均衡
5. 静态资源服务器
   
> nginx是一个高性能的HTTP和反向代理服务器，也是一个通用的TCP/UDP代理服务器。

# 正向代理与反向代理
## 代理
> 代理是**在服务器和客户端之间假设的一层服务器**，代理将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。  

![正向代理 & 反向代理](https://lsqimg-1257917459.cos-website.ap-beijing.myqcloud.com/blog/nginx2.png)

# 实践
## 1. 解决跨域
```
例如：
前端server的域名为：fe.server.com
后端服务的域名为：dev.server.com
现在我在fe.server.com对dev.server.com发起请求一定会出现跨域。

现在我们只需要启动一个nginx服务器，将server_name设置为fe.server.com,然后设置相应的location以拦截前端需要跨域的请求，最后将请求代理回dev.server.com。如下面的配置：

server {
        listen       80;
        server_name  fe.server.com;
        location / {
                proxy_pass dev.server.com;
        }
}

这样可以完美绕过浏览器的同源策略：fe.server.com访问nginx的fe.server.com属于同源访问，而nginx对服务端转发的请求不会触发浏览器的同源策略。
```
## 2. 请求过滤
## 3. 配置gzip
## 4. 负载均衡
## 5. 静态资源服务器

![]()