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

function DFS(i, adjacencyList) {
	const WHITE = 0;
    const GRAY = 1;
    const BLACK = 2;
	let result = '';
    const colors = new Array(adjacencyList.length).fill(WHITE);
    const sorted = new Array(adjacencyList.length).fill(false);
    const stack = [];
    stack.push(i);
    while (stack.length > 0) {
        let v = stack.pop();
        if (colors[v] === WHITE) {
            result += (v) + ' ';
            colors[v] = GRAY;
            if (adjacencyList[v]) {
                if( ! sorted[v]){
                    if (adjacencyList[v]) {
						adjacencyList[v].sort((a, b) => b - a);
					}
                    sorted[v] = true;
                }
                adjacencyList[v].forEach((node, idx) => {
                    if (colors[node] === WHITE) {
                        stack.push(node);
                    }
                });
            }
            stack.push(v);
        } else if (colors[v] === GRAY) {
            colors[v] = BLACK;
        }
    }
    return result;
}
function solve() {
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);
    let adjacencyList = new Array(countVertex + 1);
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
    try {
    	console.log(DFS(curentVertex, adjacencyList));
    } catch (error) {
        console.log(error);
    }
}