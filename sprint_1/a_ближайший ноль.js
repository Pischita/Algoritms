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
    let streetLength = Number(readLine());
    let street = readLine().split(' ');

    let map = new Array(streetLength);
    let emptyIndexes = [];

 
    for (let i = 0; i < streetLength; i++) {
        if (street[i] == 0) {
            map[i] = 0;
            emptyIndexes.push(i);
        }
    }

    for (let currentLength = 0; currentLength < streetLength; currentLength++) {        
        for (let i = 0; i < streetLength; i++) {
            if (map[i] === currentLength) {
                if (i - 1 >= 0 && map[i - 1] == undefined) {
                    map[i - 1] = currentLength + 1;
                    
                }

                if (i + 1 < streetLength && map[i + 1] == undefined) {
                    map[i + 1] = currentLength + 1;
                }
            }
        }
    }
    console.log(map.join(' '));
}


let input = `5
0 1 4 9 0
`;


_inputLines = input.split('\n');

solve();