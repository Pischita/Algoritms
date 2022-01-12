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
    const countDays = Number(inputLines[0]);
    const costs = inputLines[1].split(' ').map(value => Number(value));

    let summ = 0;
    let countActions = 0;
    let purchasePrice = 0;

    for(let i = 0; i < costs.length; i++){
        if(countActions === 0){
            if(costs[i] < costs[i+1]){
                purchasePrice = costs[i];
                countActions = 1;
            }
        }else if(countActions === 1){
            if(costs[i] > (costs[i + 1] || 0)){
                summ+= costs[i] - purchasePrice;
                purchasePrice = 0;
                countActions = 0;
            }
        }
    }
    console.log(summ);
}


let input = `6
1 12 12 16 1 8`;

inputLines = input.split('\n');

solve();