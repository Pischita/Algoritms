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
let minimum_spanning_tree = [] //# Рёбра, составляющие MST.

let added = [] // # Множество вершин, уже добавленных в остов.
let not_added = [] //  # Множество вершины, ещё не добавленных в остов.  

function add_vertex(v) {
    added.push(v);

    not_added = not_added.filter(vertex => vertex != v);

    let vertexEdges =[] 
    edges[v].forEach( (weight, i) => {
        if(weight != 0){
            vertexEdges.push(i);
        }    
    });
    return vertexEdges;
}

function extractMaximum(v, vertexEdges){
    let maxWeight = 0;
    let maxVertex;
    vertexEdges.forEach((i) =>{    
        if(maxWeight < edges[v][i]){
            maxWeight = edges[v][i];
            maxVertex = i;
        }
    });

    for(let i = 0; i< vertexEdges.length; i++){
        if(vertexEdges[i] === maxVertex){
            vertexEdges.splice(i, 1);
            break;
        }
    }    

    return maxVertex;

}


function findMST(edges, startVertex) {
    minimum_spanning_tree = [];
    not_added = new Array(edges.length);
    for (let i = 0; i < edges.length; i++) {
        not_added[i] = i;
    }

    
    
    

    minimum_spanning_tree.push(not_added[0]);
    let vertexEdges = [];

    while(not_added.length v> 0){
        let currentVertex = not_added[0];        
        vertexEdges = add_vertex(currentVertex);
        v = extractMaximum(currentVertex, vertexEdges);

        let isNotVisited = not_added.findIndex( vertex => vertex === v);
        if(isNotVisited != -1){
            minimum_spanning_tree.push(v);
        }
    }

    if(not_added.length > 0) {
        return 0;
    } else{
        let result = 0;
        for(let i = 1; i < minimum_spanning_tree.length; i++){
            edgeStart = minimum_spanning_tree[i-1];
            edgeEnd = minimum_spanning_tree[i];
            result += edges[edgeStart][edgeEnd];
        }
        return result;
    }

}



function solve() {
    let graphData = inputLines[0].split(' ');
    const countVertex = Number(graphData[0]);
    const countEdges = Number(graphData[1]);

    edges = new Array(countVertex);
    for (let i = 0; i < countVertex; i++) {
        edges[i] = new Array(countVertex);
    }

    let skipLines = 1;
    for (let i = 0; i < countEdges; i++) {
        let [v1, v2, weight] = inputLines[i + skipLines].split(' ');
        weight = Number(weight); 
        if( edges[Number(v1) - 1][Number(v2) - 1] === undefined ||  edges[Number(v1) - 1][Number(v2) - 1]  < weight)
        edges[Number(v1) - 1][Number(v2) - 1] = Number(weight);
        edges[Number(v2) - 1][Number(v1) - 1] = Number(weight);
    }

    for (let i = 0; i < edges.length; i++) {
        for (let j = 0; j < edges[i].length; j++) {
            if (i === j && edges[i][j] === undefined) {
                edges[i][j] = 0;
            }
            if (edges[i][j] === undefined) {
                edges[i][j] = 0;
            }
        }
    }

    let maxResult = 0;
    for(let startVertex = 0; startVertex < countVertex; startVertex++){
        let result = findMST(edges, startVertex);
        if(result > maxResult){
            maxResult = result;
        }
    }
    
    if(countVertex === 1){
        console.log('0');
    }else if(maxResult === 0){
        console.log('Oops! I did it again'); 
    }else{
       console.log(maxResult); 
    }
}


let input = `10 20
9 10 4
2 2 4
4 2 8
10 5 3
1 10 6
7 4 2
10 10 6
3 7 4
8 9 4
8 10 7
6 10 10
2 8 8
3 8 1
3 10 3
9 5 8
10 10 2
1 8 1
10 1 5
3 6 10
9 10 8

`;

inputLines = input.split('\n');

solve();