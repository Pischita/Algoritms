// id решения 53655935
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
    const rows = Number(inputLines[0]);
    const columns = Number(inputLines[1]);

    source = [];

    for(let r = 0; r < rows; r++){
        source.push(inputLines[2+r].split(' ') );        
    }

    result = new Array(columns);
    for(let r = 0; r < result.length; r++){
        result[r] = new Array(rows);
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            result[c][r] = source[r][c];    
        }
    }
    
    for(let r = 0; r < result.length; r++){
        console.log(result[r].join(' ') );
    }
}


let input = `9
5
-7 -1 0 -4 -9
5 -1 2 2 9
3 1 -8 -1 -7
9 0 8 -8 -1
2 4 5 2 8
-7 10 0 -4 -8
-3 10 -7 10 3
1 6 -7 -5 9
-1 9 9 1 9`;


inputLines = input.split('\n');

solve();



