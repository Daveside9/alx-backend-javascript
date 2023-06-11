process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const input = data.trim();

  if (input) {
    console.log(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  console.log('\nThis important software is now closing');
});

