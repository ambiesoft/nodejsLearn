const fs = require('node:fs');

try {
    const stats = fs.statSync('/Users/joe/test.txt');
} catch (err) {
    console.error(err);
}
