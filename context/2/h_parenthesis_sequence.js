class Stack{
    constructor(){
        this._stack = [];
    }

    pop(){
        return this._stack.pop();
    }

    push(x){
        this._stack.push(x);
    }

    size(){
        return this._stack.length; 
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
    const stack = new Stack();
    let str = inputLines[0];
    let isOk = true; 

    for(let i=0; i < str.length; i++){
        let symbol = str[i];

       
        if(symbol ==='(' || symbol ==='[' || symbol ==='{'){
            stack.push(symbol);
        }else{
            let lastParenthesis = stack.pop();
            if(symbol===')' && lastParenthesis !=='('){
                isOk = false;
            }else if(symbol===']' && lastParenthesis !=='['){
                isOk = false;
            }else if(symbol==='}' && lastParenthesis !=='{'){
                isOk = false;
            }
        }
    }

    if(isOk && stack.size() > 0){
        isOk = false;
    }

    console.log(isOk ? 'True': 'False');
    
}


let input = `{[()]`;


inputLines = input.split('\n');

solve();
