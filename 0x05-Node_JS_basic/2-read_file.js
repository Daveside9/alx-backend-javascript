const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    console.log(`Number of students: ${lines.length - 1}`);

    const fields = lines[0].split(',');

    fields.forEach((field, index) => {
      if (index > 0) {
        const students = [];
        lines.slice(1).forEach(line => {
          const values = line.split(',');
          students.push(values[index]);
        });

        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

