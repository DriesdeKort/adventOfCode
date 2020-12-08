"use strict";
var fs = require('fs');
fs.readFile('./day5/input.txt', function (err, data) {
    if (err)
        throw err;
    var dataPerBoardingPass = data.toString().split("\n");
    console.log(puzzle2(dataPerBoardingPass));
});
function puzzle1(boardingPasses) {
    var BoardingPassesResult = new Array();
    var largestRow = 0;
    var LargestColumn = 0;
    for (var _i = 0, boardingPasses_1 = boardingPasses; _i < boardingPasses_1.length; _i++) {
        var boardingPass = boardingPasses_1[_i];
        var minRow = 0;
        var maxRow = 127;
        var minColumn = 0;
        var maxColumn = 7;
        while (boardingPass.length != 0) {
            if (boardingPass[0] == 'F') {
                maxRow -= (maxRow - minRow + 1) / 2;
            }
            else if (boardingPass[0] == 'B') {
                minRow += (maxRow - minRow + 1) / 2;
            }
            else if (boardingPass[0] == 'R') {
                minColumn += (maxColumn - minColumn + 1) / 2;
            }
            else if (boardingPass[0] == 'L') {
                maxColumn -= (maxColumn - minColumn + 1) / 2;
            }
            boardingPass = boardingPass.substring(1);
        }
        BoardingPassesResult.push([minRow, minColumn]);
        if (minRow * 8 + minColumn > largestRow * 8 + LargestColumn) {
            largestRow = minRow;
            LargestColumn = minColumn;
        }
    }
    return largestRow * 8 + LargestColumn;
}
function puzzle2(boardingPasses) {
    var BoardingIDs = new Array();
    for (var _i = 0, boardingPasses_2 = boardingPasses; _i < boardingPasses_2.length; _i++) {
        var boardingPass = boardingPasses_2[_i];
        var minRow = 0;
        var maxRow = 127;
        var minColumn = 0;
        var maxColumn = 7;
        while (boardingPass.length != 0) {
            if (boardingPass[0] == 'F') {
                maxRow -= (maxRow - minRow + 1) / 2;
            }
            else if (boardingPass[0] == 'B') {
                minRow += (maxRow - minRow + 1) / 2;
            }
            else if (boardingPass[0] == 'R') {
                minColumn += (maxColumn - minColumn + 1) / 2;
            }
            else if (boardingPass[0] == 'L') {
                maxColumn -= (maxColumn - minColumn + 1) / 2;
            }
            boardingPass = boardingPass.substring(1);
        }
        BoardingIDs.push(minRow * 8 + minColumn);
    }
    BoardingIDs = BoardingIDs.sort();
    for (var i = 1; i < BoardingIDs.length; i++) {
        if (BoardingIDs[i] == BoardingIDs[i - 1] + 2)
            return BoardingIDs[i] - 1;
    }
}
