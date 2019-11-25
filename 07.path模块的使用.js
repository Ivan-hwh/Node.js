// 引入path模块
var path = require('path');

var url1 = path.join('a','b','c','d');

console.log(url1);

// 引入fs读写模块
var fs = require('fs');

// path.join用法2
fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,data)=>{
    if(err) return console.log(err.message);
    console.log(data);
})