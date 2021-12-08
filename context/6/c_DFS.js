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

function DFS(i){
    colors[i] = 'gray';
    result += (i+1)+ ' ';
    adjacencyList[i].forEach((node, idx) => {
        if(node === 1 && colors[idx] === 'white'){
            DFS(idx);
        }        
    });
    colors[i] = 'black';    
}


function solve() {
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);

    adjacencyList = new Array(countVertex);
    for(let idx = 0; idx < countVertex; idx++){
        colors.push('white');
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
        adjacencyList[vertex2][vertex]= 1;
    }

    let curentVertex = Number(inputLines[countEdges + 1]);
    DFS(curentVertex - 1);
    console.log(result);

    // for (let i = 0; i < countVertex; i++){
    //     console.log(adjacencyList[i].join(' '));
    // }
    
}


let input = `2 1
1 2
1

`;

inputLines = input.split('\n');

solve();