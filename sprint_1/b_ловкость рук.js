// id решения 53655935
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
    let maxKeys = Number(readLine());

    let symbols = {};

    for(let i = 0; i < 4; i++){
        let str = readLine();
        for(let j = 0; j<4; j++){
            let digit = str[j];
            if(symbols[digit]){
                symbols[digit] += 1;
            }else{
                symbols[digit] = 1;
            }
        }
    }

    let result = 0;
    Object.keys(symbols).forEach(key =>{
        if(key != '.' && symbols[key] <= maxKeys * 2){
            result++;
        }
    });


    console.log(symbols);
    console.log(result);
}


/*let input = `4
1111
1111
1111
1111`;


_inputLines = input.split('\n');

solve();


*/