/*
ID правильного решения - 60010195

Сортировки кучей используется для быстрой сортировки данных очень динамично изменяемых.
Для хранения бинарного дерева кучи буду использовать массив со следующими договоренностями:
1. Корень дерава будет хранится по индексом 1.
2. Детей текущего узла можно вычислить по следующей формуле 
    2 * i           - для левого узла
    (2 * i) + 1     - для правого узла
    
    При добавлении элемента в кучу будет помещать в конец кучи 
и будем использовать просеивание вверх для упорядочивания кучи.
    При извленении элемента будет извлекаться корень дерева
(хранящийся в массиве под индексом 1), на его место будет перемещатся последний элемент в куче
и для упорядочивания кучи будет происходить просейвание вниз.
Таким образом в корне будет хранится самый приоритетный элемент и он будет первым извлекатся.
Это обеспечивает быстрое упорядочивание данных с временной сложностью O(n log n)

Пространственная сложность алгоритма будет O(n),
где n - количество пользователей


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

class User{
    constructor(name, countSolvedTask, countPenaltyPoints){
        this.name = name;
        this.countSolvedTask = countSolvedTask;
        this.countPenaltyPoints = countPenaltyPoints;
    }

    static compare(user1, user2){
        if(user1.countSolvedTask > user2.countSolvedTask){
            return -1;
        }else if ( user2.countSolvedTask > user1.countSolvedTask){
            return 1;
        }else{
            if(user1.countPenaltyPoints < user2.countPenaltyPoints ){
                return -1;
            }else if(user2.countPenaltyPoints < user1.countPenaltyPoints){
                return 1;
            }else{
                if(user1.name < user2.name){
                    return -1;
                }else if(user2.name < user1.name){
                    return 1;
                }else {
                    return 0;
                }
            }
        }

    }
}

class Heap{
    constructor(size){
        this.data = new Array(size + 1);
        this.size = 0;
    }

    add(value){
        this.size += 1;
        this.data[this.size] = value;
        this.siftUp(this.size);
    }

    pop(){
        let result = this.data[1];

        this.data[1] = this.data[this.size];
        this.data[this.size] = undefined;
        this.size -= 1;
        this.siftDown(1);
        return result;

    }

    siftUp(idx) {
        if(idx === 1){
            return;
        }
    
        let parent_index = Math.floor(idx / 2);
    
        if( User.compare(this.data[parent_index], this.data[idx]) === 1){
            let tmp = this.data[parent_index];
            this.data[parent_index] = this.data[idx];
            this.data[idx] = tmp;
            return this.siftUp(parent_index);
        }
    }

    siftDown(idx) {
        let left = idx * 2;
        let right = left + 1;
    
        if(left > this.size){
            return;
        }
    
        let index_largest;
    
        if((right <= this.size ) && User.compare(this.data[left], this.data[right]) === 1 ){
            index_largest = right;
        }else{
            index_largest = left;
        }
    
        if(User.compare(this.data[idx], this.data[index_largest]) === 1){
            let tmp = this.data[idx];
            this.data[idx] = this.data[index_largest];
            this.data[index_largest] = tmp;
    
            return this.siftDown(index_largest);
        }
    }

}

function solve() {
    const size = Number(inputLines[0]);
    const skipLines = 1;

    const heap = new Heap(size);

    for(let i = 0; i < size; i++){
        let userData = inputLines[i + skipLines].split(' ');
        let user = new User(userData[0], Number(userData[1]), Number(userData[2]) ); 

        heap.add(user);
        
    }

    for(let i = 0; i < size; i++){
        let user = heap.pop();
        console.log(user.name);   
    }
}

