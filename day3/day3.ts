const fs = require('fs'); 


fs.readFile('./day3/input.txt', function(err:Error | null, data:string) {
    if(err) throw err;
    const dataPerLine = data.toString().split("\n")
    let arrayPerLetter = new Array<string[]>();
    for (let i =0; i < dataPerLine.length; i ++){
        let linePerLetter = dataPerLine[i].split("");
        arrayPerLetter.push(linePerLetter);
    }
    let res1 = puzzle1(arrayPerLetter, 1, 1);
    let res2 = puzzle1(arrayPerLetter, 3, 1);
    let res3 = puzzle1(arrayPerLetter, 5, 1);
    let res4 = puzzle1(arrayPerLetter, 7, 1);
    let res5 = puzzle1(arrayPerLetter, 1, 2);
    console.log(res1*res2*res3*res4*res5)
});

function puzzle1(data:string[][], xAdd:number, yAdd: number):number{
    let x=0;
    let y=0;
    let treesEncounterd = 0;
    while (y < data.length){
        
        // console.log("x: " + x%(data[0].length-1), "y: " + y,data[y])
        // console.log("letter" + data[y][x%data[0].length] )
        if (data[y][x%(data[0].length-1)] == '#') treesEncounterd +=1;
        x += xAdd;
        y += yAdd;
    }
    return treesEncounterd;
}