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
    let s1 = inputLines[1].split(' ').map(item =>Number(item));
   
    let dp = new Array(s1.length);
    let path = new Array(s1.length);

    for(let i = 0; i < s1.length; i++){
        dp[i] = 1;
        path[i] = -1;
    
        for(let j = 0; j < i; j++){
            if(s1[j] < s1[i]){
                if(1+dp[j] > dp[i]){
                    dp[i] = 1+dp[j];
                    path[i] = j;
                }    
            }
        }
    }
   
    

    let cuttentValue = 0;
    let result = [];
    let maximumLength = 1;
    let maximumIndex = 0;

    for(let i = 0; i < dp.length; i++){
        if(dp[i] > maximumLength){
            maximumLength = dp[i];
            maximumIndex = i;
        }
    }

    let i = maximumIndex;
    if(i === 0){
        result.push(1);
    }
    
    while(i > 0){
        result.push(i+1);
        i = path[i];

        if(i === 0){
            result.push(i+1);
        }
    }


    console.log(maximumLength);
    console.log(result.reverse().join(' '));
}

let input = `1
5



`;

inputLines = input.split('\n');

solve();


