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
    const countRows = Number(readLine());
    const countColumns = Number(readLine());

    const matrix = [];

    for (let i = 0; i < countRows; i++) {
        matrix.push(readLine().split(' '));
    }
    const row = Number(readLine());
    const column = Number(readLine());

    const neighbors = [];

    if (column - 1 >= 0) {
        neighbors.push(matrix[row][column - 1]);
    }

    if (column + 1 < countColumns) {
        neighbors.push(matrix[row][column + 1]);
    }

    if (row - 1 >= 0) {
        neighbors.push(matrix[row - 1][column]);
    }

    if (row + 1 < countRows) {
        neighbors.push(matrix[row + 1][column]);
    }

    let result = [...neighbors];
    if (neighbors.length > 1) {
        result = neighbors.sort((a, b) => {
            if (Number(a) > Number(b)) {
                return 1
            } else if (Number(a) < Number(b)) {
                return -1;
            } else {
                return 0;
            }
        });

    }
    console.log(result.join(' '));
}


let input = `4
3
1 2 3
0 2 6
7 4 1
2 7 0
3
0`;


_inputLines = input.split('\n');

solve();