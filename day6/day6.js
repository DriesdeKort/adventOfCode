"use strict";
var fs = require('fs');
fs.readFile('./day6/input.txt', function (err, data) {
    if (err)
        throw err;
    var answersOfGroups = data.toString().split("\r\n\r\n");
    var filteredResult = new Array();
    var filteredResult2 = new Array();
    for (var _i = 0, answersOfGroups_1 = answersOfGroups; _i < answersOfGroups_1.length; _i++) {
        var answer = answersOfGroups_1[_i];
        filteredResult.push(answer.replace(/\r\n/g, ""));
    }
    console.log(puzzle1(filteredResult));
    for (var _a = 0, answersOfGroups_2 = answersOfGroups; _a < answersOfGroups_2.length; _a++) {
        var answer = answersOfGroups_2[_a];
        filteredResult2.push(answer.split("\r\n"));
    }
    console.log(puzzle2(filteredResult2));
});
function puzzle1(answersPerGroup) {
    var counter = 0;
    for (var _i = 0, answersPerGroup_1 = answersPerGroup; _i < answersPerGroup_1.length; _i++) {
        var answer = answersPerGroup_1[_i];
        var positiveQuestions = new Set();
        for (var _a = 0, answer_1 = answer; _a < answer_1.length; _a++) {
            var a = answer_1[_a];
            positiveQuestions.add(a);
        }
        counter += positiveQuestions.size;
    }
    return counter;
}
function puzzle2(answersPerGroup) {
    var counter = 0;
    var _loop_1 = function (group) {
        if (group.length > 1) {
            var intersection = group[0].split("").filter(function (value) { return group[1].split("").includes(value); }); //init intersect
            var _loop_2 = function (i) {
                intersection = intersection.filter(function (value) { return group[i].split("").includes(value); }); // update intersect with next groups
            };
            for (var i = 2; i < group.length; i++) {
                _loop_2(i);
            }
            counter += intersection.length;
        }
        else {
            counter += group[0].length;
        }
    };
    for (var _i = 0, answersPerGroup_2 = answersPerGroup; _i < answersPerGroup_2.length; _i++) {
        var group = answersPerGroup_2[_i];
        _loop_1(group);
    }
    return counter;
}
