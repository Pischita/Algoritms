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
    let s1 = [0, ...inputLines[1].split(' ')];
    let s2 = [0, ...inputLines[3].split(' ')];

    let dp = new Array(s1.length);
    for(let i = 0; i < s1.length; i++){
        dp[i] = new Array(s2.length).fill(0);
    }


    for(let i = 1; i < s1.length; i++){
        for(let j = 1; j < s2.length; j++){
            let prevValue = dp[i][j-1];
            let topValue = dp[i-1][j]; 
            let diagonal = dp[i-1][j-1]

            if(s1[i] === s2[j]){
                //dp[i][j] = 1 + Math.max(topValue, prevValue);
                dp[i][j] = 1 + diagonal;
            }else{
                dp[i][j] = Math.max(topValue, prevValue);
            }
        }
    }

    //console.log(dp);
    let coincidences = dp[s1.length -1][s2.length-1];
    console.log(coincidences);
    if( coincidences > 0){
        let temp = coincidences;
        let i = s1.length - 1;
        let j = s2.length - 1;

        s1Indexes = [];
        s2Indexes = [];
        while(temp > 0){
            if(s1[i] === s2[j]){
                temp = dp[i-1][j-1];
                s1Indexes.push(i);
                s2Indexes.push(j);
                i--;
                j--;
            }else{
                if(dp[i][j] === dp[i-1][j]){
                    i--;
                }else{
                    j--;
                }
            }
        }

        console.log(s1Indexes.reverse().join(' '));
        console.log(s2Indexes.reverse().join(' '));

    }

    


}

let input = `5
4 9 2 4 6
7
9 4 0 0 2 8 4


`;

inputLines = input.split('\n');

solve();


