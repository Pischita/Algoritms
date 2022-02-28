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

class TrieNode{
    constructor(key){
        this.key = key;
        this.parent = null;
        this.children = {};
        this.end = false;
    }

    getWord(){
        let output = [];
        let node = this;
        while(node !== null){
            output.unshift(node.key);
            node = node.parent;
        }

        return output.join('');
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode(null);
    }

    insert(word){
        let node = this.root;

        for(let i = 0; i < word.length; i++){
            let letter = word[i];
            if(! node.children[letter]){
                node.children[letter] = new TrieNode(letter);
                node.children[letter].parent = node;
            }

            node = node.children[letter];

            if(i === word.length -1){
                node.end = true;
            }
        }
    }


    check(str){
        let result = 'YES';

        let node = this.root;
        

        for(let i = 0; i < str.length; i++){
            let letter = str[i];

            if(node.children[letter]){

                if(node.children[letter].end){
                    // Может быть есть более длинное слово

                    // Ищем следующее слово
                    node = this.root;


                }else{
                    node = node.children[letter];

                    if(i === str.length -1 && !node.end){
                        // Конец строки но слово найдено только частично
                        result = 'NO';
                    }

                }                
            }else{
                result = 'NO';
                break;
            }
    
           
        }

        return result;

    }

}


function solve() {

    let str = inputLines[0].split('');
    const countWords = Number(inputLines[1]);
    
    let words = [];
    const skipLines = 2;

    const trie = new Trie();

    for(let i = 0; i < countWords; i++){
        trie.insert(inputLines[i + skipLines]);
    }
   
    

    console.log(trie.check(str) );
   

    
}


let input = `sscevscescescscsscevscevscesscsc
4
sce
s
scev
sc
`;

inputLines = input.split('\n');

solve();