var fs = require('fs');

var pwd = function() {
    console.log(process.argv[1]);
}

var echo = function(cmd) {
    process.stdout.write(cmd.slice(5) + "\n");
}

var ver = function() {
    process.stdout.write(process.env.TERM_PROGRAM_VERSION + "\n"); 
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

var cat = function(cmd) {
  var file = cmd.slice(4);
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  })
}

var head = function(cmd) {
  var file = cmd.slice(5);
  var fileHead = [];
  var count = 0;

  fs.readFile(file, (err, data) => {
    if (err) throw err;
    while (count < 5) {
      fileHead.push(data.slice(0, data.indexOf("\n")));
      data = data.slice(data.indexOf("\n")+1);
      count++;
    }

    console.log(fileHead.join('\n').toString());
  })
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  ver: ver,
  cat: cat,
  head: head
}
