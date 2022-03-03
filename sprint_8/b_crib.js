/*
ID - правильного решения 65665693

На основании слов строится префиксное дерево, для быстрого поиска.
После этого будем проходится по общей строке и производить поиск возможного слова в префиксном дереве.
Если в префиксном дереве достигли конца слова в массиве dp отмечаем 1, и пробуем продолжать поиск, т.к. слово может заканчиваться далее.
Если после нахождения следующего слова, последовательность поиска продолжить нельзя, возвращаемся к предыдущему найденному слову в массиве dp
и пробуем продолжить последовательность от него. При этом отмечаем уже посещенные индексы слов в массиве dp - 2.

Временная сложность добавления слова — О(N), где N - суммарная длина слов во множестве
Временная сложность поиска O(n⋅M) операций, где n — длина текста, а M — длина самого длинного из искомых шаблонов.

Пространсвенная сложность О(N)
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

class TrieNode {
    constructor(key) {
        this.key = key;
        this.parent = null;
        this.children = {};
        this.end = false;
    }

    getWord() {
        let output = [];
        let node = this;
        while (node !== null) {
            output.unshift(node.key);
            node = node.parent;
        }

        return output.join('');
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode(letter);
                node.children[letter].parent = node;
            }

            node = node.children[letter];

            if (i === word.length - 1) {
                node.end = true;
            }
        }
    }


    check(str) {
        let result = 'YES';

        let node = this.root;

        const dp = new Array(str.length).fill(0);

        let searchNext = false;

        for (let i = 0; i < str.length; i++) {
            let letter = str[i];

            if (node.children[letter]) {

                if (node.children[letter].end) {
                    // Может быть есть более длинное слово
                    dp[i] = 1;
                    searchNext = true;
                }
                node = node.children[letter];
                if (i === str.length - 1 && !node.end) {
                    // Конец строки но слово найдено только частично
                    result = 'NO';
                }

            } else {
                
                searchNext = false;
                let index = i;
                let isContinue = false;
                while (index >= 0) {
                    if (dp[index] !== 1) {
                        index--;
                    } else if (dp[index] === 1) {
                        i = index;
                        dp[index]++;
                        node = this.root;
                        isContinue = true;
                        break;
                    }
                }

                if (!isContinue) {
                    result = 'NO';
                    break;
                }
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

    for (let i = 0; i < countWords; i++) {
        trie.insert(inputLines[i + skipLines]);
    }



    console.log(trie.check(str));



}
