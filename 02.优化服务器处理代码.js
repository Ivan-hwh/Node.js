// 引入通讯模块http
var http = require('http');

// 引入读写模块fs
var fs =  require('fs');


// 创建服务器
var server = http.createServer();

// 监听端口
server.listen(3001,() => {
    console.log('http://127.0.0.1:3001');
})

// 监听请求

server.on('request',(req,res) => {
    var method = req.method;
    var url = req.url;
    if(method == 'GET' && (url == '/' || url == '/favicon.ico')){
        res.end('404');
    }
    else{
        // __dirname获取当前执行的JS文件的根目录
        fs.readFile(__dirname + url,(err,data)=> {
            if(err) return console.log(err.message);
            res.end(data);
        })
    }
})