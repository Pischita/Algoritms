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
    const textLength = Number(readLine());
    const words = readLine().split(' ');

    let maxLength = 0;
    let maxWord = '';

    for(let i = 0; i < words.length; i++){
        if(maxLength < words[i].length) {
            maxLength = words[i].length;
            maxWord = words[i];
        }
    }

    console.log(maxWord);
    console.log(maxLength);

    
}


let input = `19
i love segment tree`;


_inputLines = input.split('\n');

solve();