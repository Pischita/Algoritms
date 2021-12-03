function siftDown(heap, idx) {
    let left = idx * 2;
    let right = left + 1;

    if(left > heap.length){
        return idx;
    }

    let index_largest;

    if((right < heap.length) && heap[right] > heap[left]){
        index_largest = right;
    }else{
        index_largest = left;
    }

    if(heap[idx] < heap[index_largest]){
        let tmp = heap[idx];
        heap[idx] = heap[index_largest];
        heap[index_largest] = tmp;

        return siftDown(heap, index_largest);
    }

    return idx;

}

// function test() {
//     var sample = [-1, 12, 1, 8, 3, 4, 7];
//     console.log(siftDown(sample, 2) );
    
// }

// test();