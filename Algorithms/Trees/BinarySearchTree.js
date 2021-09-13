/**
 * @Reference:
 *     - https://www.youtube.com/watch?v=bMt4jpJ0WcY&list=PL60_wMuOU2u0DUwlFGYGIhQalkl9QuWlv&index=1
*/

/*
  Node1 = 5
  /         \
Node2 = 3     Node 3 = 6
  |              \
Node5 = 2        Node4 = 8
                    \
                    Node5 = 9

  Bigger number goes to the right and smaller goes to the left
*/

function Node(data) {
  this.data = data;
  this.right = null;
  this.left = null;
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = new Node(data);
    
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(node);
    }
  }

  insertNode(node) {
    let currentNode = this.root;

    // While currentNode is not null
    while(currentNode) {
      // if new node data is less than current node data
      if (node.data < currentNode.data) {
        // if current node doesn't have any value in the LEFT side
        if(!currentNode.left) {
          // set the value of new node in the left of the current node
          currentNode.left = node;
          break;
        } 
        // if current node do have a vale on it's LEFT,
        // set the current node to next LEFT node and start looking at the left node 
        currentNode = currentNode.left;
      } else if (node.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data); 
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const temp = this.getMin(node.right);
      node.data = temp;
      node.right = this.removeNode(node.right, temp);
      return node;
    } else if(data < node.data) { 
        node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  getMin(node) {
    if(!node) {
      node = this.root;
    }
  
    while(node.left) {
      node = node.left;
    }

    return node;
  }
}

const tree = new BinarySearchTree();
tree.add(5);
tree;
tree.add(3);
tree.add(2);
tree.add(6);
tree.add(7);
tree.add();
tree;
tree.remove(5);
console.log(tree.getMin());
