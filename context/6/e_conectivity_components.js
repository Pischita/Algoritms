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
let connectivity = [];

function DFS(i, component) {
    const stack = [];
    stack.push(i);

    while (stack.length > 0) {
        let v = stack.pop();
        if (colors[v] === 'white') {
            result += (v) + ' ';
            colors[v] = 'gray';
            connectivity[component].push(v);

            if (adjacencyList[v]) {
                if( ! sorted[v]){
                    if (adjacencyList[v] && Array.isArray(adjacencyList[v])) {
                        adjacencyList[v].sort((a, b) => {
                            if (a < b) {
                                return 1;
                            } else if (b < a) {
                                return -1
                            } else {
                                return 0;
                            }
                        })
                    }
                    sorted[v] = true;
                }


                adjacencyList[v].forEach((node) => {
                    if (colors[node] === 'white') {
                        stack.push(node);
                    }
                });
            }

            stack.push(v);
        } else if (colors[v] === 'gray') {
            colors[v] = 'black';
        }
    }

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

    for(let i = 1; i <= countVertex; i++){
        if(colors[i] === 'white'){
            let component = connectivity.length;
            connectivity[component] = [];
            DFS(i, component);
        }
    }

    
    let countSegments = connectivity.length
    console.log(countSegments);
    for(let i = 0; i < countSegments; i++){
        connectivity[i].sort((a, b) =>{
            if(a < b){
                return -1;
            }else if(b < a){
                return 1;
            }else{
                return 0;
            }
        } );
        console.log(connectivity[i].join(' '));
    }    
}


let input = `10 7
2 1
5 8
5 3
9 6
1 9
6 10
7 2

`;

inputLines = input.split('\n');

solve();
