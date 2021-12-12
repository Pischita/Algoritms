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
let sorted = [];
let time = 0;
let entry = [];
let leave = [];

// function DFS(i){
//     entry[i] = time++;
//     colors[i] = 'gray';
//     if (adjacencyList[i]) {
//         adjacencyList[i].forEach((node, idx) => {
//             if (colors[node] === 'white') {
//                 DFS(node);
//             }
//         });
//     }
//     leave[i] = time++;
//     colors[i] = 'black';
// }

function DFS(i) {
    const stack = [];
    stack.unshift(i)
    while (stack.length > 0) {
        let v = stack.shift();
        if (colors[v] === 'white') {
            colors[v] = 'gray';
            entry[v] = time++;
            stack.unshift(v);
            if (Array.isArray(adjacencyList[v])) {
                adjacencyList[v].forEach(vertex => {
                    if (colors[vertex] === 'white') {
                        stack.unshift(vertex);
                    }
                });
            }

        } else if (colors[v] === 'gray') {
            colors[v] = 'black';
            leave[v] = time++;
        }
    }
}


function insertionSort(arr, value) {
    arr.push(undefined);

    let i = arr.length - 1;
    while (i > 0 && value > arr[i - 1]) {
        arr[i] = arr[i - 1];
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
    leave = new Array(countVertex + 1).fill(undefined);
    entry = new Array(countVertex + 1).fill(undefined);

    for (let i = 1; i <= countEdges; i++) {
        let edgeData = inputLines[i].split(' ');
        let vertex = Number(edgeData[0]);
        let vertex2 = Number(edgeData[1]);
        if (adjacencyList[vertex] === undefined) {
            adjacencyList[vertex] = [];
        }
        //adjacencyList[vertex].push(vertex2);
        insertionSort(adjacencyList[vertex], vertex2);
    }


    DFS(1);
    for (let i = 1; i <= countVertex + 1; i++) {
        if (entry[i] != undefined && leave[i] != undefined) {
            console.log(`${entry[i]} ${leave[i]}`);
        }
    }


}


let input = `6 8
2 6
1 6
3 1
2 5
4 3
3 2
1 2
1 4
`;

inputLines = input.split('\n');

solve();