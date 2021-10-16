/*
ID правильного решения 54746822

Т.к. по условиям задания нужно использовать стек.
Буду действовать таким образом. Из входных данных буду получать оператор,
если этот оператор не математический знак тогда буду ложить это число в стек 
и просматривать следующий оператор. Если опетатор математический знак,
тогда буду перевать в функцию вычисления 2 значения из стека и знак операции.
Результат операции вычисления буду ложить обратно в стек.

В функцию calculate(num2, num1, sign) 
буду передавать числа в обратном порядке для простоты извлечения из стека,
но для большего понимания параметры назову с порядковым номером для лучшего понимания.

Пространственная сложность алгоритма всегда будет O(2), т.к. при обработке любой последовательности чисел
в стеке будет находится не более двух элементов. Разрастание по памяти может происходить только из-за 
большой входной последовательности чисел для обработки, но учитывая что в обработке всегда будет только 2 числа,
размером входных данных можно пренебречь.

Временная сложность алгоритма будет O(2n), т.к. нужно будет поместить числа в стек.
После получения знака, нужно будет извлечь из стека 2 числа, произвести вычисления и обратно поместить в стек.
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

const SIGNS = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLY: '*',
    DEVIDE:'/'
}

function calculate(num2, num1, sign){
    if(sign === SIGNS.PLUS){
        return num1 + num2;
    }else if(sign === SIGNS.MINUS){
        return num1 - num2;
    }else if (sign === SIGNS.MULTIPLY){
        return num1 * num2;
    }else if(sign === SIGNS.DEVIDE){
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
        
        if(operator === SIGNS.PLUS || operator === SIGNS.MINUS || operator === SIGNS.MULTIPLY || operator === SIGNS.DEVIDE){
            const result = calculate(stack.pop(), stack.pop(), operator);
            stack.push(result);

        }else{
            stack.push(Number(operator) );
        }
    }

    console.log(stack.pop() );
}

