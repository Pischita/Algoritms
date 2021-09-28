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
    let s = readLine();
    let t = readLine(); 

    for(let i = 0; i < s.length; i++){
        t = t.replace(s[i], '');
    }

    console.log(t);

}


let input = `go
ogg`;


_inputLines = input.split('\n');

solve();