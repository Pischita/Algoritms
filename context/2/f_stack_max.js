class StackMax{
    constructor(){
        this.stack = [];
    }

    push(x){
        this.stack.push(x);
    }

    pop(){
        if(this.stack.length > 0){
            return this.stack.pop();
        }else{
            console.log('error');
        }
        
    }

    get_max(){
        let max;
        if(this.stack.length === 0){
            console.log('None');
        }else{
            max = this.stack[0];
            for(let i = 1; i< this.stack.length; i++){
                if( max < this.stack[i]){
                    max = this.stack[i]
                }
            }

            console.log(max);

        }
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
    let stack = new StackMax();

    const countCommands = Number(inputLines[0] );

    for(let i = 1; i <= countCommands; i++){
        let command = inputLines[i];

        if(command.includes('get_max')){
            stack.get_max();
        }else if(command.includes('push') ){
            stack.push(Number(command.split(' ')[1] ) );
        }else if(command.includes('pop')){
            stack.pop();
        }
    }
    
}


let input = `7
get_max
pop
pop
pop
push 10
get_max
push -9`;


inputLines = input.split('\n');

solve();



