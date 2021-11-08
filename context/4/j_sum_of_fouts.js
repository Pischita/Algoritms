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

function comparator(a, b) {
    let aNum = Number(a);
    let bNum = Number(b);
    if (aNum < bNum) {
        return -1;
    } else if (bNum < aNum) {
        return 1;
    } else {
        return 0;
    }
}

function comparatorGroup(a, b) {
    let aArr = a.split(' ').map(item => Number(item));
    let bArr = b.split(' ').map(item => Number(item));

    if (aArr[0] < bArr[0]) {
        return -1;
    } else if (bArr[0] < aArr[0]) {
        return 1;
    } else {
        if (aArr[1] < bArr[1]) {
            return -1;
        } else if (bArr[1] < aArr[1]) {
            return 1;
        } else {
            return 0;
        }


    }

}

function solve() {
    const countNumbers = Number(inputLines[0]);
    const searchNumber = Number(inputLines[1]);
    const arr = inputLines[2].split(' ').map(item => Number(item)).sort(comparator);

    let result = new Set();
    let history = new Map();


    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            let val = arr[a] + arr[b];
            if (history.has(val)) {
                let vArr = history.get(val);
                vArr.push({
                    a: arr[a],
                    b: arr[b]
                });
            } else {
                history.set(val, [{
                    a: arr[a],
                    b: arr[b]
                }]);
            }
        }
    }

    console.log(history);

    for (let c = 2; c < arr.length - 1; c++) {
        for (let d = c + 1; d < arr.length; d++) {
            let target = searchNumber - (arr[c] + arr[d]);

            if (history.has(target)) {
                let vArr = history.get(target);
                for (let h of vArr) {
                    if (h.a <= h.b && h.b <= arr[c] && arr[c] <= arr[d]) {
                        let res = (`${h.a} ${h.b} ${arr[c]} ${arr[d]}`).split(' ').sort(comparator).join(' ');
                        result.add(res);
                    }
                }
            }
        }
        //history.add(arr[b]);
    }




    result = Array.from(result).sort(comparatorGroup);

    console.log(result.length);

    for (let res of result) {
        console.log(res);
    }

}


let input = `8
10
2 3 2 4 1 10 3 0
`;

inputLines = input.split('\n');

solve();