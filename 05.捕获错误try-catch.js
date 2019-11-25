var fs = require('fs');

var t1 = fs.readFileSync(__dirname+'/files/1.txt','utf-8');
console.log(t1);

try{
    var t2 = fs.readFileSync(__dirname+'/files/22.txt','utf-8');
    console.log(t2);
}catch(error){
    // 传入参数error 用来显示错误信息
    console.log(error);
}

var t3 = fs.readFileSync(__dirname+'/files/3.txt','utf-8');
console.log(t3);