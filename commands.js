var fs = require('fs');

var pwd = function() {
    console.log(process.argv[1]);
}

var date = function() {
  var date = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var year = date.getUTCFullYear();

  var addZero = function(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  console.log(days[date.getDay()].slice(0, 3) + " " + months[date.getMonth()].slice(0, 3) + "  " + addZero(day) + " " + addZero(hours) +  ":" + addZero(minutes) + ":" + addZero(seconds) + " EST " + addZero(year));
}

var ls = function() {
  var filePath = process.argv[1].split('/');
  filePath.pop();
  
  fs.readdir(filePath.join('/'), function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  })
  process.stdout.write("prompt > ");
});
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls
}
