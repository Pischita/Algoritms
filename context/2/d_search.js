/* 
//Comment it before submitting
class Node {  
  constructor(value = null, next = null) {  
    this.value = value;  
    this.next = next;  
  }  
}
 */

function solution(node, elem) {
  if (node.value === elem){
    return 0;    
  }

  let currentNode = node.next;
  let index = 1; 
  while(currentNode){
    if (currentNode.value === elem){
      return index;
    }

    index++;
    currentNode = currentNode.next;

  }

  return -1;

}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    var idx = solution(node0, "node2");
    // result is idx === 2

    console.log(idx);
}

//test();