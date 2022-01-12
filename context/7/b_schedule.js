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
    const numberOfLessons = Number(inputLines[0]);
    const lessons = [];


    for(let i = 1; i <= numberOfLessons; i++){
        let data = inputLines[i].split(' ');
        lessons.push({
            start: Number(data[0]),
            end: Number(data[1]),
        });
    }

    lessons.sort((a,b) => {
        if(a.end < b.end){
            return -1;
        }else if(b.end < a.end){
            return 1;
        }else {
            if(a.start < b.start){
                return -1;
            }else if(b.start < a.start){
                return 1;
            }
        }
    });

    let result = [];
    let timeEnd = 0;

   
    lessons.forEach(item =>{
        if(timeEnd <= item.start){
            result.push(item);
            timeEnd = item.end;
        }
    });


    console.log(result.length);
    result.forEach(item => {
        console.log(`${item.start} ${item.end}`);
    });
    
}


let input = `7
19 19
7 14
12 14
8 22
22 23
5 21
9 23
`;

inputLines = input.split('\n');

solve();

