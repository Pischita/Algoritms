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
    let p = Number( inputLines[0] );
    let m = Number(inputLines[1] );
    let str = inputLines[2];

    let hashVal = 0;
    let powerOfP = 1;
    
    let valuesPowerOfP = [];

    for(let i = 0; i < str.length; i++){
        valuesPowerOfP.push(powerOfP);
        powerOfP = (powerOfP * p) % m;
    }

    for(let i = 0; i < str.length; i++){
        powerOfP = valuesPowerOfP[str.length - 1 - i];
        let symbolHash = str[i].charCodeAt() * powerOfP;
        hashVal = (hashVal + symbolHash) % m;
        
    }

    console.log(hashVal);
    
}


let input = `123
100003
HaSH
`;

inputLines = input.split('\n');

solve();