const fs = require('fs'); 


fs.readFile('./day4/input.txt', function(err:Error | null, data:string) {
    if(err) throw err;
    const dataPerPassport = data.toString().split("\r\n\r\n");
    let result = new Array<string[]>();
    for (let passport of dataPerPassport){
        result.push(passport.split(/\r\n| /));
    }
    console.log(puzzle2(result));
});


function puzzle1(data:string[][]){
    let validPassports = 0;
    for (let passport of data){
        if (passport.length >=7 && passport.length <=8){
            let requiredFields = new Set(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"])
            for (let field of passport){
                let fieldName = field.split(":")[0];
                requiredFields.delete(fieldName);
            }
            if (requiredFields.size ==0) validPassports += 1;
        }
    } 
    return validPassports;

}

// console.log(/^\d{9}$/.test('0123456789'));
// console.log(parseInt('125cm'))
function puzzle2(data:string[][]){
    let validPassports = 0;
    for (let passport of data){
        if (passport.length >=7 && passport.length <=8){
            let requiredFields = new Set(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"])
            for (let field of passport){
                let fieldSplitted = field.split(":");
                let name = fieldSplitted[0];
                let value = fieldSplitted[1];
                switch (name) { //if parseInt
                    case "byr":
                        if ((parseInt(value) >=1920) &&(parseInt(value) <=2002) && /^\d{4}$/.test(value)) {
                            requiredFields.delete(name);
                        }
                        break;
                    case "iyr":
                        if ((parseInt(value) >=2010) &&(parseInt(value) <=2020) && /^\d{4}$/.test(value)) {
                            requiredFields.delete(name);
                        }
                        break;
                    case "eyr":
                        if ((parseInt(value) >=2020) &&(parseInt(value) <=2030) && /^\d{4}$/.test(value)) {
                            requiredFields.delete(name);
                        }
                        break;
                    case "hgt":
                        if ((/in$/.test(value) && parseInt(value) >= 59 && parseInt(value) <= 76 ) ||(/cm$/.test(value) && parseInt(value) >= 150 && parseInt(value) <= 193 )){
                            requiredFields.delete(name);
                        }
                        break;
                    case "hcl":
                        if(/^#[a-f0-9]{6}$/.test(value)) requiredFields.delete(name);
                        break;
                    case "ecl":
                        let allowedColor = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                        if (allowedColor.includes(value)) requiredFields.delete(name);
                        break;
                    case "pid":
                        if (/^\d{9}$/.test(value)) requiredFields.delete(name);
                        break;              
                }
            }
            if (requiredFields.size ==0) validPassports += 1;
        }
    } 
    return validPassports;

}