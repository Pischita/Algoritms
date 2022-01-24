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

function findPartiion(arr, n) {
    
    let i, j;

    let sum = arr.reduce((prevValue, item)=>prevValue += item, 0)
    

    if (sum % 2 != 0)
        return false;

    let part = new Array(parseInt(sum / 2 + 1, 10));

    const middle = parseInt(sum / 2, 10);
  
    for (i = 0; i <= middle; i++) {
        part[i] = false;
    }

    for (i = 0; i < n; i++) {
        for (j = middle; j >= arr[i]; j--) {
            if (part[j - arr[i]] === true || j === arr[i]){
                part[j] = true;
            }
                
        }
    }
    return part[middle];
}

function solve() {
    const sequance = inputLines[1].split(' ').map(item => Number(item));

    if (findPartiion(sequance, sequance.length) == true) {
        console.log('True');
    } else {
        console.log('False');
    }

}

let input = `4
1 5 7 1
`;

inputLines = input.split('\n');

solve();