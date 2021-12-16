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

const INFINITE = 9999999999999;

function get_min_dist_not_visited_vertex(curentEdges, visited){
    let current_minimum = INFINITE
    let current_minimum_vertex = null

    for(let v = 0; v < visited.length; v++){
        if( visited[v] === false && curentEdges[v] < current_minimum){
            current_minimum = curentEdges[v]
            current_minimum_vertex = v
        }
            
    }
    
    return current_minimum_vertex
}


function Dijkstra(graph, s){
    let countVertex = graph.length;
    const distance = new Array(countVertex).fill(INFINITE);
    const previous = new Array(countVertex).fill(undefined);
    const visited = new Array(countVertex).fill(false);

    distance[s] = 0;
    visited[s] = true;

    planned = [];
    

    for(let v = 0; v < countVertex; v++){
        if(visited[v] === false){
            let u = get_min_dist_not_visited_vertex(graph[s], visited);
            visited[u] = true;

            neighbours = edges[u];
            if(distance[u] > distance[s] + graph[s][u]){
                distance[u] = distance[s] + graph[s][u];
                previous[u] = v
            }
            
        }

    }

}

function solve() {
    let graphData = inputLines[0].split(' ');
    const countVertex = Number(graphData[0]);
    const countEdges = Number(graphData[1]);

    edges = new Array(countVertex);
    for(let i = 0; i<countVertex; i++ ){
        edges[i] = new Array(countVertex);
    }

    let skipLines = 1;
    for(let i=0; i < countEdges; i++){
        let [v1, v2, weight] = inputLines[i + skipLines].split(' ');
        edges[Number(v1)-1][Number(v2)-1] = Number(weight);
        edges[Number(v2)-1][Number(v1)-1] = Number(weight);
    }
    
    for(let i = 0; i < edges.length; i++){
        for(let j = 0; j < edges[i].length; j++){
            if(i === j){
                edges[i][j] = 0;
            }if(edges[i][j] === undefined){
                edges[i][j] = INFINITE;
            }
        }
    }

    Dijkstra(edges, 0);
    //console.log(edges);

}


let input = `4 4
1 2 1
2 3 3
3 4 5
1 4 2`;

inputLines = input.split('\n');

solve();