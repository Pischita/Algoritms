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
    let count = Number(readLine() );
    let stringX = readLine();
    let stringK = readLine();

    let x = stringX.split(' ').join('');
    
    let sum = Number(x) + Number(stringK);
    
    let result = []; 

    let sumStr = sum.toString();
    
    for(let i = 0; i < sumStr; i++){
        result.push(sumStr[i]);
    }

    console.log(result.join(' '));
    
 
}


let input = `2
9 5
17`;


_inputLines = input.split('\n');

solve();