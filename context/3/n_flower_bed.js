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
        while(right + 1 > result.length){
            result.push(0);
        }

        for(let j = left; j <= right ; j++){
            if(result[j] != 0 && result[j] != i+1){
                let gardenerNumber = result[j];
                let k = j;
                while(result[k] === gardenerNumber && k >= 0){
                    result[k] = i+1;
                    k--;
                }
                k = j+1;
                while(result[k] === gardenerNumber && k < result.length){
                    result[k] = i+1;
                    k++;
                }
            }
            result[j] = i+1;
        }
    }

    //console.log(result);

    resultRanges = [];

    let i = 0;
    while(i < result.length){
        if( result[i] !== 0){
            let start = i;
            let gardenerNumber = result[i];
            while(result[i] === gardenerNumber){
                i++;
            }
            let end = i-1;
            console.log(`${start} ${end}`);
        }else{
            i++;
        }
    } 
}


let input = `3
48 76
0 8
40 93`;

inputLines = input.split('\n');

solve();