const fs = require('fs'); 


fs.readFile('./day2/input.txt', function(err: Error, data:string) {
    if(err) throw err;
    const dataPerLine = data.toString().split("\n");
    console.log(puzzle1(dataPerLine));
    console.log(puzzle2(dataPerLine))
});

function puzzle1(data:string[]) {
    let correctPasswords = 0;
    for (let line of data){
        let splittedLine = line.split(" ");
        let min = parseInt(splittedLine[0].split("-")[0]);
        let max = parseInt(splittedLine[0].split("-")[1]);
        let letter = splittedLine[1][0]; //n:
        let password = splittedLine[2]; //dnjjrtclnzdnghnbnn
        let counter = 0
        for (let p of password){
            if (p == letter) counter +=1
        }
        if (counter >=min && counter <= max) correctPasswords +=1
        
    }
    return correctPasswords;
}

function puzzle2(data:string[]){
    let correctPasswords = 0;
    for (let line of data){
        let splittedLine = line.split(" ");
        let firstIndex = parseInt(splittedLine[0].split("-")[0]) -1;
        let secondIndex = parseInt(splittedLine[0].split("-")[1]) -1;
        let letter = splittedLine[1][0]; //n:
        let password = splittedLine[2]; //dnjjrtclnzdnghnbnn
        // console.log("firstIndex : "+ firstIndex,"secondIndex : "+secondIndex ,"letter : "+letter ," password: "+password)
        if ((password[firstIndex] == letter && password[secondIndex] != letter) || (password[secondIndex] == letter && password[firstIndex] != letter))  correctPasswords +=1
        
        
    }
    return correctPasswords;

}

