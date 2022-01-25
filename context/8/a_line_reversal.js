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

function solve() {
    words = inputLines[0].split(' ');
    console.log(words.reverse().join(' ') );
}


let input = `one two three`;

inputLines = input.split('\n');

solve();