/*
ID правильного решения - 64486659

Определяется сумма всех чисел в исходном множестве и делится пополам.
Если сумма не делится без остатка то множество поровну разделить нельзя. Возвращается отрицательный результат.

Если сумма четная, тогда создается вспомогательный массив резмером середины множества для меморизации сумм чисел в исходном множестве
Если в итоге перебора всего множества может быть получена сумма середины множества значит исходное множество делится пополам


Временная сложность: O(sum * n)
Пространственная сложность: O(sum)
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

function findPartiion(arr, n) {
    
    let i, j;

    let sum = arr.reduce((prevValue, item)=>prevValue += item, 0)
    

    if (sum % 2 != 0)
        return false;

    let part = new Array(parseInt(sum / 2 + 1, 10));

    const middle = parseInt(sum / 2, 10);
  
    for (i = 0; i <= middle; i++) {
        part[i] = false;
    }

    for (i = 0; i < n; i++) {
        for (j = middle; j >= arr[i]; j--) {
            if (part[j - arr[i]] === true || j === arr[i]){
                part[j] = true;
            }
                
        }
    }
    return part[middle];
}

function solve() {
    const sequance = inputLines[1].split(' ').map(item => Number(item));

    if (findPartiion(sequance, sequance.length) == true) {
        console.log('True');
    } else {
        console.log('False');
    }

}

