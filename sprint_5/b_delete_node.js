function getLeaf(node, side='left'){
    let currentNode = undefined;
    let parent = undefined;
    if(side === 'left'){
        currentNode = node.left;
        while(currentNode.right){
            parent = currentNode;
            currentNode = currentNode.right; 
        }

        console.log(currentNode);
        console.log(parent);
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
        if( key > node.value){
            currentNode = currentNode.right; 
        }else{
            currentNode = currentNode.left;
        }


    }

    //console.log(deletedNode);
    //console.log(parentForDeleted);
    getLeaf(deletedNode);



    return node;
    
}

class Node { 
    constructor(value, left = null, right = null) { 
        this.value = value; 
        this.left = left; 
        this.right = right; 
    } 
}


function test() {
    var node1 = new Node(2, null, null);
    var node2 = new Node(3, node1, null);
    var node3 = new Node(1, null, node2);
    var node4 = new Node(6, null, null);
    var node5 = new Node(8, node4, null);
    var node6 = new Node(10, node5, null);
    var node7 = new Node(5, node3, node6);
    var newHead = remove(node7, 10);
    console.assert(newHead.value === 5);
    console.assert(newHead.right === node5);
    console.assert(newHead.right.value === 8);
}

test();