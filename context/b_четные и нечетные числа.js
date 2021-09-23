const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
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
    
    const inputData = readLine();
    const inputParams = inputData.split(' '); 

    const a = Number(inputParams[0]) ;
    const b = Number(inputParams[1]) ;
    const c = Number(inputParams[2]) ;

    let resultA, resultB, resultC;
    resultA = Boolean(a % 2);
    resultB = Boolean(b % 2);
    resultC = Boolean(c % 2);

    if (resultA=== resultB&& resultB === resultC ){
        console.log('WIN');    
    }else{
        console.log('FAIL');    
    }
}

/////// TEST
_inputLines.push('6 -2 0');
solve();

/*
Алла придумала такую онлайн-игру: игрок нажимает на кнопку, и на экране появляются три случайных числа. Если все три числа оказываются одной чётности, игрок выигрывает.

Напишите программу, которая по трём числам определяет, выиграл игрок или нет.
*/