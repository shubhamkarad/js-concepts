// What is difference between call, apply and bind.

//Call
// Call: The call() method invokes a function with a given this value and arguments provided one by one
let employee1 = {firstName: "Shubh", lastName: "am"};
let employee2 = {firstName: "Yash", lastName: "Karande"};

function invite(greet1, greet2) {
    console.log(greet1 + " " + this.firstName + " " + this.lastName + ", " + greet2)
}

invite.call(employee1, "Hello", "How Are you?");
invite.call(employee2, "Hello", "How Are you?");


// Apply
// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

let frnd1 = {firstName: "Shubh", lastName: "am"};
let frnd2 = {firstName: "Yash", lastName: "Karande"};

function invite(greet1, greet2) {
    console.log(greet1 + " " + this.firstName + " " + this.lastName + ", " + greet2)
}

invite.apply(frnd1, ["Hello", "How Are you?"]);
invite.apply(frnd2, ["Hello", "How Are you?"]);


// bind
// Bind: returns a new function, allowing you to pass any number of arguments

let emp1 = {firstName: "Shubh", lastName: "am"};
let emp2 = {firstName: "Yash", lastName: "Karande"};

function invite(greet1, greet2) {
    console.log(greet1 + " " + this.firstName + " " + this.lastName + ", " + greet2)
}
let invEmp1 = invite.bind(emp1);
let invEmp2 = invite.bind(emp2);
invEmp1("Hello", "How Are you?");
invEmp2("Hello", "How Are u?");