// Callback

// Unmaintable and tough the manage the callback chain - we can also call it as a pyramid of DOM.
// We are blindly giving control of our code to callbacks.

// Inversion of control 
    // Loose control of code



//    createOrderAPi --> proceedToPayment -->  


const cart = ["shoes", "pants", "shirt"];

api.createOrder(cart, function() {
    api.proceedToPayment();
});

