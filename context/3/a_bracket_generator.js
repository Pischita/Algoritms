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

function bracketGenerator(n, prefix, count){
    if(n === 0 && count === 0){
        console.log(prefix)
        return prefix;
    }else if(n < count || count < 0){
        // Неправильная скобочная последовательность
        return prefix;
    }else{
        bracketGenerator(n-1, prefix + '(', count+1);
        bracketGenerator(n-1, prefix + ')', count-1);         
    }
}

function solve() {
    const count = Number(inputLines[0]);
    bracketGenerator(count*2, '', 0) ;
}


let input = `3`;


inputLines = input.split('\n');

solve();