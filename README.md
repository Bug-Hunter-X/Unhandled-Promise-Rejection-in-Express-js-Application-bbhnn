# Unhandled Promise Rejection in Express.js
This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections.  The `bug.js` file contains code with a missing error handler in a promise chain, leading to a potential application crash. The `bugSolution.js` file provides a corrected version with proper error handling.

## How to Reproduce the Bug
1. Clone this repository.
2. Run `npm install express`.
3. Run `node bug.js`.
4. Observe the server behavior. It may crash or show an incomplete error message.  The probability of failure is 50% due to the random nature of the `someAsyncOperation` function.

## Solution
The `bugSolution.js` file demonstrates how to properly handle potential errors within the promise chain using a `.catch()` block.