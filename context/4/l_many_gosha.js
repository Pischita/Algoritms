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
    const data = inputLines[0].split(' ').map(item => Number(item) );
    const length = data[0];
    const countRepeat = data[1];

    const str = inputLines[1];

    for(let i = 0; i < str.length - length + 1; i++){
        let subStr = str.slice(i, i+length);

        let matches = str.match(new Regexp(subStr) );
        if(matches && matches.length >= countRepeat){
            console.log(i);   
        }
        
    }
}


let input = `10 2
gggggooooogggggoooooogggggssshaa`;

inputLines = input.split('\n');

solve();