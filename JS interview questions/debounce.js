// By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. 

// he debounce function is used to limit the rate at which a function (func) is executed. It ensures that the function is only called after a specified delay has passed since the last time it was invoked. This is especially useful in scenarios like user input events (e.g., keypress, scroll, resize) where frequent function calls can cause performance issues.

// Explanation of the Code:
// Parameters:

// func: The function that needs to be debounced (executed after a delay).
// delay: The time (in milliseconds) to wait before executing the function.
// Inner Function:

// The debounce function returns a new function.
// This new function is called whenever the event it is attached to is triggered.
// Logic:

// clearTimeout(timer):
// Cancels the previously set timer to ensure the function isn't called if the event occurs again within the delay.
// timer = setTimeout(func, delay):
// Schedules the function (func) to be executed after the specified delay.

function debounce(func, delay) { 

  let timer; 

  return function() { 

    clearTimeout(timer); 

    timer = setTimeout(func, delay); 

  }; 

} 
function handleResize() {
    console.log('Resize event triggered!');
}

console.log(debounce(handleResize, 500));

  

