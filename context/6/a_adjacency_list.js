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

    const adjacencyList = new Array(countVertex + 1);

    for(let i = 1; i <= countEdges; i++){
        let edgeData = inputLines[i].split(' ');
        let vertex = Number(edgeData[0]);
        if(adjacencyList[vertex] === undefined){
            adjacencyList[vertex] = [];
        }
        adjacencyList[vertex].push(edgeData[1]);
    }

    for (let i = 1; i <= countVertex; i++){
        let result = '0';
        if(adjacencyList[i]){
            result = `${adjacencyList[i].length} ${adjacencyList[i].join(' ')}`;
        }
        console.log(result);
    }
    
}


let input = `5 3
1 3
2 3
5 2
`;

inputLines = input.split('\n');

solve();