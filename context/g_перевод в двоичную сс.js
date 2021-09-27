const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);


function readLine() {
    return _inputLines[_curLine++];
}

function solve() {
    let number = Number(readLine() );

    let result = [];

    while(number >=2){
        remainderOfTheDivision = number % 2;
        number = Math.floor(number / 2);
        result.push(remainderOfTheDivision);
    }

    result.push(number);

    textResult = '';
    for(let i = result.length - 1; i >=0; i--){
        textResult += result[i];
    }

    console.log(textResult);

    
    
}


let input = `14`;


_inputLines = input.split('\n');

solve();