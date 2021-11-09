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

function distance(exit, stop) {
    const exitData = exit;
    const stopData = stop;

    let result = Math.sqrt(Math.pow(exitData[0] - stopData[0], 2) + Math.pow(exitData[1] - stopData[1], 2));
    return result;
}

function solve() {
    const countStops = Number(inputLines[0]);

    let exits = new Map();
    for (let i = 1; i <= countStops; i++) {
        exits.set(i, {
            coordinates: inputLines[i].split(' ').map(item => Number(item)),
            countStops: 0,
        });
    }

    const skip = countStops + 1;
    let countExits = Number(inputLines[skip]);
    const stops = [];
    for (let i = 1; i <= countExits; i++) {
        stops.push(inputLines[skip + i].split(' ').map(item => Number(item)));
    }

    let bestExit = 0;
    let maxStops = 0;
    
    for (let exit of exits) {
        for (let i = 0; i < countExits; i++) {
            let dist = distance(exit[1].coordinates, stops[i]);
            if (dist <= 20) {
                exit[1].countStops++;

                if(exit[1].countStops > maxStops){
                    maxStops = exit[1].countStops;
                    bestExit = exit[0];
                }
            }

        }
    }

    console.log(bestExit);

}


let input = `3
-1 0
1 0
0 5
3
10 0
20 0
20 5
`;

inputLines = input.split('\n');

solve();