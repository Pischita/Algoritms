/* ID правильного решения 55687740

    Основная особенность поиска в сломанном массиве от правильного отсортированного массива 
это то что в конце массива могут идти числа меньше чем в начале массива.
Для поиска буду использовать бинарный поиск. Основной особенностью которого
является разбитие массива пополам сравнении центрального элемента и искомым.
И если центральный элемент таковым не является производится определение в какой части массива
продолжать искать элемент левой, или правой . И так выполнять рекурсивно пока не будет найден элемент.
Для данной задачи нужно будет внести корректировки в стандартный алгоритм несколькими условиями
Если первый элемент массива больше искомого и искомый элемент больше центрального, 
то поиск надо продолжать в правой стороне массива. Если искомый элемент
мельше центрального нужно определить сломана ли левая часть последовательности 
и в зависимости от этого искать в левой части массива или в правой.

Пространственная сложность алгоритма всегда будет O(n).
Временная сложность алгоритма будет логарифмической O(log n)

*/

function search(arr, firstElement, searchElement, left, right){
    let middle = Math.floor((left + right) / 2 );  

    if(arr[middle] === searchElement){
        return middle;
    }

    if(arr[left] === searchElement){
        return left;
    }

    if(arr[right] === searchElement){
        return right;
    }

    if(right - left <= 0 ){
        return -1;
    }

     let isBreakingLeft = arr[left] > arr[middle];

    if(searchElement > arr[left] && searchElement < arr[middle]){
        return search(arr, firstElement, searchElement, left, middle);        
    }else{ 
        if(isBreakingLeft && arr[middle] < searchElement && arr[left] < searchElement){
           return search(arr, firstElement, searchElement, left, middle);
        }else if(isBreakingLeft && searchElement < arr[middle] && searchElement < arr[left]){
            return search(arr, firstElement, searchElement, left, middle);
        }else{             
            return search(arr, firstElement, searchElement, middle + 1, right);          
        }   
    }
}



function brokenSearch(arr, k) {
    let firstElement = Number(arr[0]);
    return search(arr, firstElement, k, 0, arr.length);
}

function test_assert(arr, find){
    let result = brokenSearch(arr, find);
    console.log(`${arr} ${find} ${result}`);
}
