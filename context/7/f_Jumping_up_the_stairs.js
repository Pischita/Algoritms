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
    let data = inputLines[0].split(' ');

    let countSteps = Number(data[0]);
    let distance = Number(data[1]);
    
    let dp = new Array(countSteps+ 1);
    dp[1] = 0;
    dp[2] = 1;

    let summ = dp[2];
    for(let i = 3; i < dp.length; i++){
       if(i <= distance+1){
            dp[i] = summ + 1;
        }else{
            dp[i] = summ;
        }

        if( (i - (distance + 1) ) > 0 ){
            summ -= dp[i - distance];
        }

        summ += dp[i];
        
    }

        console.log(dp[countSteps]);
    

}


let input = `2 2
`;

inputLines = input.split('\n');

solve();

