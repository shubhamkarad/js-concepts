// Promises

// A promise is an object representing the eventual completion of an asynchronous opration.

// promise is nothing but a Empty object.

// Attach a callback function in then block.

// 2 things in promise: state and result object
// There are 2 states in promise: pending, fulfilled, rejected.

const GITHUB_API = "https://api.github.com/users/";

const user = fetch(GITHUB_API)

user.then(res => console.log(res));

console.log(user);


// Instead of using a callback hell we can use this promises chaining
createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentId => proceedToPayment(paymentId))
    .then(paymentInfo => updateWalletBalance(paymentInfo));
