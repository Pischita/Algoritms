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


function solve() {
    const data = inputLines[0].split(' ');
    const number = Number(data[0]);
    const module = Math.pow(10, Number(data[1]));

    let prev = 0,
        next = 1;
    let fibSum = 1;

    if (number > 2) {        
        for (let i = 0; i < number; i++) {
            fibSum = prev + next % module;
            prev = next;
            next = fibSum;
        }
    }



    // let result = fibonachi(number);
    fibSum = fibSum % module;
    console.log(fibSum);
}


let input = `98 4`;


inputLines = input.split('\n');

solve();