function Node(data) {
  this.data = data;
  this.right = null;
  this.left = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Add method
  add(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(node);
    }
  };

  // InsertNode method
  insertNode(node){
    let currentNode = this.root;

    while(currentNode){
      if (node.data < currentNode.data){
        // Check if left node is empty or not
        if (!currentNode.left) {
          // insert the data to the left of the currentNode
          currentNode.left = node;
          break;

        } else {
          currentNode = currentNode.left;
        }
      } else if (node.data > currentNode.data) {
        // Check if right node is empty
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        break;
      } 
    }
  }
}

const tree = new BinarySearchTree();
tree.add(5);
tree.add(4);
tree.add(3);
console.log(tree);