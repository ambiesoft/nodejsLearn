const fs = require('node:fs');

try {
  const data = fs.readFileSync('.text', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
