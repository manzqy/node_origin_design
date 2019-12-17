//路由模块只负责路由的分发，不处理具体的业务
const fs = require('fs')
const urlModel = require('url')
const path = require('path')

// 引入控制器模块
let Ctrl = require('./controller')
//封装一个路由方法
function router(req, res) {
    let url = req.url;
    let method = req.method;
    let pathname = urlModel.parse(url, true).pathname
    let query = urlModel.parse(url, true).query
    // console.log(query);
    // let id = query.id;
    // console.log(id);
    req.query = query;

    //相当于给req添加一个pathname的属性用来存储pathname的值
    req.pathname = pathname;

    if (method == 'GET' && (pathname == '/' || pathname == '/index' || pathname == '/index.html')) {
        Ctrl.showIndexPage(req, res)
    } else if (method == 'GET' && (pathname == '/add' || pathname == '/add.html')) {
        Ctrl.showAddPage(req, res)
    } else if (method == 'GET' && (pathname == '/edit' || pathname == '/edit.html')) {
        Ctrl.showEditPage(req, res)
    } else if (method == 'GET' && (pathname == '/info' || pathname == '/info.html')) {
        Ctrl.showInfoPage(req, res)
    } else if (method == 'GET' && pathname.startsWith('/node_modules')) {
        Ctrl.loadStaticResource(req,res)
    } else {
        res.end('404');
    }
}

//暴露路由方法
module.exports = router;