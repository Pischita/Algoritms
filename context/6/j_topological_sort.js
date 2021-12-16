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
let graph = [];
let stack = [];
const order = [];

function topSort(i){
    colors[i] === 'gray';
    if(Array.isArray(graph[i]) ){
        graph[i].forEach(vertex =>{
            if( colors[vertex] === 'white' ){
                topSort(vertex);
            }
        });
    }

    colors[i] = 'black';
    order.push(i);
}


function solve() {
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);

    graph = new Array(countVertex + 1);
    colors = new Array(countVertex + 1).fill('white');

    for (let i = 1; i <= countEdges; i++) {
        let edgeData = inputLines[i].split(' ');
        let vertex = Number(edgeData[0]);
        let vertex2 = Number(edgeData[1]);
        if (graph[vertex] === undefined) {
            graph[vertex] = [];
        }
        graph[vertex].push(vertex2);       
    }

    let result = '';
    for (let i = 1; i <= countVertex; i++) {
        if( colors[i] ==='white' ){
            topSort(i);          
        }
    }

   while(order.length > 0){
       result += order.pop() + ' ';
   }
        
    console.log(result);  


}


let input = `5 3
3 2
3 4
2 5

`;

inputLines = input.split('\n');

solve();