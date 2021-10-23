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

function compare(a, b) {
    let minLength = Math.min(a.length, b.length);
    const mA = Number(a.substr(0, minLength));
    const mB = Number(b.substr(0, minLength));

    if (mA > mB) {
        return -1;
    } else if (mA < mB) {
        return 1;
    } else {
        //
        let ostDigit;
        let lastDigit = a[0];
        if (a.length > b.length) {
            ostDigit = a[a.length -1];
            if (ostDigit >= lastDigit) {
                return -1;
            } else if (ostDigit <= lastDigit) {
                return 1;
            } else {
                return 0
            }
        } else if (a.length < b.length) {
            ostDigit = b[b.length-1];
            if (ostDigit > lastDigit) {
                return 1;
            } else if (ostDigit <= lastDigit) {
                return -1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }

    }
}


function solve() {
    const countNumbers = inputLines[0];
    let numbers = inputLines[1].split(' ');

    numbers = numbers.sort(compare);
    console.log(numbers.join(''));
}


let input = `38
82 83 89 88 8
`;





inputLines = input.split('\n');

solve();