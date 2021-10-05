/* 
  //Comment it before submitting
class Node {  
  constructor(value = null, next = null) {  
    this.value = value;  
    this.next = next;  
  }  
}   */

function getNode(head, index){
  if(index === 0){
    return head;
  }

  let node = head;

  while (index > 0){
    node = node.next;
    index -=1;
  }
  return node;

}


function solution(node, idx) {
  if( idx === 0 ){
    return node.next;
  }

  let previousNode = getNode(node, idx - 1);
  let deletedNode = previousNode.next;
  previousNode.next = deletedNode.next;

  return node;  
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    

    console.log(solution(node0, 3) );
    // result is node0 -> node2 -> node3
}

//test();

