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
    let text = readLine();

    while(text.search(/[^a-zA-ZА-Яа-яЁё]/gi) != -1){
        text = text.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'');
    }
    
    const lengthText = text.length;
    let middleIndex = Math.floor(lengthText / 2);
    let isPolindrom = true;

    for(let i = 0; i < middleIndex; i++){
        if(text[i].toUpperCase() != text[lengthText - 1 -i].toUpperCase()){
            isPolindrom = false;
            break;
        }
    }

    console.log( (isPolindrom ? 'True' : 'False' ));
    
}


let input = `zo`;


_inputLines = input.split('\n');

solve();