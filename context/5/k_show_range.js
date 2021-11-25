const output = [];

function print(node, min, max) {
    if (node === null) {
        return;
    }


    if (node.left && node.value >= min) {
        print(node.left, min, max);
    }   

    if (node.value >= min && node.value <= max) {
        output.push(node.value);
    }
    
    if (node.right && node.value <= max) {
        print(node.right, min, max);
    }


}

function printRange(root, left, right) {
    print(root, left, right);
    for(let i = 0; i<output.length; i++){
        console.log(output[i]); 
    }    
}


// class Node { 
//     constructor(value, left = null, right = null) { 
//         this.value = value; 
//         this.left = left; 
//         this.right = right; 
//     } 
// }


// function test() {
//     var node1 = new Node(2, null, null);
//     var node2 = new Node(1, null, node1);
//     var node3 = new Node(8, null, null);
//     var node4 = new Node(8, null, node3);
//     var node5 = new Node(9, node4, null);
//     var node6 = new Node(10, node5, null);
//     var node7 = new Node(5, node2, node6);
//     printRange(node7, 2, 8);
//     // expected output: 2 5 8 8
// }

// test();