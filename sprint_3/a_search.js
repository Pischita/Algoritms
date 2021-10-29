function searchMinElement(arr, firstElement, miminum, left, right){
    if((right - left) === 1){
        return left;
    }

    let middle = Math.floor((left + right) / 2 );
    
    if(arr[middle] > firstElement){
        return searchMinElement(arr, firstElement, miminum, middle, right);
    }else{
        if(arr[middle] < miminum){
            return searchMinElement(arr, firstElement, arr[middle], left, middle+1);    
        }else{
            return searchMinElement(arr, firstElement, miminum, middle, right);
        }   
    }
}

function search(arr, k, left, right){
    if(right <= left){
        return -1;
    }

    let middle = Math.floor( (left + right) / 2 );

    if(arr[middle] === k){
        return middle;
    }

    if( k < arr[middle]){
        return search(arr, k, left, middle);
    }else{
        return search(arr, k, middle + 1, right);
    }
}

function brokenSearch(arr, k) {
    let firstElement = Number(arr[0]);
    let breakIndex = searchMinElement(arr, firstElement, firstElement, 0, arr.length);
    let result = -1;
    if(Number(k) <= firstElement){
        result = search(arr, k, breakIndex, arr.length);
    }else{
        result = search(arr, k, 0, breakIndex);
    }    

    return result;
}

function test() {
    let arr = [];

    arr = [19, 21, 100, 101, 1, 4, 5, 7, 12];
    if (brokenSearch(arr, 5) !== 6)  {
        console.error("WA " + arr);
    }

    arr = [5, 1];
    if (brokenSearch(arr, 1) !== 1)  {
        console.error("WA " + arr);
    }

    arr = [1, 2, 3, 5, 6, 7, 9, 0];
    if (brokenSearch(arr, 3) !== 2)  {
        console.error("WA " + arr);
    }

    arr = [1];
    if (brokenSearch(arr, 1) !== 0)  {
        console.error("WA " + arr);
    }
}

//test();
