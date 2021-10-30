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

function test() {
       
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    test_assert([1, 2, 3, 4, 5, 6, 7, 8, 9], -1, true);
 
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 3);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 4);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 5);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 6);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 7);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 8);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 9);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 1);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 2);
    test_assert([3, 4, 5, 6, 7, 8, 9, 1, 2], 121, true);

    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 7);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 8);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 1);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 2);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 3);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 4);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 5);
    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 6);

    test_assert([7, 8, 1, 2, 3, 4, 5, 6], 42, true);    
}



//test();
