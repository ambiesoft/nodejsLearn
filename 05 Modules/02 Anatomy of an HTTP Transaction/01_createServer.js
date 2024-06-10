const http = require('node:http');

const server1 = http.createServer((request, response) => {
    // magic happens here!
    let body = [];
    request
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            // at this point, `body` has the entire request body stored in it as a string
        });

});

const server2 = http.createServer();
server.on('request', (request, response) => {
    // the same kind of magic happens here!
});

