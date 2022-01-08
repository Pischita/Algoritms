/* ID правильного решения 63431531

    Для решения будет использоваться алгоритм Краскала.
Сначала сортитуются ребра по убыванию веса.
После последовательно будет добавлятся ребро в максимальное остовное дерево.
Перед добавление проверяется не образует ли внось добавленное ребро цикл.
Если при добавлении ребра образуется цикл, такое небро не добавляется.

Для учета связанности графа используется массив где в каждой ячейке соответсвует вершина графа.
В значении записывается номер стартовой вершины к которой принадлежит в данный момент оставное дерево.
С помощью массива отслеживается связаны ли все вершины в один граф, для для всех вершин будет одинаковое 
значение. Если вершины не связаны я ячейках массива "added" будут указаны разные значения стартовых вершин.

Пространственная сложность алгоритма будет O(E + V)
, где 
    E - количество ребер
    V - количество вершин


Временная сложность алгоритма будет O(E⋅log E)
    , где E — количество рёбер в графе.

*/

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
