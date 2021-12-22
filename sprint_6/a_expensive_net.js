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

    let v = not_added[startVertex];
    minimum_spanning_tree.push(v);
    let vertexEdges = add_vertex(v);
    let currentVertex = v;

    while(not_added.length > 0 && vertexEdges.length > 0){

        v = extractMaximum(currentVertex, vertexEdges);

        let isNotVisited = not_added.findIndex( vertex => vertex === v);
        if(isNotVisited != -1){
            minimum_spanning_tree.push(v);
            vertexEdges = add_vertex(v);
            currentVertex = v;
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
8 7 9
4 10 7
6 6 2
8 10 1
10 6 1
5 7 8
1 9 6
10 3 3
10 5 8
6 6 6
5 7 9
5 2 4
3 1 1
10 7 8
8 4 6
5 5 7
7 8 6
5 10 2
10 1 3
3 5 9
`;

inputLines = input.split('\n');

solve();