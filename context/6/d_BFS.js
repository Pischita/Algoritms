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
let distance = [];


class QueueeNode{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
class Queuee{
    constructor(){
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    push(value){
        const node = new QueueeNode(value);
        if(this.head === undefined){
            this.head = node;            
        }

        if(this.tail){
            this.tail.next = node;
        }
        this.tail = node;
        
        
        this.length++;
    }

    pop(){
        if(this.length === 0){
            return undefined;
        }

        let headNode = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0){
            this.head = undefined;
            this.tail = undefined;
        }

        return headNode.value;
    }
}


function BFS(i) {


    const planned = new Queuee;
    planned.push(i);

    while (planned.length > 0) {
        let v = planned.pop();
        if (colors[v] === 'white') {
            result += (v) + ' ';
            colors[v] = 'gray';

            if (adjacencyList[v]) {
                if( ! sorted[v]){
                    if (adjacencyList[v] && Array.isArray(adjacencyList[v])) {
                        adjacencyList[v].sort((a, b) => a-b);
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


function solve() {
    const data = inputLines[0].split(' ');
    const countVertex = Number(data[0]);
    const countEdges = Number(data[1]);

    adjacencyList = new Array(countVertex + 1);
    colors = new Array(countVertex + 1).fill('white');
    sorted = new Array(countVertex + 1).fill(false);
    distance = new Array(countVertex + 1).fill(false);

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


let input = `4 4
1 2
2 3
3 4
1 4
3`;

inputLines = input.split('\n');

solve();