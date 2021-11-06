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
    let str = inputLines[0];

    let result = [];
    let registered = {};

    let maxSequance = 0;
    let i = 0, j = 0;

    let set = new Set();

    while(j < str.length){
        let letter = str[j];
        if( set.has(letter) ){
            set.delete(str[i] );
            i++;
        }else{
            set.add(letter);
            j++;
            if(set.size > maxSequance){
                maxSequance = set.size;
            }            
        }

    }

   console.log(maxSequance);
    
    
}


let input = `ojodx`;

inputLines = input.split('\n');

solve();