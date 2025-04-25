# What is a Queue?

A **queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle. This means the first element added to the queue is the first one to be removed, similar to a line of people waiting at a ticket counter.

---

## Key Operations in a Queue:
1. **Enqueue**: Add an element to the end of the queue.
2. **Dequeue**: Remove an element from the front of the queue.
3. **Peek/Front**: Retrieve the element at the front of the queue without removing it.
4. **IsEmpty**: Check if the queue is empty.
5. **Size**: Get the total number of elements in the queue.

---

## Characteristics of a Queue:
1. **Order**: Maintains the order of elements as they are inserted.
2. **Dynamic Size**: Can grow or shrink based on operations.
3. **Two Ends**: Operations are performed at different ends — enqueue at the rear and dequeue at the front.

---

## Types of Queues:
1. **Simple Queue**: A basic queue following the FIFO principle.
2. **Circular Queue**: The last position is connected back to the first to form a circle.
3. **Priority Queue**: Elements are dequeued based on priority instead of their arrival time.
4. **Double-Ended Queue (Deque)**: Elements can be added or removed from both ends.

---

## Applications of Queues:
1. **Task Scheduling**: Used in operating systems for CPU scheduling and print job scheduling.
2. **Data Stream Processing**: Handles real-time data, such as logging or message queues.
3. **Breadth-First Search (BFS)**: Used in graph and tree traversal algorithms.
4. **Caching Mechanisms**: Implements least recently used (LRU) or first in first out (FIFO) caching policies.
5. **Order Processing**: In e-commerce or restaurant systems for managing customer orders.
