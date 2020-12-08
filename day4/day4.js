"use strict";
var fs1 = require('fs');
fs.readFile('./day4/input.txt', function (err, data) {
    if (err)
        throw err;
    var dataPerPassport = data.toString().split("\r\n\r\n");
    var result = new Array();
    for (var _i = 0, dataPerPassport_1 = dataPerPassport; _i < dataPerPassport_1.length; _i++) {
        var passport = dataPerPassport_1[_i];
        result.push(passport.split(/\r\n| /));
    }
    console.log(puzzle2(result));
});
function puzzle1(data) {
    var validPassports = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var passport = data_1[_i];
        if (passport.length >= 7 && passport.length <= 8) {
            var requiredFields = new Set(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]);
            for (var _a = 0, passport_1 = passport; _a < passport_1.length; _a++) {
                var field = passport_1[_a];
                var fieldName = field.split(":")[0];
                requiredFields.delete(fieldName);
            }
            if (requiredFields.size == 0)
                validPassports += 1;
        }
    }
    return validPassports;
}
// console.log(/^\d{9}$/.test('0123456789'));
// console.log(parseInt('125cm'))
function puzzle2(data) {
    var validPassports = 0;
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var passport = data_2[_i];
        if (passport.length >= 7 && passport.length <= 8) {
            var requiredFields = new Set(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]);
            for (var _a = 0, passport_2 = passport; _a < passport_2.length; _a++) {
                var field = passport_2[_a];
                var fieldSplitted = field.split(":");
                var name_1 = fieldSplitted[0];
                var value = fieldSplitted[1];
                switch (name_1) { //if parseInt
                    case "byr":
                        if ((parseInt(value) >= 1920) && (parseInt(value) <= 2002) && /^\d{4}$/.test(value)) {
                            requiredFields.delete(name_1);
                        }
                        break;
                    case "iyr":
                        if ((parseInt(value) >= 2010) && (parseInt(value) <= 2020) && /^\d{4}$/.test(value)) {
                            requiredFields.delete(name_1);
                        }
                        break;
                    case "eyr":
                        if ((parseInt(value) >= 2020) && (parseInt(value) <= 2030) && /^\d{4}$/.test(value)) {
                            requiredFields.delete(name_1);
                        }
                        break;
                    case "hgt":
                        if ((/in$/.test(value) && parseInt(value) >= 59 && parseInt(value) <= 76) || (/cm$/.test(value) && parseInt(value) >= 150 && parseInt(value) <= 193)) {
                            requiredFields.delete(name_1);
                        }
                        break;
                    case "hcl":
                        if (/^#[a-f0-9]{6}$/.test(value))
                            requiredFields.delete(name_1);
                        break;
                    case "ecl":
                        var allowedColor = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                        if (allowedColor.includes(value))
                            requiredFields.delete(name_1);
                        break;
                    case "pid":
                        if (/^\d{9}$/.test(value))
                            requiredFields.delete(name_1);
                        break;
                }
            }
            if (requiredFields.size == 0)
                validPassports += 1;
        }
    }
    return validPassports;
}
