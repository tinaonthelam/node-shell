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

    if (cmd.slice(0,4) === "echo") {
      commands.echo(cmd);
    }

    if (cmd.slice(0,3) === "ver") {
      commands.ver();
    }

    if (cmd.slice(0,3) === "cat") {
      commands.cat(cmd);
    }

    if (cmd.slice(0,4) === "head") {
      commands.head(cmd);
    }

    if (cmd.slice(0,4) === "tail") {
      commands.tail(cmd);
    }

    if (cmd.slice(0,2) === "lc") {
      commands.lc(cmd);
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});