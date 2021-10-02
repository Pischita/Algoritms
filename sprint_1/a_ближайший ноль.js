// id решения 53623535
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
    const streetLength = Number(inputLines[0]);
    const street = inputLines[1].split(' ');

    const map = new Array(streetLength);
    const emptyIndexes = [];


    for (let i = 0; i < streetLength; i++) {
        if (street[i] == 0) {
            map[i] = 0;
            emptyIndexes.push(i);
        }
    }

    if (emptyIndexes.length >= 2) {
        for (let i = 0; i < emptyIndexes.length - 1; i++) {
            let leftPointer = emptyIndexes[i];
            let rightPointer = emptyIndexes[i + 1];

            let run = true;

            while (run) {
                leftPointer++;
                if (map[leftPointer] === undefined) {
                    map[leftPointer] = map[leftPointer - 1] + 1;
                } else {
                    run = false;
                }

                rightPointer--;
                if (map[rightPointer] === undefined) {
                    map[rightPointer] = map[rightPointer + 1] + 1;
                } else {
                    run = false;
                }
            }

        }
    }

    if(emptyIndexes[0] > 0){
        let rightPointer = emptyIndexes[0];

        rightPointer--;
        while(rightPointer >= 0){
            map[rightPointer] = map[rightPointer + 1] + 1;
            rightPointer--;
        }   

    }

    if(emptyIndexes[emptyIndexes.length -1] != map.length -1){
        let leftPointer = emptyIndexes[emptyIndexes.length -1];

        leftPointer++;

        while(leftPointer < map.length){
            map[leftPointer] = map[leftPointer - 1] + 1; 
            leftPointer++;
        }
    }

    console.log(map.join(' '));
}


/*let input = `12
7 3 0 2 5 6 9 4 0 8 20 0
`;


inputLines = input.split('\n');

solve();
*/

