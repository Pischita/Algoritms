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
    const firstStr = inputLines[0];
    const secondStr = inputLines[1];
    let f = {},
        s = {};

    let result = 'YES';

    if (firstStr.length === secondStr.length) {
        for (let i = 0; i < firstStr.length; i++) {
            let letterF = firstStr[i];
            let letterS = secondStr[i];

            if (!f[letterF]) {
                f[letterF] = {
                    count: 0,
                    firstPosition: i,
                }
            }

            if (!s[letterS]) {
                s[letterS] = {
                    count: 0,
                    firstPosition: i,
                }
            }

            f[letterF].count++;
            s[letterS].count++;

            if (f[letterF].count !== s[letterS].count || f[letterF].firstPosition != s[letterS].firstPosition) {
                result = 'NO';
            }
        }
    }else{
        result = 'NO';    
    }


    console.log(result);

}


let input = `agg
app`;

inputLines = input.split('\n');

solve();