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
    const countGardeners = Number(inputLines[0]);
    const result = [];

    const skipLines = 1;
    for(let i = 0; i < countGardeners; i++){
        let range = inputLines[i + skipLines].split(' ');
        let left = Number(range[0]);
        let right = Number(range[1]) ;
        while(right > result.length){
            result.push(0);
        }

        for(let j = Number(range[0]) - 1; j < Number(range[1]) ; j++){
            result[j] = i+1;
        }
    }

    console.log(result);

    resultRanges = [];

    let i = 0;
    while(i < result.length){
        if( result[i] !== 0){
            let start = i+1;
            while(result[i] === 1){
                i++;
            }
            let end = i;
            console.log(`${start} ${end}`);
        }else{
            i++;
        }
    }
}


let input = `4
2 3
5 6
3 4
3 4`;

inputLines = input.split('\n');

solve();