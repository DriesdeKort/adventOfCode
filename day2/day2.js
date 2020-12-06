"use strict";
var fs = require('fs');
fs.readFile('./day2/input.txt', function (err, data) {
    if (err)
        throw err;
    var dataPerLine = data.toString().split("\n");
    console.log(puzzle1(dataPerLine));
    console.log(puzzle2(dataPerLine));
});
function puzzle1(data) {
    var correctPasswords = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var line = data_1[_i];
        var splittedLine = line.split(" ");
        var min = parseInt(splittedLine[0].split("-")[0]);
        var max = parseInt(splittedLine[0].split("-")[1]);
        var letter = splittedLine[1][0]; //n:
        var password = splittedLine[2]; //dnjjrtclnzdnghnbnn
        var counter = 0;
        for (var _a = 0, password_1 = password; _a < password_1.length; _a++) {
            var p = password_1[_a];
            if (p == letter)
                counter += 1;
        }
        if (counter >= min && counter <= max)
            correctPasswords += 1;
    }
    return correctPasswords;
}
function puzzle2(data) {
    var correctPasswords = 0;
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var line = data_2[_i];
        var splittedLine = line.split(" ");
        var firstIndex = parseInt(splittedLine[0].split("-")[0]) - 1;
        var secondIndex = parseInt(splittedLine[0].split("-")[1]) - 1;
        var letter = splittedLine[1][0]; //n:
        var password = splittedLine[2]; //dnjjrtclnzdnghnbnn
        // console.log("firstIndex : "+ firstIndex,"secondIndex : "+secondIndex ,"letter : "+letter ," password: "+password)
        if ((password[firstIndex] == letter && password[secondIndex] != letter) || (password[secondIndex] == letter && password[firstIndex] != letter))
            correctPasswords += 1;
    }
    return correctPasswords;
}
