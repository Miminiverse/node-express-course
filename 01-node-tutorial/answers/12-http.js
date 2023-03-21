const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req === '/') {
        res.end("Welcome to our home page")
    }
    if (req.url === '/about') {
        res.end("Here is our short history")
    }
    res.end(`
    <h1>Opps</h1>`)
})

server.listen(5001)