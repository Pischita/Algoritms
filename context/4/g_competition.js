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
    const countRaunds = inputLines[0];
    let rounds = [];
    if (inputLines.length >= 2) {
        rounds = inputLines[1].split(' ');
    }

    let result = 0;
    let points = 0;


    arr = inputLines.slice();
    for (let i = 0; i < rounds.length; i++) {

        if (rounds[i] === '0') {
            points--;
        } else {
            points++;
        }

        arr[i] = points;
    }

    let ww = {};

    for (let i = 0; i < arr.length; i++) {
        if( !ww[arr[i]]){
            ww[arr[i]] = {
                min: i + 1,
                max: i + 1,
                range: 0,
            }
        }

        ww[arr[i]].max = i+1;
        ww[arr[i]].range = ww[arr[i]].max - ww[arr[i]].min;

        if( result < ww[arr[i]].range){
            result = ww[arr[i]].range;
        }

        if(arr[i] === 0 && result <= i){
            result = i+1;
        }
    }

    console.log(result > 1 ? result: 0);
}


let input = `9
0 0 1 1 1 0 0 1 1`;

inputLines = input.split('\n');

solve();