//引入 模块
const http = require('http')




let bindRender = require('./bindRender')
let router = require('./router')
//创建服务器对象
const app = http.createServer()

//监听端口
app.listen(3001, () => {
    console.log('server is running at http://127.0.0.1:3001');
})


//注册监听请求的事件
// req,res这两个对象在服务端和客户端通讯的时候非常的重要
app.on('request', (req, res) => {

    //调用bindRender方法
    bindRender(req,res)
    //调用路由
    router(req,res)
});





