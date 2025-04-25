# Understanding Arrays

An **array** is a linear data structure used to store elements of the same type, indexed for quick access. Arrays are foundational in programming, enabling efficient data manipulation and storage.

---

## Key Features of Arrays

1. **Fixed Size**  
   Traditional arrays have a fixed size (e.g., in C), while dynamic arrays (e.g., in JavaScript, Python) can grow or shrink.

2. **Indexed Access**  
   Each element is accessed using an index starting from `0`.

3. **Homogeneous Data**  
   Stores elements of the same type.

4. **Contiguous Memory**  
   Elements are stored in contiguous memory locations for efficient access.

---

## Common Array Operations

1. **Traversal**: Accessing each element.  
2. **Insertion**: Adding an element (at a specific index or the end).  
3. **Deletion**: Removing an element.  
4. **Searching**: Finding an element.  
5. **Sorting**: Arranging elements in a specific order.  

---

## Array Methods (JavaScript Focus)

### 1. Adding/Removing Elements

#### `push(element)`
- **Description**: Adds one or more elements to the end of the array.  
- **Time Complexity**: \( O(1) \) for adding one element.  
- **Example**:
  ```javascript
  const arr = [1, 2];
  arr.push(3); // [1, 2, 3]

### pop()
**Description**: Removes and returns the last element.
### `pop()`
- **Description**: Removes and returns the last element.
- **Time Complexity**: `O(1)`
- **Example**:
  ```javascript
  arr.pop(); // [1, 2]

### `unshift(element)`
- **Description**: Adds elements to the start of the array.
- **Time Complexity**: `O(n)` (shifts all elements).
- **Example**:
  ```javascript
  arr.unshift(0); // [0, 1, 2]

### `shift()`
- **Description**: Removes the first element and shifts the rest.
- **Time Complexity**: `O(n)`
- **Example**:
  ```javascript
  arr.shift(); // [1, 2]

## 2. Searching

### `indexOf(element)`
- **Description**: Finds the first occurrence of an element, returns `-1` if not found.
- **Time Complexity**: `O(n)`
- **Example**:
  ```javascript
  arr.indexOf(2); // 1

## 3. Iteration

### `forEach(callback)`
- **Description**: Iterates through the array.
- **Example**:
  ```javascript
  arr.forEach(num => console.log(num));

## 4. Sorting

### `sort(compareFunction)`
- **Description**: Sorts the array in place.
- **Example**:
  ```javascript
  const nums = [3, 1, 2];
  nums.sort((a, b) => a - b); // [1, 2, 3]

## 5. Splicing and Slicing

### `splice(start, deleteCount, ...items)`
- **Description**: Modifies the array by removing/replacing elements.
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  arr.splice(1, 1, 4); // [1, 4, 3]

## 6. Merging and Flattening

### `concat(array)`
- **Description**: Combines two arrays.
- **Example**:
  ```javascript
  const arr2 = [4, 5];
  const combined = arr.concat(arr2); // [1, 2, 3, 4, 5]


### Preallocate Memory (Fixed Size)
- **Description**: For large arrays, preallocate memory to avoid resizing.
- **Example**:
  ```javascript
  const largeArray = new Array(100000);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


splice can be slow because it shifts elements. Use it sparingly.
Use Typed Arrays

### Locale Compare for Strings:
#### Example:
    const names = ['éclair', 'apple', 'banana'];
    names.sort((a, b) => a.localeCompare(b));
    console.log(names); // Output: ['apple', 'banana', 'éclair']

In performance-critical applications (e.g., game development), use typed arrays like Int32Array or Float64Array for efficiency.