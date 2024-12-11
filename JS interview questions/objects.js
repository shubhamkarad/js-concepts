// Merge the arrays

const obj1 = {
    name: "shubham",
    city: "London"
}

const obj2 = {
    age: 26,
    role: "Software Engineer"
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects(obj1, obj2));