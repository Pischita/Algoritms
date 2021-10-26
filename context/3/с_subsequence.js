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
    let s = inputLines[0];
    let t = inputLines[1];

    let sM = [];
    let tM = [];

    for(let i = 0; i < s.length ; i++){
        sM.push(s[i]);
    }


    for(let i = 0; i < t.length ; i++){
        tM.push(t[i]);
    }

    let tIndex = 0;

    let isGood = true;

    for(let i = 0; i < s.length ; i++){
        let letter = sM[i];

        let isFinded = false;

        while(!isFinded && tIndex < tM.length){
            if(letter === tM[tIndex]){
                isFinded = true;
            }
            tIndex++;
        }

        if(!isFinded){
            isGood = false;
            console.log('False');
            break;
        }
    }

    if(isGood){
        console.log('True');
    }

}


let input = `ijha
hmrqvftefyixinahlzgbkidroxiptbbkjmtwpsujevkulgrjiwiwzyhngulrodiwyg
`;

inputLines = input.split('\n');

solve();