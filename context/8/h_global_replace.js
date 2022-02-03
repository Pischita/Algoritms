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

function prefixFunction(str){
    const n = str.length;
    const pi = new Array(n).fill(0);

    for(let i = 1; i< n; i++){
        let j = pi[i-1];

        while(j > 0 && str[j] != str[i]){
            j = pi[j-1];
        }

        if(str[i] === str[j]){
            j += 1;
        }

        pi[i] = j;
    }
    return pi;

}

function solve() {
    const str = inputLines[0];
    const template = inputLines[1];
    const replace = inputLines[2];

    let prefFunction = prefixFunction(template+'#'+str);

    prefFunction = prefFunction.slice(template.length+1);  

    const templateLength = template.length;
    for(let i = prefFunction.length -1; i>=0; i--){
        if(prefFunction[i] === templateLength){
            for(let j = 0; j < templateLength; j++){
                
                prefFunction[i] = templateLength;
                if( j != templateLength -1){
                    i--;
                }
                
            }
        }
    }

    const result = [];
    for(let i = 0; i < prefFunction.length; i++){
        if(prefFunction[i] === templateLength){
            result.push(replace);
            i+= templateLength-1;
        }else{
            result.push(str[i]);
        } 
    }

    //console.log(prefFunction);
    console.log(result.join(''));
}


let input = `jxnjyztjnijmijyztjjyztjjyztjos
jyztj
boz
`;

inputLines = input.split('\n');

solve();