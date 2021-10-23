const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);



function solve() {
    const countElement = inputLines[0];
    const arr = inputLines[1].split(' ').map(item => Number(item));

    let isWasSort = false;

    for(let j = 1; j < arr.length ; j++){
        let isWasReplacement = false;
        
        for(let i = 0; i < arr.length - j; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                isWasReplacement = true;

            }
        }
        if(isWasReplacement){
            console.log(arr.join(' '));
            isWasSort = true;
        }else{
            break;
        }
    } 
    
    if(! isWasSort){
        console.log(arr.join(' '));
    }
}


let input = `5
12 8 9 10 11`;


inputLines = input.split('\n');

solve();