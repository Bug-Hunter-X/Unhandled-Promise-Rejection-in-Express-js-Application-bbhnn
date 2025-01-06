const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello!');
  }).catch(err => {
    // Error handling missing in the promise chain
    console.error('Error:', err);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // Example: Database query, network request etc.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        reject(new Error('Asynchronous operation failed'));
      } else {
        resolve();
      }
    }, 1000);
  });
}