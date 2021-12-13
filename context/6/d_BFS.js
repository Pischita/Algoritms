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
let sorted =[];

function BFS(i) {

    const planned = [];
    planned.push(i);
    while (planned.length > 0) {
        let v = planned.shift();


        if (colors[v] === 'white') {
            result += (v) + ' ';
            colors[v] = 'gray';

            if (adjacencyList[v]) {
                if( ! sorted[v]){
                    if (adjacencyList[v] && Array.isArray(adjacencyList[v])) {
                        adjacencyList[v].sort((a, b) => {
                            if (a < b) {
                                return -1;
                            } else if (b < a) {
                                return 1
                            } else {
                                return 0;
                            }
                        })
                    }
                    sorted[v] = true;
                }


                adjacencyList[v].forEach((node, idx) => {
                    if (colors[node] === 'white') {
                        planned.push(node);
                    }
                });
            }

            colors[v] = 'black';
            
        }
    }

}

function insertionSort(arr, value){
    arr.push(undefined);
    
    let i = arr.length -1;
    while(i > 0 && value > arr[i-1]){
        arr[i] = arr[i -1];
        i--;
    }

    arr[i] = value;

}


function solve() {
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);

    adjacencyList = new Array(countVertex + 1);
    colors = new Array(countVertex + 1).fill('white');
    sorted = new Array(countVertex + 1).fill(false);

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

    
    let curentVertex = Number(inputLines[countEdges + 1]);

    BFS(curentVertex);
    console.log(result);

}


let input = `2 1
2 1
1`;

inputLines = input.split('\n');

solve();