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

    for(let i = 0; i < s1.length; i++){
        dp[i] = 1;
    
        for(let j = 0; j < i; j++){
            if(s1[j] < s1[i]){
                if(1+dp[j] > dp[i]){
                    dp[i] = 1+dp[j];
                }    
            }
        }
    }
   
    

    let cuttentValue = 0;
    let result = [];
    let maximumLength = 1;

    for(let i = 0; i < dp.length; i++){
        if(dp[i] > maximumLength){
            maximumLength = dp[i];
        }

        if(cuttentValue < dp[i]){
            result.push(i + 1);
            cuttentValue = dp[i];
        }        
    }

    console.log(maximumLength);
    console.log(result.join(' '));
}

let input = `5
4 2 9 1 13



`;

inputLines = input.split('\n');

solve();


