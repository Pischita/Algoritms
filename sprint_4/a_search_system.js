const { countReset } = require('console');
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

function solve() {
    const countDocuments = Number(inputLines[0]);
    let skipLines = 1;
    const index = new Map();
    const documents = [];

    let previousDocument = '';
    let countRepeat = 0;

    for(let i = 0; i < countDocuments; i++){
        const document = inputLines[i + skipLines];
        if(previousDocument === document){
            countRepeat++;
            if(countRepeat >= 10){
                continue;
            }

        }else{
            previousDocument = document;
            countRepeat = 0;
        }
        documents.push(document);
        const words = document.split(' ');
        
        for(let word of words){
            
            if(index.has(word)){
                index.get(word).push(i + 1);
            }else{
                index.set(word, [i + 1]);
            }
        }        
    }

    skipLines = countDocuments + skipLines;
    const countQueries = inputLines[skipLines];
    skipLines++;    

    for(let i = 0; i < countQueries; i++){
        const queryString = inputLines[skipLines + i];
        let queryWords = queryString.split(' ');
        const relevance = [];
        //const uniqueWords = new Set();
        queryWords = [...new Set(queryWords)];
        for(word of queryWords){
            // if(uniqueWords.has(word)){
            //     continue;
            // }else{
            //     uniqueWords.add(word);
            // }

            if(index.has(word)){
                let wordIndexes = index.get(word);
                for(let ind of wordIndexes){
                    let existRelevance = relevance.find(item => ind === item[0]);
                    if(existRelevance){
                        existRelevance[1] = existRelevance[1]+ 1; 
                    }else{
                        relevance.push([ind, 1]);
                    }
                }
            }
        }

        relevance.sort( (a, b) =>{
            if(a[1] > b[1]){
                return -1;
            }else if(b[1] > a[1]){
                return 1;
            }else{
                if(a[0] < b[0]){
                    return -1;
                }else if(b[0] < a[0]){
                    return 1;
                }else{
                    return 0;
                }
            }
        } );
        let result = '';
        for(let k = 0; k < Math.min(5, relevance.length); k++ ){
            result += '' + (relevance[k][0] ) + ' ';
        }
        if(result){
            console.log(result);
        }
    }
}


let input = `5
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
5
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp
jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp jdxmp

`;

inputLines = input.split('\n');

solve();