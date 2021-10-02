// id решения 53655935
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);



function solve() {
    let maxKeys = Number(inputLines[0]);

    let symbols = {};
    const countLines = 4;
    const countKeys = 4;
    const countPlayers = 2;

    for(let i = 0; i < countLines; i++){
        let str = inputLines[i+1];
        for(let j = 0; j < countKeys; j++){
            let digit = str[j];
            if(symbols[digit]){
                symbols[digit] += 1;
            }else{
                symbols[digit] = 1;
            }
        }
    }

    let result = 0;
    Object.keys(symbols).forEach(key =>{
        if(key != '.' && symbols[key] <= maxKeys * countPlayers){
            result++;
        }
    });



    console.log(result);
}


/*let input = `3
1231
2..2
2..2
2..2`;


inputLines = input.split('\n');

solve();
*/


