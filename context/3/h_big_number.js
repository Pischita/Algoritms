const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function compare(a, b) {
    if(Number(a + b) > Number(b + a) ){
        return -1;
    }else if(Number(b + a) > Number(a + b) ){
        return 1
    }else{
        return 0;
    }
}


function solve() {
    const countNumbers = inputLines[0];
    let numbers = inputLines[1].split(' ');

    numbers = numbers.sort(compare);
    console.log(numbers.join(''));
}


let input = `38
828  82 823
`;





inputLines = input.split('\n');

solve();