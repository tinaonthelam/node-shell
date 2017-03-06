var commands = require('./commands');
var fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
		var cmd = data.toString().trim();

    if (cmd === "pwd") {
      commands.pwd(done);
    }

    if (cmd === "date") {
      commands.date(done);
    }

    if (cmd === "ls") {
      commands.ls(done);
    }

    if (cmd.slice(0,4) === "echo") {
      commands.echo(cmd, done);
    }

    if (cmd.slice(0,3) === "ver") {
      commands.ver(done);
    }

    if (cmd.slice(0,3) === "cat") {
      commands.cat(cmd, done);
    }

    if (cmd.slice(0,4) === "head") {
      commands.head(cmd, done);
    }

    if (cmd.slice(0,4) === "tail") {
      commands.tail(cmd, done);
    }

    if (cmd.slice(0,2) === "lc") {
      commands.lc(cmd, done);
    }

    if (cmd.slice(0,4) === "curl") {
      commands.curl(cmd, done);
    }

    // process.stdout.write('You typed: ' + cmd);
});

var done = function(output) {
  console.log(output);
  process.stdout.write('\nprompt > ');
}
