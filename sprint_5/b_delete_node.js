/*
ID правильного решения - 59907266

Для удаления узла из дерева первоначально будет находиться в дереве узел который нужно удалить.
После среди его потомков будет находиться самый правый элемент в левом поддереве, если левое поддерево отсутствует 
будет будет искаться самый левый элемент в правом поддереве.
После этого найденный узел будет заменятся на удаляемый узел и в родителях будут заменятся ссылки.

Временная сложность алгоритма будет O(log N)
*/

function getLeaf(node, side='left'){
    let currentNode = undefined;
    let parent = undefined;
    if(side === 'left' && node.left != null){
        currentNode = node.left;
        while(currentNode != null && currentNode.right){
            parent = currentNode;
            currentNode = currentNode.right; 
        }

        if(parent){
            parent.right = currentNode.left;
        }
        
        return currentNode;
    }else{
        currentNode = node.right;
        while(currentNode != null && currentNode.left){
            parent = currentNode;
            currentNode = currentNode.left; 
        }

        if(parent){
            parent.left = currentNode.right;
        }
        
        return currentNode;
    }

}


function remove(node, key) {
    let currentNode = node;
    let deletedNode = undefined;
    let parentForDeleted = undefined;

    while(currentNode != null){
        if(key === currentNode.value){
            deletedNode = currentNode;
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

