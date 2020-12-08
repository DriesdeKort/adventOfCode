"use strict";
var fs = require('fs');
fs.readFile('./day3/input.txt', function (err, data) {
    if (err)
        throw err;
    var dataPerLine = data.toString().split("\n");
    var arrayPerLetter = new Array();
    for (var i = 0; i < dataPerLine.length; i++) {
        var linePerLetter = dataPerLine[i].split("");
        arrayPerLetter.push(linePerLetter);
    }
    var res1 = puzzle1(arrayPerLetter, 1, 1);
    var res2 = puzzle1(arrayPerLetter, 3, 1);
    var res3 = puzzle1(arrayPerLetter, 5, 1);
    var res4 = puzzle1(arrayPerLetter, 7, 1);
    var res5 = puzzle1(arrayPerLetter, 1, 2);
    console.log(res1 * res2 * res3 * res4 * res5);
});
function puzzle1(data, xAdd, yAdd) {
    var x = 0;
    var y = 0;
    var treesEncounterd = 0;
    while (y < data.length) {
        // console.log("x: " + x%(data[0].length-1), "y: " + y,data[y])
        // console.log("letter" + data[y][x%data[0].length] )
        if (data[y][x % (data[0].length - 1)] == '#')
            treesEncounterd += 1;
        x += xAdd;
        y += yAdd;
    }
    return treesEncounterd;
}
