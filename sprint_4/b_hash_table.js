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

class HashTable {
    constructor(size = 127) {
        this._data = new Array(size);
        this._size = size;
    }

    _index(key) {
        return Math.floor(Number(key) % this._size);
    }

    put(key, value) {
        let index = this._index(key);
        if (!this._data[index]) {
            this._data[index] = {};
        }

        if(this._data[index][key]){
            this._data[index][key].value = value;
        }else{
            this._data[index][key] = {value : value};
        }

        // let findIndex = this._data[index].findIndex(item => item[0] === key);
        // if(findIndex >=0){
        //     this._data[index][findIndex][1] = value;
        // }else{
        //     this._data[index].push([key, value]);
        // } 
    }

    get(key) {
        let index = this._index(key);
        if (!this._data[index]) {
            return 'None';
        }

        if(this._data[index][key]){
            return this._data[index][key].value;
        }else{
            return 'None';
        }

        // let element = this._data[index].find(item => item[0] === key);
        // if (element) {
        //     return element[1];
        // } else {
            
        // }
    }

    delete(key) {
        let index = this._index(key);
        if (!this._data[index]) {
            return 'None';
        }

        let value ='None';

        let obj = this._data[index][key];
        if(obj){
            value = obj.value;
            delete this._data[index][key];
        }

        /*     let findIndex = this._data[index].findIndex(item => item[0] === key);
            if(findIndex >=0){
                value = this._data[index][findIndex][1];
                this._data[index].splice(findIndex, 1);
            } */ 
        return value;
    }
}


function solve() {
    const countCommand = Number(inputLines[0]);

    const skipLines = 1;

    const hashTable = new HashTable(127);

    for (let i = 0; i < countCommand; i++) {
        let data = inputLines[i + skipLines].split(' ');
        let result = '';
        if (data[0] === 'get') {
            result = hashTable.get(data[1]);
        } else if (data[0] === 'put') {
            hashTable.put(data[1], data[2]);
        } else if (data[0] === 'delete') {
            result = hashTable.delete(data[1]);
        }

        if (result) {
            console.log(result);
        }
    }
}


let input = `10
get 1
put 1 10
put 2 4
get 1
get 2
delete 2
get 2
put 1 5
get 1
delete 2
`;

inputLines = input.split('\n');

solve();