class Node {
    constructor(data) {
      this.data = data; // The value of the node
      this.next = null; // The reference to the next node
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; // Start of the list
      this.size = 0; // Size of the list
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode; // If the list is empty, make this the head
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Point the last node to the new node
      }
      this.size++;
    }
  
    // Add a node at a specific index
    insertAt(index, data) {
      if (index < 0 || index > this.size) {
        throw new Error("Index out of bounds");
      }
  
      const newNode = new Node(data);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let previous;
        let count = 0;
  
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
  
        newNode.next = current;
        previous.next = newNode;
      }
      this.size++;
    }
  
    // Remove a node by value
    remove(data) {
      let current = this.head;
      let previous = null;
  
      while (current) {
        if (current.data === data) {
          if (previous) {
            previous.next = current.next;
          } else {
            this.head = current.next;
          }
          this.size--;
          return;
        }
        previous = current;
        current = current.next;
      }
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' -> ';
        current = current.next;
      }
      result += 'null';
      console.log(result);
    }
  }
  
  // Example Usage
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.insertAt(1, 15);
  list.print(); // Output: 10 -> 15 -> 20 -> null
  list.remove(15);
  list.print(); // Output: 10 -> 20 -> null
  