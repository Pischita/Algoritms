


function subtreeIsCorrect(node, value){

    if(node === null){
        return true;
    }

    if(node.value >= value){
        return false;
    }

    if(node.left === null && node.right === null){
        return true;
    }    

    if( (node.left != null && node.right != null) && node.left.value >= node.right.value){
        return false;
    }

    if( (node.right != null) && node.value >= node.right.value){
        return false;
    }



    result = true;

    if(node.left != null){
        result = subtreeIsCorrect(node.left, value);
    }

    if(node.right != null && result){
        result = subtreeIsCorrect(node.right, value);
    }

    return result;
}


function solution(root) {
    let node = root;

    let result = true;
    
    while(node != null && result){
        if((node.left && node.right) && (node.left.value >= node.right.value) ){
            result = false;
            break;
        }

        if(node.right && ( node.value >= node.right.value) ){
            result = false;
            break;  
        }

        result = subtreeIsCorrect(node.left, node.value);
        node = node.right;
    }

    //console.log(result);
    return result;
    
}

//Comment it before submitting 
// class CNode {  
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }

// function test() {
//     var node1 = new CNode(1, null, null);
//     var node2 = new CNode(4, null, null);
//     var node3 = new CNode(3, node1, node2);
//     var node4 = new CNode(8, null, null);
//     var node5 = new CNode(5, node3, node4);
//     console.assert(solution(node5));
//     node4.value = 5;
//     console.assert(!solution(node5));
// }

// test();