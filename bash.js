var commands = require('./commands');
var fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
		var cmd = data.toString().trim();

    if (cmd === "pwd") {
      commands.pwd();
    }

    if (cmd === "date") {
      commands.date();
    }

    if (cmd === "ls") {
      commands.ls();
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});
