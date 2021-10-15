/*
ID правильного решения 54746822

Т.к. условиям задания нужно использовать стек.
Буду действовать таким образом. Из входных данных буду получать оператор,
если этот оператор не математический знак тогда буду ложить это число в стек 
и просматривать следующий оператор. Если опетатор математический знак,
тогда буду перевать в функцию вычисления 2 значения из стека и знак операции.
Результат операции вычисления буду ложить обратно в стек.

В функцию calculate(num2, num1, sign) 
буду передавать числа в обратном порядке для простоты извлечения из стека,
но для большего понимания параметры назову с порядковым номером для лучшего понимания.

Сложность лубой операции будет O(1)
*/

class Stack{
    constructor(){
        this.data=[];
    }

    push(x){
        this.data.push(x);
    }

    pop(){
        return this.data.pop();
    }
}

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin;
});

let inputLines = [];


// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function calculate(num2, num1, sign){
    if(sign === '+'){
        return num1 + num2;
    }else if(sign === '-'){
        return num1 - num2;
    }else if (sign === '*'){
        return num1 * num2;
    }else if(sign === '/'){
        return Math.floor(num1 / num2);        
    }else{
        console.log('Wrong operation sign');
    }
}

function solve() {
    const expression = inputLines[0];
    const operators = expression.split(' ');

    const stack = new Stack();

    for(let i = 0; i < operators.length; i++){
        const operator = operators[i];
        
        if(operator ==='+' || operator ==='-' || operator ==='*' || operator ==='/'){
            const result = calculate(stack.pop(), stack.pop(), operator);
            stack.push(result);

        }else{
            stack.push(Number(operator) );
        }
    }

    console.log(stack.pop() );
}


let input = `7 2 + 4 * 2 +`;

inputLines = input.split('\n');

solve();