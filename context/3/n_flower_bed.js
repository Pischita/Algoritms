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
    let resultRanges = [];
    for (let i = 0; i < countGardeners; i++) {
        let range = inputLines[i + skipLines].split(' ');
        let left = Number(range[0]);
        let right = Number(range[1]);

        let newRange = {
            left: left,
            right: right
        };
        for (let resIndex = 0; resIndex < resultRanges.length; resIndex++){
            let item = resultRanges[resIndex];
            
            if ( (left >= item.left && left <= item.right)
                    || (right >= item.left && right < item.right)
                    || (left <= item.left && right >= item.right) ) {

                newRange.left = Math.min(item.left, newRange.left);
                newRange.right = Math.max(item.right, newRange.right);
             
                resultRanges.splice(resIndex, 1);
                resIndex--;
            }
        }

        resultRanges.push(newRange);        
    }

    resultRanges = resultRanges.sort((a, b) => {
        if (a.left < b.left) {
            return -1;
        } else if (b.left < a.left) {
            return 1
        } else {
            return 0;
        }
    });

    strOld = '';
    for (let range of resultRanges) {
        let str = `${range.left} ${range.right}`;
        if(strOld != str){
            console.log(str);
        }

        strOld = str;
    }
}


let input = `6
1 3
3 5
4 6
5 6
2 4
7 10`;

inputLines = input.split('\n');

solve();