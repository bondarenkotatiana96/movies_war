const debounce = (callback, delay = 1000) => {
    let timeoutId;
    // This is wrapper for a function
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // Apply function helps with getting arguments for callback function (however many arguments we want to pass through)
            callback.apply(null, args);
        }, delay); 
    };
};