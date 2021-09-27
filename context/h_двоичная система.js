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
    let firstAddentum = readLine();
    let secondAddentum = readLine();

    
    let size = Math.max(firstAddentum.length, secondAddentum.length);
    let result = new Array(size + 1);

    let memorable = 0;

    for(let i=0; i < result.length; i++){
        let first = Number(firstAddentum[firstAddentum.length - 1 - i]);
        let second = Number(secondAddentum[secondAddentum.length - 1 -i]);
        if(Number.isNaN(first)){
            first = 0;
        }

        if(Number.isNaN(second)){
            second = 0;
        }



        if(first + second + memorable === 2){
            result[result.length - 1 - i] = 0;
            memorable = 1;
        }else if(first + second + memorable === 3){
            result[result.length - 1 - i] = 1;
            memorable = 1;
        }else if(first + second + memorable === 1){
            result[result.length - 1 - i] = 1;
            memorable = 0;
        }else{
            result[result.length - 1 - i] = 0;
            memorable = 0;
        }        
    }

    if(result[0] == 0){
        result.shift();
    }

    console.log(result.join(''));
    
}


let input = `10
0`;


_inputLines = input.split('\n');

solve();