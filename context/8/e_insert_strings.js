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
    let result = inputLines[0].split('');
    let countInserts = Number(inputLines[1]);
    
    let arrStrings = [];
    for(let s = 0; s < countInserts; s++){
        let stringData = inputLines[2 + s].split(' ');
        let str = stringData[0].split('');
        const position = Number(stringData[1]);

        arrStrings.push(
            {str: str, position: position}
        );
    }

    arrStrings.sort((a, b) => b.position - a.position);


    for(let s = 0; s < countInserts; s++){
        let stringData = arrStrings[s];
        let str = stringData.str
        const position = stringData.position;

        
        for(let i = 0; i < str.length; i++){
            result.push('');
        }

        for( let i = result.length - 1; i - str.length >= position; i--){
            result[i] = result[i - str.length];
            result[i - str.length] = '';
        }
        
        for(let i = 0; i < str.length; i++){
            result[position + i] = str[i];
        }

    }

    console.log(result.join('') );
}


let input = `kukareku
2
p 1
q 2

`;

inputLines = input.split('\n');

solve();