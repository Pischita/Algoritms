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

function prefixFunction(str){
    const n = str.length;
    const pi = new Array(n).fill(0);

    for(let i = 1; i< n; i++){
        let j = pi[i-1];

        while(j > 0 && str[j] != str[i]){
            j = pi[j-1];
        }

        if(str[i] === str[j]){
            j += 1;
        }

        pi[i] = j;
    }
    return pi;

}

function solve() {
    const str = inputLines[0];

    console.log(prefixFunction(str).join(' '));    
}


let input = `abracadabra`;

inputLines = input.split('\n');

solve();