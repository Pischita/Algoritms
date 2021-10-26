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
    for(let i = 0; i < countGardeners; i++){
        let range = inputLines[i + skipLines].split(' ');
        let left = Number(range[0]);
        let right = Number(range[1]) ;
        
        let existingRanges = resultRanges.filter(item => {
           return (left >= item.left && left <= item.right)
                || (right >= item.left && right < item.right)
                || (left <=item.left && right >= item.right);

        });

        let newRange = {
            left: left,
            right: right
        };
    
        for(let existRange of existingRanges){
            newRange.left = Math.min(existRange.left, newRange.left);
            newRange.right = Math.max(existRange.right, newRange.right);

             let index = resultRanges.indexOf(existRange);
             if(index >=0){
                 resultRanges.splice(index, 1);
             }
        }

        resultRanges.push(newRange);
    }

    resultRanges = resultRanges.sort((a, b)=>{
        if(a.left < b.left){
            return -1;
        }else if(b.left < a.left){
            return 1
        }else {
           return 0;
        }
    });
    for(let range of resultRanges){
        console.log(`${range.left} ${range.right}`);
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