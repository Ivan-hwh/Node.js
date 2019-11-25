// 引入通讯模块http
var http = require('http');

// 引入读写模块fs
var fs =  require('fs');


// 创建服务器
var server = http.createServer();

// 监听端口
server.listen(3000,() => {
    console.log('http://127.0.0.1:3000');
})

// 监听请求

server.on('request',(req,res) => {
    var method = req.method;
    var url = req.url;

    if(method == 'GET' && url == '/views/index.html'){
        // 响应给浏览器返回数据应该通过什么方式渲染出来
        res.writeHeader(200,{
            'Content-Type':'text/html'
        });

        fs.readFile(__dirname+'/views/index.html',(err,data) => {
            if(err) return console.log(err.message);
            res.end(data);
        })
    }
    else if(method == 'GET' && url == '/views/detail.html'){
        // 响应给浏览器返回数据应该通过什么方式渲染出来
        res.writeHeader(200,{
            'Content-Type':'text/html'
        });

        fs.readFile(__dirname+'/views/detail.html',(err,data) => {
            if(err) return console.log(err.message);
            res.end(data);
        })
    }
    else if(method == 'GET' && url == '/assest/styles/index.css'){
        // 响应给浏览器返回数据应该通过什么方式渲染出来
        res.writeHeader(200,{
            'Content-Type':'text/css'
        });

        fs.readFile(__dirname+'/assest/styles/index.css',(err,data) => {
            if(err) return console.log(err.message);
            res.end(data);
        })
    }
    else if(method == 'GET' && url == '/assest/images/1.png'){
        // 响应给浏览器返回数据应该通过什么方式渲染出来
        res.writeHeader(200,{
            'Content-Type':'image/png'
        });

        fs.readFile(__dirname+'/assest/images/1.png',(err,data) => {
            if(err) return console.log(err.message);
            res.end(data);
        })
    }
    else if(method == 'GET' && url == '/assest/js/index.js'){
        fs.readFile(__dirname+'/assest/js/index.js',(err,data) => {
            if(err) return console.log(err.message);
            res.end(data);
        })
    }
    else{
        res.end('404')
    }
})