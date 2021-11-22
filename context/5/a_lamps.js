 
//Comment it before submitting
// class CNode {  
//     constructor(value) {  
//         this.value = value;  
//         this.left = null;  
//         this.right = null;  
//     }  
// }
 

function solution(root) {

    const nodes = []
    nodes.push(root);

    let maxValue = -9999999999999999999999999999999;
    let node 
    while (nodes.length > 0){
        node = nodes.pop()

        if(node && node.left){
            nodes.push(node.left);
        }

        if(node && node.right){
            nodes.push(node.right);
        }

        if(maxValue < node.value){
            maxValue = node.value;
        }
    }

    return maxValue;
}

//  function test() {
//      var node1 = new CNode(1);
//      var node2 = new CNode(-5);
//     var node3 = new CNode(3);
//     node3.left = node1;
//     node3.right = node2;
//     var node4 = new CNode(2);
//     node4.left = node3;
//     console.assert(solution(node4) === 3);
// }

// test();