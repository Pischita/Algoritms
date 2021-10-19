/*
ID верного решения 54584395

Конечно для решения данной задачи лучше всего использовать "связный список".
Но по условию его использовать нельзя.

Т.к. по условию задачи размер дека задается и скорость выполнения должна быть за O(1)
буду использовать "Очередь на кольцевом буфере". Создам класс Deque с фиксированным массивом.
И индексами начала и хвоста и проинициализирую их нулем.  При добавлении в конец 
дека буду проверять чтобы небыло переполнения дека и сохранять в массив с индексом хвоста.
И индекс хвоста буду увеличивать на 1 и буду использовать остаток от деления 
 от максимального количества элементов в массиве, чтобы индекс хвоста не вышел за пределы массива. 

При добавлении в начало так же буду проверять чтобы небыло переполнения массива и буду записывать 
значение в массив с индеквом "начала". И этот индекс буду уменьшать на еденицу.
После буду проверять чтобы индекс не стал отрицательным и если он стал отрицательним 
буду индексу "начала" присваивать значение (размер массива - 1)

Оценим пространственную сложность алгоритма. 
Дек содержащий n элементов будет занимать O(n) памяти.
Дек имеет фиксированный размер и увеличение его не происходит.

Сложностьсложность всего алгоритма растёт в зависимости от входных данных линейно.
O(N) - сложность всего алгоритма


*/

class Deque {
    constructor(size) {
        this._data = new Array(size);
        this._maxSize = size;
        this._head = 0;
        this._tail = 0;
        this._size = 0;
    }

    isFull(){
        return this._size === this._maxSize;
    }

    isEmpty(){
        return this._size === 0;
    }

    push_front(x) {
        if (this.isFull()) {
            return 'error';
        }

        if (this._data[this._head] !== undefined) {
            this._head--;
            if (this._head < 0) {
                this._head = this._maxSize - 1;
            }
        }
        this._data[this._head] = x;
        this._size++;

    }

    push_back(x) {
        if (this.isFull()) {
            return 'error';
        }

        if (this._data[this._tail] !== undefined) {
            this._tail = (this._tail + 1) % this._maxSize;
        }

        this._data[this._tail] = x;
        this._size++;
    }

    pop_back() {
        if (this.isEmpty()) {
            return 'error';
        }

        let x = this._data[this._tail];
        this._data[this._tail] = undefined;

        this._size--;
        if (this._size > 0) {
            this._tail--;
            if (this._tail < 0) {
                this._tail = this._maxSize - 1;
            }
        }

        return x;
    }

    pop_front() {
        if (this.isEmpty()) {
            return 'error';
        }

        let x = this._data[this._head];
        this._data[this._head] = undefined;

        this._size--;
        if( !this.isEmpty() ){
           this._head = (this._head + 1) % this._maxSize; 
        }        

        return x;
    }

}


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
    const capacity = Number(inputLines[1]);

    const deque = new Deque(capacity);
    const skipLines = 2;

    const OPERATION = {
        PUSH_FRONT:'push_front',
        PUSH_BACK:'push_back',
        POP_FRONT: 'pop_front',
        POP_BACK: 'pop_back'
    }

    for (let i = 0; i < inputLines.length - skipLines; i++) {
        let [command, value] = inputLines[skipLines + i].split(' ');
        let result;
        if (command.includes(OPERATION.PUSH_FRONT)) {
            deque.push_front(value);
        } else if (command.includes(OPERATION.PUSH_BACK)) {
            deque.push_back(value);
        } else if (command.includes(OPERATION.POP_BACK)) {
            result = deque.pop_back();
        } else if (command.includes(OPERATION.POP_FRONT)) {
            result = deque.pop_front();
        }

        if (result) {
            console.log(result);
        }

    }
}
