function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage
const log = debounce(() => console.log("Debounced!"), 300);
log();
