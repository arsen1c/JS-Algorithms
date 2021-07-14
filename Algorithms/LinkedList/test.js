class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  };

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return this.add(value);
    }
    console.log('Outside');
    const node = new Node(value);
    const { prevNode, nextNode } = this.getPrevNextNodes(index);
    prevNode.next = node;
    node.next = nextNode;

    this.size++;
  };

  getPrevNextNodes(index) {
    let count = 0;
    let prevNode = this.head;
    let nextNode = prevNode.next;

    while(count < index - 1) {
      prevNode = prevNode.next;
      nextNode = prevNode.next;
      count++;
    }

    this.size++;

    return { prevNode, nextNode };
  };

  remove(index) {
    let { prevNode, nextNode } = this.getPrevNextNodes(index);
    prevNode.next = nextNode.next;
    this.size--;
  }
}

const ll = new LinkedList();
ll.add('arsenic');
ll
ll.add('astrix');
ll
const returnedValue = ll.insert('ra', 1)
ll
ll.remove(1);
ll;