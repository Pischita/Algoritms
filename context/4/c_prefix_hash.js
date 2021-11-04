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
    const countSubstrings = Number( inputLines[3] );
    const skipLines = 4;

    let hashVal = 0;
    let powerOfP = 1;
    
    let valuesPowerOfP = [];

    const steps = [];

    for(let i = 0; i < str.length; i++){
        valuesPowerOfP.push(powerOfP);
        powerOfP = (powerOfP * p) % m;
    }

    // for(let i = 0; i < str.length; i++){
    //     powerOfP = valuesPowerOfP[str.length - 1 - i];
    //     let symbolHash = str[i].charCodeAt() * powerOfP;
    //     hashVal = (hashVal + symbolHash) % m;
    //     steps.push(hashVal);        
    // }

    for(let sub = 0; sub < countSubstrings; sub++){
        console.log(inputLines[skipLines + sub]);
        let paramStr = inputLines[skipLines + sub].split(' ');
        let s = str.substring(Number(paramStr[0]) - 1, Number(paramStr[1])  );

        hashVal = 0;
        for(let i = 0; i < s.length; i++){
            //powerOfP = valuesPowerOfP[s.length - 1 - i];
            powerOfP = valuesPowerOfP[s.length - 1 - i];
            let symbolHash = str[i].charCodeAt() * powerOfP;
            hashVal = (hashVal + symbolHash) % m;        
        }

        console.log(hashVal);


    }

    console.log(valuesPowerOfP);
    
    
}


let input = `1000
1000009
abcdefgh
7
1 1
1 5
2 3
3 4
4 4
1 8
5 8`;

inputLines = input.split('\n');

solve();