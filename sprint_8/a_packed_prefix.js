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

function decode(str){
    let result = '';

    let i = 0;
    let multiplier = 0;
    while(i < str.length){
        let currentSymbal = str[i];

        let isNumber = Number(currentSymbal) >= 0 && Number(currentSymbal) <= 9;
        
        if(isNumber){
            multiplier = Number(currentSymbal);
        }else if(currentSymbal === '['){
            let expression = decode(str.substring(i+1));
            while(multiplier > 0){
                result += expression;
                multiplier--;
            }
            i += expression.length + 1;
            while(str[i+1] === ']'){
                i++;
            }
        }else if(currentSymbal === ']'){
            break;
        }else{
            result += currentSymbal;
        }

        i++;
    }

    return result;
}

function decodeString(str) {

    let result = [];

    let i = 0;
    let subStr = '';
    while (i < str.length) {
        let currentSymbol = str[i];

        let isNumber = Number(str[i]) >= 0 && Number(str[i]) <= 9;

        if (isNumber) {
            if (subStr) {
                result.push(subStr);
                subStr = '';
            }
            result.push(str[i]);
        } else if (currentSymbol === ']') {
            if (subStr) {
                result.push(subStr);
                subStr = '';
            }
            result.push('+');
        } else if (currentSymbol === '[') {
            result.push('*');
        } else {
            subStr += currentSymbol;
        }
        i++;
    }


    let resultString = '';
    let sign = '';
    subStr = ''
    for(let i = result.length -1; i >= 0; i--){
        let isNumber = Number(result[i]) >= 0 && Number(result[i]) <= 9;

        if(isNumber){
            let multiplier = Number(result[i] );
            while(multiplier >= 1){
                resultString = subStr + resultString;
                multiplier--;
            }
        }else if(result[i] ==='+'){
            
        }else if(result[i]==='*') {
            sign = result[i];
        }else{
            subStr = result[i];
        }

    }

    console.log(result);
    console.log(resultString);

    return resultString;

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
        strings.push(decode(str) );
    }

    console.log(strings);

    currentPrefix = strings[0];
    for(let i = 1; i < strings.length; i++){
        let str = currentPrefix + '#' + strings[i]
        let pfunc = prefixFunction(str, currentPrefix.length + 1);
        currentPrefix = prefix(pfunc, str)

    }

    console.log(currentPrefix);
}


let input = `1
1[1[a]]1[b]1[1[c]]1[1[d]1[e]]1[f]
`;

inputLines = input.split('\n');

solve();