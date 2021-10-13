const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);


function fibonachi(num){
    if(num ===1 || num === 0){
        return 1;
    }

    return fibonachi(num-1) + fibonachi(num-2)
}


function solve() {
    const number = Number(inputLines[0]);  
    const result = fibonachi(number);  
    console.log(result);
}


let input = `5`;


inputLines = input.split('\n');

solve();
