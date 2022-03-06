/*
ID правильного решения - 65790848

Раскодировка строки происходит рекурсивно функцией "decode"
и после раскодировки происходит определение общего префикса.

Пространсвенная сложность алгоритма O(N), где N - количество строк
Временная сложность алгоритма O(N * m ), где m длина строки

*/

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


function decode(str, startIndex = 0){
    let result = '';

    let i = startIndex;
    let multiplier = 0;
    while(i < str.length){
        let currentSymbal = str[i];

        let isNumber = Number(currentSymbal) >= 0 && Number(currentSymbal) <= 9;
        
        if(isNumber){
            multiplier = Number(currentSymbal);
        }else if(currentSymbal === '['){
            let expression = decode(str, i+1);
            while(multiplier > 0){
                result += expression.text;
                multiplier--;
            }
            i = expression.lastIndex;
        }else if(currentSymbal === ']'){
            break;
        }else{
            result += currentSymbal;
        }

        i++;
    }

    return {text:result, lastIndex:i};
}

function commonPrefix(str1, str2){
    let result = '';
    for(let i = 0; i < str1.length && str2.length; i++){
        if(str1[i] === str2[i]){
            result +=str1[i]
        }else{
            break;
        }
    }

    return result;    
}

function solve() {
    const countRows = Number(inputLines[0]);
    let strings = [] 
    for (let i = 1; i <= countRows; i++) {
        let str = inputLines[i];
        strings.push(decode(str).text );
    }

    currentPrefix = strings[0];
     for(let i = 1; i < strings.length; i++){
      
        currentPrefix = commonPrefix(currentPrefix, strings[i] ); 
        
    }
    console.log(currentPrefix);
}
