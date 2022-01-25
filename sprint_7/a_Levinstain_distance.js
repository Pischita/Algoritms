/*
ID правильного решения - 64270722	

Для решения используется алгоритм используемый в этой статье
https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5_%D0%9B%D0%B5%D0%B2%D0%B5%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD%D0%B0

Пространственная сложность алгоритма  O(|S1|*|S2|) 
Временная сложность алгоритма O(|S1|*|S2|) 

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

function solve() {
    const s1 = ['', ...inputLines[0].split('')];
    const s2 = ['', ...inputLines[1].split('')];
   
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

    console.log(dp[s1.length -1][s2.length-1]); 
}
