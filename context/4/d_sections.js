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
    let countRows = inputLines[0];

    let result = {};

    for(let i = 0; i < countRows; i++){
        let str = inputLines[i + 1];
        if( !result[str]){
            result[str] = 0;
        }

        result[str] += 1;
    }

    //console.log(result);
    //Object.keys(result).forEach(key => console.log(key));

    for(let key in result){
        console.log(key);
    }
        
}


let input = `8
вышивание крестиком
рисование мелками на парте
настольный керлинг
настольный керлинг
кухня африканского племени ужасмай
тяжелая атлетика
таракановедение
таракановедение
`;

inputLines = input.split('\n');

solve();