/* 
    ID правильного решения 57593617 

    Хеш-таблица для хранения элементов внутри использует массив.
    При добавлении в хеш-таблицу вычисляется хеш, для определения
    индекса корзины. Для устранения коллизий исползуется метод цепочек, 
    реализованный с помощью связанного списка.
    
    Пространственная сложность алгоритма линейная О(n)

    Временная сложность алгоритма вставки, удаления стремится к O(1),
    но при возникновении коллизий возрастает до O(n),
    где n - количество элементов в текущей корзине.

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

class List{
    constructor(key, value, next){
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size) {
        this._data = new Array(size);
        this._size = size;
    }

    _index(key) {
        return Math.floor(Number(key) % this._size);
    }

    put(key, value) {
        let index = this._index(key);
        if (this._data[index]) {
            let head = this._data[index];
            let isChange = false;
            while(head){
                if(head.key === key){
                    head.value = value;
                    isChange = true;
                }                
                head = head.next;
            }
            if(!isChange){
               this._data[index] = new List(key, value, this._data[index]);     
            }
            
        }else{
            this._data[index] = new List(key, value);
        }
    }

    get(key) {
        let result = 'None';
        let index = this._index(key);
        if (!this._data[index]) {
            return result;
        }
       
        let head = this._data[index];
        while(head){
            if(head.key === key){
                result = head.value;
                return result;
            }
            head = head.next;
        }

        return result;
    }

    delete(key) {
        let result = 'None';
        let index = this._index(key);
        if (!this._data[index]) {
            return result;
        }

        let head = this._data[index];
        let previous = undefined;

        while(head){

            if(head.key === key){
                result = head.value;
                if(previous){
                    previous.next = head.next;
                }else{
                    this._data[index] = head.next;    
                }
                return result;
            }
            previous = head;
            head = head.next;
        }
        return result;        
    }
}


function solve() {
    const countCommand = Number(inputLines[0]);

    const skipLines = 1;
    const SIZE_HASH_TABLE = 1009;

    const hashTable = new HashTable(SIZE_HASH_TABLE);

    let output = ""; 
    for (let i = 0; i < countCommand; i++) {
        let [command, key, value] = inputLines[i + skipLines].split(' ');
        let result = '';
        if (command === 'get') {
            result = hashTable.get(key);
        } else if (command === 'put') {
            hashTable.put(key, value);
        } else if (command === 'delete') {
            result = hashTable.delete(key);
        }

        if (result) {
            output += result + '\n';
        }
    }

    console.log(output);
}

