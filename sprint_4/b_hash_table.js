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
            this._data[index] = [];
        }

        let findIndex = this._data[index].findIndex(item => item[0] === key);
        if(findIndex >=0){
            this._data[index][findIndex][1] = value;
        }else{
            this._data[index].push([key, value]);
        } 
    }

    get(key) {
        let index = this._index(key);
        if (!this._data[index]) {
            return 'None';
        }

        let element = this._data[index].find(item => item[0] === key);
        if (element) {
            return element[1];
        } else {
            return 'None';
        }
    }

    delete(key) {
        let index = this._index(key);
        if (!this._data[index]) {
            return 'None';
        }

        let value ='None';

        let findIndex = this._data[index].findIndex(item => item[0] === key);
        if(findIndex >=0){
            value = this._data[index][findIndex][1];
            this._data[index].splice(findIndex, 1);
        } 
        return value;
    }
}


function solve() {
    const countCommand = Number(inputLines[0]);

    const skipLines = 1;

    const hashTable = new HashTable(127);

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
            console.log(result);
        }

    }


}


let input = `
`;

inputLines = input.split('\n');

solve();