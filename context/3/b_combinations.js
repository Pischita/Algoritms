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

let digits = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
}

function gen_combination(comb, combIndex, letterIndex, result){
    
    

   
}

function solve() {
    const buttons = inputLines[0];

    let comb = [];
    for(let i = 0; i < buttons.length; i++){
        comb.push(digits[buttons[i]]);
    }




    let result = gen_combination(comb, 0, 0, '');


    console.log(result);

    

        
}


let input = `234`;


inputLines = input.split('\n');

solve();