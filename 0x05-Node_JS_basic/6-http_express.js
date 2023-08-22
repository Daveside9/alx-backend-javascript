const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello_Holberton_School!');
});

app.listen(port, () => {
});

module.exports = app;
