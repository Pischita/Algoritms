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
 
    let remainderOfTheDivision = number;

    let result = [];

    while(remainderOfTheDivision > 1){
        let devider = 2;

        while(remainderOfTheDivision % devider !== 0){
            devider+=1;

            if(devider > 5000){
                devider = remainderOfTheDivision;
            }
        }

        result.push(devider);

        remainderOfTheDivision = remainderOfTheDivision / devider;
    }

    console.log(result.join(' '));
    

}


let input = `802066951`;


_inputLines = input.split('\n');

solve();