const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line !== '');

        const students = {
          CS: [],
          SWE: [],
        };

        lines.forEach((line) => {
          const [firstName, , , field] = line.split(',');

          if (field === 'CS') {
            students.CS.push(firstName);
          } else if (field === 'SWE') {
            students.SWE.push(firstName);
          }
        });

        console.log(`Number of students: ${lines.length}`);
        console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
        console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;

