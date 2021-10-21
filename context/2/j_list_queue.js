class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class ListQueue {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    put(x) {
        const node = new Node(x);
        if (this._size === 0) {
            this._head = node;
            this._tail = node;
        } else {
            const prevTail = this._tail;
            this._tail = node;
            this._tail.prev = prevTail;
            prevTail.next = this._tail;
        }
        this._size++;
    }

    get(){
        if(this._size === 0){
            return null;
        }
        const x = this._head;

        this._head = x.next;
        this._size--;

        return x.value;        
    }

    size(){
        return this._size;
    }

}


// id решения 53655935
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);



function solve() {
    const countCommand = Number(inputLines[0]);
    const rowSkip = 1;

    const queue = new ListQueue();
    for (let i = 0; i < countCommand; i++) {
        let command = inputLines[rowSkip + i];
        let result;
        if (command.includes('put')) {
            queue.put(command.split(' ')[1]);
        } else if (command.includes('size')) {
            result = queue.size();
            console.log(result);
        } else if (command.includes('get')) {
            result = queue.get();
            console.log(result === null ? 'error' : result)
        }
    }


}


let input = `9
get
size
put 74
get
size
put 90
size
size
size`;


inputLines = input.split('\n');

solve();
