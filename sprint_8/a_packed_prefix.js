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

function prefixFunction(str, firstPosition = 1) {
    const n = str.length;
    const pi = new Array(n).fill(0);

    for (let i = firstPosition; i < n; i++) {
        let j = pi[i - 1];

        while (j > 0 && str[j] != str[i]) {
            j = pi[j - 1];
        }

        if (str[i] === str[j]) {
            j += 1;
        }

        pi[i] = j;
    }
    return pi;

}

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


function prefix(prefixVector, str){
    let result = '';

    let index = 0;
    let size = 0;
    for(let i = 0; i < prefixVector.length; i++){
        if(prefixVector[i] > size){
            size = prefixVector[i];
            index = i;
        }
    }

    i = index - size + 1;
    while(i <= index){
        result +=str[i];
        i++;
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

    //console.log(strings);

    currentPrefix = strings[0];
    for(let i = 1; i < strings.length; i++){
        let str = currentPrefix + '#' + strings[i]
        let pfunc = prefixFunction(str, currentPrefix.length + 1);
        currentPrefix = prefix(pfunc, str);
    }

    console.log(currentPrefix);
}


let input = `3
2[a]2[ab]
3[a]2[r2[t]]
a2[aa3[b]]`;

inputLines = input.split('\n');

solve();