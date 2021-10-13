class MyQueueSized{
    constructor(size){
        this._queue = new Array(size);
        this._maxN = size;
        this._head = 0;
        this._tail = 0;
        this._size = 0;
    }

    push(x){
        if(this._size < this._maxN){
          this._queue[this._tail] = x;
          this._tail = (this._tail + 1) % this._maxN;
          this._size++; 
        }else{
            console.log('error');
        }
    }

    pop(){
        if(this._size === 0 ){
            return null;
        }
        let x = this._queue[this._head];
        this._queue[this._head] = undefined;
        this._head = (this._head + 1) % this._maxN;
        this._size--;
        return x;
    }

    peek(){
        if(this._size === 0 ){
            return null;
        }
        return this._queue[this._head];
    }

    size(){
        return this._size;
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
    const maxSize = Number(inputLines[1]);
    const rowSkip = 2;

    const queue = new MyQueueSized(maxSize);
    for(let i = 0; i < countCommand; i++){
        let command = inputLines[rowSkip + i];
        let result;
        if(command.includes('peek')){
            result = queue.peek();
            console.log(result === null ? 'None': result)
        }else if(command.includes('push') ){
            queue.push(command.split(' ')[1] );
        }else if(command.includes('size') ){
            result = queue.size();
            console.log(result);
        }else if(command.includes('pop') ){
            result = queue.pop();
            console.log(result === null ? 'None': result)
        }
    }
   
    
}


let input = `10
1
push 1
size
push 3
size
push 1
pop
push 1
pop
push 3
push 3`;


inputLines = input.split('\n');

solve();
