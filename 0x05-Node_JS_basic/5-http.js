const http = require('http');
const fs = require('fs');
const { countStudents } = require('./3-read_file_async');

const databasePath = process.argv[2] || '';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    if (!databasePath) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error: No database path provided\n');
    } else {
      countStudents(databasePath)
        .then((result) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`This is the list of our students\n${result}`);
        })
        .catch((error) => {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`Internal Server Error: ${error.message}\n`);
        });
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;

