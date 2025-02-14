# Incorrect setInterval usage in React useEffect

This repository demonstrates a common error when using `setInterval` inside a `useEffect` hook in React.  The problem stems from how closures work with asynchronous operations.  The example shows how the `count` variable will not update as expected due to the closure capturing the final value of the `count` variable. The solution demonstrates the correct approach using a functional update within `setCount`.

## Bug
The provided `bug.js` demonstrates the problem.  Running this will show that the count will likely not increment to the expected value; this is because the callback function within `setInterval` always refers to the final value of `count` after the effect completes.  This is because React's state updates are asynchronous.