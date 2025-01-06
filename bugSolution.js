const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello!');
  }).catch(err => {
    console.error('Error:', err); // Log the error for debugging purposes
    res.status(500).send('Internal Server Error'); // Send an error response to the client
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
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