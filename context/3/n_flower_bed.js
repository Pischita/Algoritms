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

    inputLines.splice(0, 1);
    let ranges = inputLines.map(item => {
        let str = item.split(' ');
        return {
            left: Number(str[0]),
            right: Number(str[1]),
        }
    });

    ranges = ranges.sort((a, b)=>{
        if(a.left < b.left){
            return -1;
        }else if(b.left < a.left){
            return 1;
        }else{
            return 0;
        }

    });

    let resultRanges = [ranges[0]];
    let currentResultIndex = 0;
    for(let range of ranges){
        
        let item = resultRanges[currentResultIndex];

        if ( (range.left >= item.left && range.left <= item.right)
                    || (range.right >= item.left && range.right < item.right) ) {

            if(item.right < range.right){
               item.right = range.right;
            }
                        
        }else{
            resultRanges.push(range);
            currentResultIndex++;
        }
    }
    
    
    resultRanges.forEach(item =>{
        console.log(`${item.left} ${item.right}`);
    });
}


let input = `4
7 8
7 8
2 3
6 10`;

inputLines = input.split('\n');

solve();