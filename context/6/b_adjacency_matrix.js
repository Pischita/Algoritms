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
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);

    const adjacencyList = new Array(countVertex);
    for(let idx = 0; idx < countVertex; idx++){
        adjacencyList[idx] = new Array(countVertex);
        for(let j = 0; j < countVertex; j++){
            adjacencyList[idx][j] = 0;
        }
    }

    for(let i = 1; i <= countEdges; i++){
        let edgeData = inputLines[i].split(' ');
        let vertex = Number(edgeData[0] - 1);
        let vertex2 = Number(edgeData[1] - 1);
        adjacencyList[vertex][vertex2]= 1;
    }

    for (let i = 0; i < countVertex; i++){
        console.log(adjacencyList[i].join(' '));
    }
    
}


let input = `5 3
1 3
2 3
5 2
`;

inputLines = input.split('\n');

solve();