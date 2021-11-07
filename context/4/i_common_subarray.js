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
    let firstTeam = inputLines[1].split(' ');
    let secondTeam = inputLines[3].split(' ');

    let maxMatch = 0;
    for(let i = 0; i < firstTeam.length; i++){

        let match = 0;
        for(let j = 0; j < secondTeam.length; j++){
            let match = 0;
            if(firstTeam[i] === secondTeam[j]){
                while(firstTeam[i + match] === secondTeam[j+ match] && i + match < firstTeam.length && j + match < secondTeam.length){
                    match++;
                }
            }

            if(match > maxMatch){
                maxMatch = match;
            }
        }
    
    }

    console.log(maxMatch);

    
}


let input = `1
1
1
1`;

inputLines = input.split('\n');

solve();