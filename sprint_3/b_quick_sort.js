/* ID правильного решения - 55739519

    Основное отличие от стандартного алгоритма быстрой сортировки
будет отличатся только перестановкой элементов в текущем массиве, 
а не созданием дополнительных массивов с левой и правой частями исходного массива.


Пространственная сложность алгоритма всегда будет O(n).

Временная сложность алгоритма будет квадратичной O(n^2) в самом худшем случае.
Но в случае удачного выбора центрального элемента может стремится к O( n log n )

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

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function compare(a, b){
    // 1. У кого больше очков идет первым
    if(a.score > b.score){
        return -1;
    }else if(b.score > a.score){
        return 1;
    }else{
        // 2. При равенстве очков, у кого меньше штрафных баллов идет первым
        if(a.fine < b.fine){
            return -1
        }else if (b.fine < a.fine){
            return 1;
        } else {
            // 3. При равсенстве так же и штрафных баллов, выстраиваем в алфавитном порядке логина
            if(a.login < b.login){
                return -1;
            }else if(b.login < a.login){
                return 1
            }else{
                return 0;
            }
        }
        
    }
}

function sortPart(arr, left, right){
   
    let leftIndex = left, rightIndex = right;
    let pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
    const pivot = arr[pivotIndex];


    while(leftIndex < rightIndex){
        while(arr[leftIndex] !== pivot && compare(arr[leftIndex], pivot) < 0 ){
            leftIndex++;
        }

        while(arr[rightIndex] !== pivot && compare(arr[rightIndex], pivot) > 0 ){
            rightIndex--;
        }

        if(leftIndex < rightIndex){
            swap(arr, leftIndex, rightIndex);
            if(arr[leftIndex] !== pivot){
                leftIndex++;
            }
            if(arr[rightIndex] !== pivot ){
                rightIndex--;
            }            
        }
    }

    return rightIndex;
}

function quickSort(arr, leftIndex, rightIndex){
    if( (rightIndex - leftIndex) > 0 ){
        let pivotIndex = sortPart(arr, leftIndex, rightIndex);
        if(leftIndex < pivotIndex){
            quickSort(arr, leftIndex, pivotIndex-1);
        }

        if(pivotIndex < rightIndex){
            quickSort(arr, pivotIndex+1, rightIndex);
        }
    }

}

function solve() {
    const countParticipants = inputLines[0];
    arr = [];
    const skipLines = 1;

    for(let i = 0; i < countParticipants; i++ ){
        const data = inputLines[i + skipLines].split(' ');
        arr.push({
            login: data[0],
            score: Number(data[1]),
            fine: Number(data[2]),
        });
    }

    quickSort(arr, 0, arr.length-1);
    
    for(let participant of arr){
        console.log(participant.login);
    }
}

