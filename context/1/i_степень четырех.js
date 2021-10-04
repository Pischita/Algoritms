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
    let needNumber = Number(readLine() );
 
    let currentNumber = 4;
    
    let isOk = false;

    while(currentNumber <= needNumber){
        if(currentNumber === needNumber){
            isOk = true;
            break;
        }

        currentNumber *= 4;
    }

    if(needNumber === 1){
        isOk = true;
    }

    console.log(isOk ? 'True': 'False');

}


let input = `16`;


_inputLines = input.split('\n');

solve();