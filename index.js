// /**
//  * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
//  * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
//  * ngược lại trả về false
//  */
// var moment = require('moment');

// function isWeekend(dateString) {
//   // Write code here...
//     var date = new Date(dateString);
//     var day = date.getDay();
//     if(day === 0 || day === 6) {
//         return true;
//     } else { 
//         return false;
//     }
// }

// //=====================================================================

// /**
//  * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
//  */
 
// var fromDate = new Date('2019/10/17');
// var toDate = new Date('2019/10/21');
 
// function diff(fromDate, toDate) {
//   // Write code here...
//   var time = - fromDate.getDate() + toDate.getDate();
//   return time;
// }

//========================================================================

var date = new Date("06/10/2019")
var x = date.getTime() - 5*24*60*60*1000;
var day = new Date();
day.setTime(x);
console.log(date);
console.log(day);
