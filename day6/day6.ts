const fs = require('fs'); 


fs.readFile('./day6/input.txt', function(err:Error | null, data:string) {
    if(err) throw err;
    const answersOfGroups = data.toString().split("\r\n\r\n");
    const filteredResult = new Array<string>();
    const filteredResult2 = new Array<string[]>();
    for (let answer of answersOfGroups){
        filteredResult.push(answer.replace(/\r\n/g, ""))
        }
    console.log(puzzle1(filteredResult));
    for (let answer of answersOfGroups){
        filteredResult2.push(answer.split("\r\n"));
        }
    console.log(puzzle2(filteredResult2));
});

function puzzle1(answersPerGroup:string[]):number{
    let counter = 0
    for (let answer of answersPerGroup){
        let positiveQuestions = new Set<string>()
        for (let a of answer){
            positiveQuestions.add(a);
        }
        counter += positiveQuestions.size
    }
    return counter;
}

function puzzle2(answersPerGroup:string[][]){
    let counter = 0;
    for (let group of answersPerGroup){
        if (group.length>1){
            let intersection = group[0].split("").filter(value => group[1].split("").includes(value)); //init intersect
            for (let i=2; i <group.length;i++){ 
                intersection = intersection.filter(value => group[i].split("").includes(value)); // update intersect with next groups
            }
            counter += intersection.length;
        } else{ counter += group[0].length;}
    }
    return counter;
}
