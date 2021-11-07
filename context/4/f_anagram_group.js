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


function isAnagram(a, b){
    return a.split('').sort().join('') === b.split('').sort().join('');
}

function solve() {
    let countWords = Number(inputLines[0]);

    let words = inputLines[1].split(' ');

    words = words.map(item => item.split('').sort().join(''));

    let definited = {};

    for(let i = 0; i < countWords; i++){
        if(definited[i]){
            continue;
        }

        let word = words[i];
        let result = ''+ i;
        for(j = i+1; j < countWords; j++){
            let nextWord = words[j];
            if( word === nextWord ){
                definited[j] = true;
                result += ` ${j}`
            }

        }

        console.log(result);
    }

    
}


let input = `6
tan eat tea ate nat bat`;

inputLines = input.split('\n');

solve();