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
    //console.log(dp)
 
}

let input = `pwhsvrojcj
uepwplklojcj
`;

inputLines = input.split('\n');

solve();


