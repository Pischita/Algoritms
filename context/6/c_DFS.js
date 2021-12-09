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

let colors = [];
let adjacencyList = [];
let result = '';

function DFS(i) {
    colors[i] = 'gray';
    result += (i) + ' ';
    if (adjacencyList[i]) {
        adjacencyList[i].forEach((node, idx) => {
            let v = Number(node);
            if (colors[v] === 'white') {
                DFS(v);
            }
        });
    }

    colors[i] = 'black';
}


function solve() {
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);

    adjacencyList = new Array(countVertex + 1);
    colors = new Array(countVertex + 1).fill('white');

    for (let i = 1; i <= countEdges; i++) {
        let edgeData = inputLines[i].split(' ');
        let vertex = Number(edgeData[0]);
        let vertex2 = Number(edgeData[1]);
        if (adjacencyList[vertex] === undefined) {
            adjacencyList[vertex] = [];
        }
        adjacencyList[vertex].push(vertex2);

        if (adjacencyList[vertex2] === undefined) {
            adjacencyList[vertex2] = [];
        }
        adjacencyList[vertex2].push(vertex);
    }

    for (let i = 1; i <= countVertex; i++) {
        if(adjacencyList[i] && Array.isArray(adjacencyList[i])){
            adjacencyList[i].sort((a, b) => {
            if (a < b) {
                return -1;
            } else if (b < a) {
                return 1
            } else {
                return 0;
            }
        })
        }
        
    }


    let curentVertex = Number(inputLines[countEdges + 1]);
    DFS(curentVertex);
    console.log(result);

    // for (let i = 0; i < countVertex; i++){
    //     console.log(adjacencyList[i].join(' '));
    // }

}


let input = `7 6
7 4
7 3
6 7
7 2
5 7
7 1
1
`;

inputLines = input.split('\n');

solve();