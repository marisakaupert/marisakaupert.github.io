// Load the fs (fileSystem) module
var fs = require('fs');

// Read the contents of the file into memory
fs.readFile('exampleLog.txt', function (err, logData) {

    //If an error occurs, throwing it will display the exception and end of our app
    if (err) throw err;

    //logData is a Buffer, convert to string
    var text = logData.toString();

    var results = {};

    //Break up the file into lines
    var lines = text.split('\n');

    lines.forEach(function (line)) {
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if (!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += parseInt(count);
    };

console.log(results);


});