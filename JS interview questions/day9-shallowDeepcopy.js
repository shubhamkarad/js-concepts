// A shallow copy only copies the first level of properties. For nested objects, it still references the same inner objects.

// shallowCopy is a new object, but the details object inside it references the same memory location as original.details.
// Changes in shallowCopy.details also affect original.details.

// deepCopy is a completely new object, including its nested properties.
// Modifying deepCopy.details does not affect original.details.

//Shallow copy - 	First level only

const original = {
  name: "Shubham",
  details: {
    age: 25,
    city: "Nashik",
  },
};

const shallowCopy = { ...original };

shallowCopy.details.city = "Pune";

console.log(
  "------------------------------Shallow Copy-----------------------------"
);

console.log(original.details.city, "- Original");

console.log(shallowCopy.details.city, "- Shallow Copy");

console.log(
  "------------------------------Deep Copy-----------------------------"
);

// Deep copy - Entire structure, including nested
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.details.city = "Mumbai";

console.log(original, "- Original");
console.log(deepCopy, "- Deep Copy");
