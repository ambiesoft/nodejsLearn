const fs = require('node:fs');

fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
        console.error(err);
    }
    // we have access to the file stats in `stats`
});
