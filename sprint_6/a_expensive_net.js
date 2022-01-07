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

let edges = [];
let spanning_tree = [] //# Рёбра, составляющие MST.

let added = [] // # Множество вершин, уже добавленных в остов.
let not_added = [] //  # Множество вершины, ещё не добавленных в остов.  

class Edge{
    constructor(v1, v2, weight){
        if(v1 < v2){
            this.start = v1; 
            this.end = v2;
        }else{
            this.start = v2; 
            this.end = v1;
        }
        
        this.weight = weight;
    }
}



function findMST() {
    spanning_tree = [];
    // not_added = new Array(edges.length);
    // for (let i = 0; i < edges.length; i++) {
    //     not_added[i] = i;
    // }
    

    for(let i = 0; i < edges.length; i++){
        edge = edges[i];
        if (!isLoop(edge)){
            spanning_tree.push(edge);
        }

    }
}

function isLoop(edge){
    let result;

    if(edge.start === edge.end){
        result = true;
        return result;
    }

    let colorStart = added[edge.start];
    let colorEnd = added[edge.end];
    if(colorStart === 0 && colorEnd === 0){
        result = false;
        added[edge.start] = edge.start;
        added[edge.end] = added[edge.start];
    }else if(colorStart === colorEnd){
        result = true;
    }else if(colorStart != colorEnd){
        result = false;
        if(colorStart === 0){
            added[edge.start] = added[edge.end];
        }else if(colorEnd === 0){
            added[edge.end] = added[edge.start];
        }else {
           for(let i = 0; i < added.length; i++){
               if(added[i] === colorEnd){
                   added[i] = colorStart;
               }
           } 
        }
    }
    return result;
}



function solve() {
    let graphData = inputLines[0].split(' ');
    const countVertex = Number(graphData[0]);
    const countEdges = Number(graphData[1]);

    
    let skipLines = 1;
    for (let i = 0; i < countEdges; i++) {
        let [v1, v2, weight] = inputLines[i + skipLines].split(' ');
        edges.push( new Edge(Number(v1), Number(v2), Number(weight)) );        
    }
    added = new Array(countVertex + 1).fill(0);

    edges.sort((e1, e2) => e2.weight - e1.weight);
    findMST();

    let result = spanning_tree.reduce((prevValue, item)=>{
        return prevValue += item.weight;
    }, 0)
    
    //console.log(spanning_tree);
    if (result === 0 && countVertex > 1){
        result = 'Oops! I did it again';
    }else if(added.length > 1){
        // Проверим что граф связанный
        let color = added[1];
        for(let i = 2; i < added.length; i++){
            if (color != added[i]){
                result = 'Oops! I did it again';
                break; 
            }
        }
    }
    console.log(result);

   
}


let input = `10 20
2 8 6
7 2 1
2 9 4
5 4 9
8 9 1
7 10 3
10 10 8
9 2 5
4 3 5
1 10 5
6 2 10
2 6 10
8 2 8
9 2 3
10 2 1
3 10 3
2 8 5
2 8 4
7 1 1
7 5 4
`;

inputLines = input.split('\n');

solve();