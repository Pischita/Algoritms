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

const COLORS = {
    WHITE : 0,
    GRAY: 1,
    BLACK: 2,
}

let edges = [];
let colors = [];

function findPath(startVertex){
    let result = 'YES';
    const stack = [];
    stack.push(startVertex);
    
    while(stack.length > 0){
        let curentVertex = stack.pop();
        if(colors[curentVertex] === COLORS.WHITE){
            colors[curentVertex] = COLORS.GRAY;
            stack.push(curentVertex);

            let curentEdges = edges[curentVertex];
            for(let i = curentEdges.length -1; i >= 0; i--){
                let value = curentEdges[i];
                if(value > 0 ){
                    if(colors[i] === COLORS.WHITE){
                        stack.push(i)
                    }else if(colors[i] === COLORS.GRAY){
                        result = 'NO';
                    }
                }
                
            }
        }else if(colors[curentVertex] === COLORS.GRAY){
            colors[curentVertex] = COLORS.BLACK;
        }
    }

    return result;

}

function solve() {
    const countVertex = Number(inputLines[0]);
    
    colors = new Array(countVertex).fill(COLORS.WHITE);

    for(let i = 0; i < countVertex; i++){
        edges[i] = new Array(countVertex);
    }

    for(let i = 0; i < countVertex; i++){
        for(let j = 0; j < countVertex; j++){
            edges[i][j] = 0;

        }
    }

    const skipLines = 1;
    for(let i = 0; i < countVertex -1; i++){
        let str = inputLines[skipLines + i];

        let start = i+1;

        for(let j = 0; j < str.length; j++){
            let typeRailway = str[j];
            if(typeRailway==='B'){
                edges[i][start+j] = 1;
            }else if(typeRailway==='R'){
                edges[start+j][i] = 1;
            }
        }
    }

    let result = findPath(0);

    console.log(result);    
}


let input = `10
RRBRRBRRR
BBBBBBRB
BBRBRRR
RRBRRR
RBRRR
BBRR
RRR
RR
B`;

inputLines = input.split('\n');

solve();