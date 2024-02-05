const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("WELCOME TO THE WORLD OF Vaishnavi Deokar, HAVE A NICE A DAY TTO ALL,Arti lai yedi yeeeee........\n'");
});
server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
module.exports = server;
