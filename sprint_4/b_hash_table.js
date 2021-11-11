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

class HashTable{
    constructor(size){
        this._data = new Array(size);
        this._size = size;
    }

    put(key, value){
        if( !this._data[Number(key)] ){
            this._data[Number(key)] = [];
        }

        if(this._data[Number(key)].length === 0){
            this._data[Number(key)].push([key, value]);
        }else{
            for(let i = 0; i < this._data[Number(key)].length; i++){
                let [k, ] = this._data[Number(key)][i];
                if( k === key){                    
                    this._data[Number(key)][i][1] = value; 
                    
                }
            }
        }
        
    }

    get(key){
        if( !this._data[Number(key)]){
            return 'None';
        }

        if(this._data[Number(key)].length === 1){
            return this._data[Number(key)][0][1];
        }else{
            // Несполько значений в одном хеше
            for(let [k, value] of this._data[Number(key)]){
                if( k === key){
                    return value;
                }
            }
        }

    }

    delete(key){
        if( !this._data[Number(key)]){
            return 'None';
        }

        let value;
        if(this._data[Number(key)].length === 1){
            value = this._data[Number(key)][0][1];
            this._data[Number(key)] = undefined;
        }else{
            // Несполько значений в одном хеше            
            for(let i = 0; i < this._data[Number(key)].length; i++){
                let [k, value] = this._data[Number(key)][i];
                if( k === key){                    
                    value = this._data[Number(key)].splice(i, 1);
                    value = value[1];
                }
            }
        }

        return value;
        
        
    }
}


function solve() {
    const countCommand = Number(inputLines[0]);

    const skipLines = 1;

    const hashTable = new HashTable(countCommand);

    for(let i = 0; i < countCommand; i++){
        let [command, key, value] = inputLines[i + skipLines].split(' ');
        let result = '';
        if(command === 'get'){
            result = hashTable.get(key);
        }else if (command === 'put'){
            hashTable.put(key, value);
        }else if(command === 'delete'){
            result = hashTable.delete(key);
        }

        if(result){
            console.log(result);
        }
        
    }

    
}


let input = `8
get 9
delete 9
put 9 1
get 9
put 9 2
get 9
put 9 3
get 9`;

inputLines = input.split('\n');

solve();