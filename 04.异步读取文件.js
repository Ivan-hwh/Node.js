var fs = require('fs');

fs.readFile(__dirname+'/files/1.txt','utf-8',(err,data)=> {
    if(err) return console.log(err.message);
    console.log(data);
})

fs.readFile(__dirname+'/files/22.txt','utf-8',(err,data)=> {
    if(err) return console.log(err.message);
    console.log(data);
})

fs.readFile(__dirname+'/files/3.txt','utf-8',(err,data)=> {
    if(err) return console.log(err.message);
    console.log(data);
})

// 异步读取 即使中间某一环节发生错误  其他环节也会执行