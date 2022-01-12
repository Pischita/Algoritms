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
    let capacity = Number(inputLines[0]);
    const supply = [];
    const size = Number(inputLines[1]);
    const skipLines = 2;

    for(let i = 0; i < size; i++){

        let data = inputLines[i+ skipLines].split(' ');

        supply.push({
            type: i,
            weight: Number(data[1]),
            price: Number(data[0]),
        });
    }

    supply.sort((a,b) => b.price - a.price);

    let total = 0;
    for(let i=0; i<supply.length; i++){
        if(capacity <= 0){
            break;
        }

        item = supply[i];

        let weight = Math.min(capacity, item.weight);

        total += weight * item.price;
        capacity -= weight;
    }


    console.log(total);


   
    
}


let input = `10000
1
4 20
`;

inputLines = input.split('\n');

solve();

