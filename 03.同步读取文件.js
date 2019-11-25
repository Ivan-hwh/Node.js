var fs = require('fs');

var t1 = fs.readFileSync(__dirname+'/files/1.txt','utf-8');
console.log(t1);

var t2 = fs.readFileSync(__dirname+'/files/22.txt','utf-8');
console.log(t2);

var t3 = fs.readFileSync(__dirname+'/files/3.txt','utf-8');
console.log(t3);


// 如果中间某一环节出问题，会阻塞下面的操作继续执行

