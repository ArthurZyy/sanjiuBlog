const http = require('http');
let server = http.createServer((req, res) => {
  // ....回调函数，输出hello world
  res.end('hello world!')
})
server.listen(3000)