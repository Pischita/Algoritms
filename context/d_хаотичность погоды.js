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
    const countDays = Number(readLine());
    const measurements = readLine().split(' ').map(item => {
        return Number(item)
    });

    let result = 0;

    for (let i = 0; i < measurements.length; i++) {
        if (i == 0 && measurements.length > 1 && measurements[i] > measurements[i + 1]) {
            result++
        } else if (i == measurements.length - 1 && measurements[i] > measurements[i - 1]) {
            result++
        }
        
        if (i > 0 && i < measurements.length - 1) {
            if(measurements[i -1 ] < measurements[i] && measurements[i] > measurements[i+1] ){
                result++;
            }
        }
    }

    if(result == 0  && measurements.length == 1){
        result++;
    }

    console.log(result);
}


let input = `7
-159 -248 8 -23 -45 -131 -169 -184 159 -241`;


_inputLines = input.split('\n');

solve();