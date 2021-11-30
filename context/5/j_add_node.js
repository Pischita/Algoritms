
function insert(node, key) {
    let isInserted = false;
    
    let currentNode = node;

    while( !isInserted ){
        if(key >= currentNode.value){
            // insert to right
            if(currentNode.right != null){
                currentNode = currentNode.right;
            }else{
                currentNode.right = new Node(key);
                isInserted = true;
            }
        }else{
            //insert to left
            if(currentNode.left != null){
                currentNode = currentNode.left;
            }else{
                currentNode.left = new Node(key);
                isInserted = true;
            }
        }
    }

    return node;

}


// class Node { 
//     constructor(value, left = null, right = null) { 
//         this.value = value; 
//         this.left = left; 
//         this.right = right; 
//     } 
// }



// function test() {
//     var node1 = new Node(7, null, null);
//     var node2 = new Node(8, node1, null);
//     var node3 = new Node(7, null, node2);
//     var newHead = insert(node3, 6);
//     console.assert(newHead === node3);
//     console.assert(newHead.left.value === 6);
// }

// test();
