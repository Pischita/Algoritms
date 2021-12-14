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

let edges = [];

function solve() {
    let graphData = inputLines[0].split(' ');
    const countVertex = Number(graphData[0]);
    const countEdges = Number(graphData[1]);

    edges = new Array(countVertex);
    for(let i = 0; i<countVertex; i++ ){
        edges[i] = new Array(countVertex);
    }

    let skipLines = 1;
    for(let i=0; i < countEdges; i++){
        let [v1, v2, weight] = inputLines[i + skipLines].split(' ');
        edges[Number(v1)-1][Number(v2)-1] = Number(weight);
    }  

    console.log(edges);

}


let input = `4 4
1 2 1
2 3 3
3 4 5
1 4 2`;

inputLines = input.split('\n');

solve();