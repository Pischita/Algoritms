function getLeaf(node, side='left'){
    let currentNode = undefined;
    let parent = undefined;
    if(side === 'left'){
        currentNode = node.left;
        while(currentNode != null && currentNode.right){
            parent = currentNode;
            currentNode = currentNode.right; 
        }

        if(parent){
            parent.right = currentNode.left;
        }
        
        return currentNode;
    }

}


function remove(node, key) {
    let currentNode = node;
    let isFinded = false;
    let deletedNode = undefined;
    let parentForDeleted = undefined;

    while( !isFinded && currentNode != null){
        if(key === currentNode.value){
            deletedNode = currentNode;
            isFinded = true;
            break;
        }
         
        parentForDeleted = currentNode;
        if( key > currentNode.value){
            currentNode = currentNode.right; 
        }else{
            currentNode = currentNode.left;
        }
    }

    if(deletedNode){
        if(parentForDeleted){
            let isLeft = parentForDeleted.left === deletedNode;
            if(deletedNode.left === null || deletedNode.right === null){
                if(isLeft){
                    parentForDeleted.left = deletedNode.left || deletedNode.right;
                }else{
                    parentForDeleted.right = deletedNode.left || deletedNode.right;
                }
            }else{
                insertedNode = getLeaf(deletedNode);
                if(isLeft){
                    parentForDeleted.left = insertedNode;
                    insertedNode.right = deletedNode.right;
                }else{
                    parentForDeleted.right = insertedNode;
                    insertedNode.right = deletedNode.right;
                } 

            }
        }else{
            //console.lof('heleted head');
             node = getLeaf(deletedNode);
             if(node != null){
                 if(node != deletedNode.left){
                     node.left = deletedNode.left;
                 }else{
                    node.left = null;
                 }

                 if(node != deletedNode.right){
                     node.right = deletedNode.right;
                 }else{
                    node.right = null;  
                 }
                 
                 
             }else{
                 return null;
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
//     // var node1 = new Node(2, null, null);
//     // var node2 = new Node(3, node1, null);
//     // var node3 = new Node(1, null, node2);
//     // var node4 = new Node(6, null, null);
//     // var node5 = new Node(8, node4, null);
//     // var node6 = new Node(10, node5, null);
//     // var node7 = new Node(5, node3, node6);
//     // //var newHead = remove(node7, 10);
//     // //console.assert(newHead.value === 5);
//     // //console.assert(newHead.right === node5);
//     // //console.assert(newHead.right.value === 8);

//     // let node11 = new Node(11);
//     // node6.right = node11;
//     // var newHead = remove(node7, 1);
//     // console.log(newHead);

//     var node1 = new Node(2, null, null);
//     var node2 = new Node(3, node1, null);
//     var newHead = remove(node2, 3);
//      console.log(newHead);
    
// }

// test();