/*
ID верного решения 54584395

Конечно для решения данной задачи лучше всего использовать "связный список".
Но по условию его использовать нельзя.

Т.к. по условию задачи размер дека задается и скорость выполнения должна быть за O(1)
буду использовать "Очередь на кольцевом буфере". В ходе реализации самое главное смотреть 
чтобы индексы головы и хвоста не выходили за диапазоны массива и друг на друга не наезжали. 
*/

class Deque {
    constructor(size) {
        this._data = new Array(size);
        this._maxSize = size;
        this._head = 0;
        this._tail = 0;
        this._size = 0;
    }

    push_front(x) {
        if (this._size === this._maxSize) {
            console.log('error');
            return;
        }

        if (this._data[this._head] !== undefined) {
            this._head--;
            if (this._head < 0) {
                this._head = this._maxSize - 1;
            }
        }
        this._data[this._head] = x;
        this._size++;

        // if (this._size === 1) {
        //     this._tail = this._head;
        // }
    }

    push_back(x) {
        if (this._size === this._maxSize) {
            console.log('error');
            return;
        }

        if (this._data[this._tail] !== undefined) {
            this._tail = (this._tail + 1) % this._maxSize;
        }

        this._data[this._tail] = x;
        this._size++;
    }

    pop_back() {
        if (this._size === 0) {
            console.log('error');
            return null;
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
        if (this._size === 0) {
            console.log('error');
            return null;
        }

        let x = this._data[this._head];
        this._data[this._head] = undefined;

        this._size--;
        if(this._size > 0){
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

    for (let i = 0; i < inputLines.length - skipLines; i++) {
        let command = inputLines[skipLines + i];
        if (command.includes('push_front')) {
            deque.push_front(command.split(' ')[1]);
        } else if (command.includes('push_back')) {
            deque.push_back(command.split(' ')[1]);
        } else if (command.includes('pop_back')) {
            let x = deque.pop_back();
            if (x) {
                console.log(x);
            }

        } else if (command.includes('pop_front')) {
            let x = deque.pop_front();
            if (x) {
                console.log(x);
            }

        }

    }
}


let input = `297
8
push_front 842
pop_back
push_front 576
push_front -853
pop_back
push_front 123
push_front -236
pop_front
push_back 840
pop_front
push_back 740
push_back 347
pop_front
push_front -767
push_front -711
push_back -7
pop_front
pop_back
pop_back
pop_back
pop_back
pop_front
push_back -215
push_front 540
pop_front
push_front -293
pop_back
pop_back
pop_front
pop_back
push_back 873
push_front 47
push_back -238
push_front -575
pop_front
push_front -916
push_front 292
push_back 302
push_front 456
push_back 92
push_back -422
push_back 890
push_back -100
pop_back
push_front -356
pop_front
push_front 430
push_front 469
push_back -56
push_front 273
pop_back
pop_back
push_front -397
push_back 131
pop_front
push_back -4
push_front -265
push_back 10
push_back -531
pop_back
pop_back
pop_back
push_front 766
pop_front
push_front -520
pop_back
pop_back
pop_back
pop_back
pop_back
push_front -386
push_back -320
push_back 21
pop_front
push_back 495
pop_front
push_front -95
pop_front
pop_back
push_back 908
push_front 115
push_back`;


inputLines = input.split('\n');

solve();