const fs = require('fs'); 


fs.readFile('./day5/input.txt', function(err:Error | null, data:string) {
    if(err) throw err;
    const dataPerBoardingPass = data.toString().split("\n");
    console.log(puzzle2(dataPerBoardingPass));
});


function puzzle1(boardingPasses: string[]):number{
    let BoardingPassesResult = new Array<number[]>()
    let largestRow = 0;
    let LargestColumn = 0
    for (let boardingPass of boardingPasses){
        let minRow = 0;
        let maxRow = 127;
        let minColumn =0;
        let maxColumn = 7;
        while (boardingPass.length != 0){
            if (boardingPass[0] == 'F'){
                maxRow -= (maxRow - minRow+1)/2;
            } else if (boardingPass[0] == 'B') {
                minRow += (maxRow - minRow+1)/2;
            } else if (boardingPass[0] == 'R'){
                minColumn += (maxColumn - minColumn+1)/2;
            } else if(boardingPass[0] == 'L'){
                maxColumn -= (maxColumn - minColumn+1)/2;
            }
            boardingPass = boardingPass.substring(1);
        }
        BoardingPassesResult.push([minRow, minColumn])
        if (minRow*8+minColumn > largestRow*8+LargestColumn) {
            largestRow = minRow;
            LargestColumn = minColumn
        }
    }
    return largestRow*8+LargestColumn;
}


function puzzle2(boardingPasses: string[]):number{
    let BoardingIDs = new Array<number>()
    for (let boardingPass of boardingPasses){
        let minRow = 0;
        let maxRow = 127;
        let minColumn =0;
        let maxColumn = 7;
        while (boardingPass.length != 0){
            if (boardingPass[0] == 'F'){
                maxRow -= (maxRow - minRow+1)/2;
            } else if (boardingPass[0] == 'B') {
                minRow += (maxRow - minRow+1)/2;
            } else if (boardingPass[0] == 'R'){
                minColumn += (maxColumn - minColumn+1)/2;
            } else if(boardingPass[0] == 'L'){
                maxColumn -= (maxColumn - minColumn+1)/2;
            }
            boardingPass = boardingPass.substring(1);
        }
        BoardingIDs.push(minRow*8+minColumn);
    }
    BoardingIDs = BoardingIDs.sort();
    
    for (let i = 1; i < BoardingIDs.length; i++){
        if (BoardingIDs[i] == BoardingIDs[i-1] +2) return BoardingIDs[i]-1;
    }
}
