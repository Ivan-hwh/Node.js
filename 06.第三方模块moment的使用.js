// 引入第三方模块moment
var moment = require('moment');

// 显示星期几
var time1 = moment().weekday(); 
// 格式化显示当前时间
var time2 = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(time1);
console.log(time2);