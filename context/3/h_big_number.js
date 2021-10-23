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
        let ostDigit = a[minLength] || b[minLength];
        let lastDigit = a[minLength - 1];
        if (a.length > b.length) {
            if (ostDigit > lastDigit) {
                return -1;
            } else if (ostDigit <= lastDigit) {
                return 1;
            } else {
                return 0
            }
        } else if (a.length < b.length) {
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


let input = `100
82 941 861 954 894 823 921 1000 831 943 937 919 980 944 828 825 857 810 83 947 868 964 998 95 980 839`;

input = `100
82 822`;



inputLines = input.split('\n');

solve();