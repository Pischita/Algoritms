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

    let countBullions = Number(data[0]);
    let capacity = Number(data[1]);
    
    let bullions = inputLines[1].split(' ').map(value =>Number(value));

    let dp = [];

    for(let i = 0; i < countBullions; i++){
        dp.push(new Array(capacity+1).fill(0));
        dp[i][0] = bullions[i];
    }
    
    for(let i = 0; i < countBullions; i++){
        let cost = dp[i][0];
        
        for(j = 1; j <= capacity; j++){
            if(j < cost){
                dp[i][j] = 0;
            }else if(j === cost){
                dp[i][j] = cost;
            }else{
                let topValue = 0;
                let partValue = 0;
                if(i > 0){
                    topValue = dp[i-1][j];

                    let partIndex = j - cost;
                    if(partIndex > 0){
                        partValue = dp[i-1][partIndex] + cost;
                    }
                }    
                

                dp[i][j] = Math.max(dp[i][j-1], topValue, partValue );
            }

        }
        
    }

   console.log(dp);
   if(capacity > 0){
      console.log(dp[countBullions-1][capacity]); 
   }else{
       console.log(0);
   }

    

   
}


let input = `10 100
85 86 12 45 54 12 49 76 39 80
`;

inputLines = input.split('\n');

solve();

