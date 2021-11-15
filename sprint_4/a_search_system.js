/* 
    ID правильного решения 57551822 

    На основании входных "документов" для каждого слова создается в хеш-таблице
    индекс, где каждому слову соответствует в каких документах это слово присутствует.
    
    При разборе поисковой строки, поисковая сторока резделяется на слова.
    Для каждого слова производится поиск в хеш-таблице индекса в кахих документах это слово присутствует 
    и добавляется в массив вхождений. В конце производится сортировка массива вхождений, 
    где документ с найбольшим совпадением слов имеен найвысший приоритет.


    Временная сложность алгоритма зависит от количества документов (n) для индексирования.
    Разделения документов на слова (w), добавления каждого слова в индекс (i)
    Получение поисковых строк (s), разделение поисковых строк на слова (w2)
    Получение из индекса ссылки на документы в которых это слово присутствует(g).
    Сортировка релевантности результата по убыванию суммы встречающихся индексов (or) 
    Временная сложность алгоритма будет O(n(w + i) + s(w2 + g) + or )


    Пространственная сложность алгоритма линейная О(n), зависит от количества уникальных слов в документах 
    и количеству ссылок на докумты
    

*/

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
    const MAX_REPEAT = 10

    for(let i = 0; i < countDocuments; i++){
        const document = inputLines[i + skipLines];
        if(previousDocument === document){
            countRepeat++;
            if(countRepeat >= MAX_REPEAT){
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

        queryWords = [...new Set(queryWords)];
        for(word of queryWords){
            
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

        const MAX_RESULTS = 5;

        for(let k = 0; k < Math.min(MAX_RESULTS, relevance.length); k++ ){
            result += '' + (relevance[k][0] ) + ' ';
        }
        if(result){
            console.log(result);
        }
    }
}

