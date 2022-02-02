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

function levinstainDistance(str1, str2){
    const s1 = ['', ...str1.split('')];
    const s2 = ['', ...str2.split('')];
   
    let dp = new Array(s1.length );
    for(let i = 0; i < dp.length; i++){
        dp[i] = new Array(s2.length).fill(0);
        dp[i][0] = i;
    }

    for( let j = 0; j < dp[0].length; j++){
        dp[0][j] = j;
    }



    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[i].length; j++){
            if(s1[i] === s2[j]){
                dp[i][j] = dp[i-1][j-1]; 
            }else{                
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1] ) + 1;
            }
        } 
    }

    return dp[s1.length -1][s2.length-1]; 
}

function solve() {
    let result = levinstainDistance(inputLines[0], inputLines[1]);
    if(result <= 1){
        console.log('OK');
    }else{
        console.log('FAIL');
    }
    
}

let input = `mama
papa`;

inputLines = input.split('\n');

solve();