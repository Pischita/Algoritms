function siftUp(heap, idx) {
    if(idx === 1){
        return idx;
    }

    let parent_index = Math.floor(idx / 2);

    if( heap[parent_index] < heap[idx] ){
        let tmp = heap[parent_index];
        heap[parent_index] = heap[idx];
        heap[idx] = tmp;
        return siftUp(heap, parent_index);
    }

    return idx;
}

// function test() {
//     var sample = [-1, 12, 6, 8, 3, 15, 7];
//     console.log( siftUp(sample, 5) );
// }

// test();
