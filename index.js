// Dependencies
const http = require('http');
const { reqResHandler } = require('./helpers/req_res'); // request & response handler from req_res

// app object - model scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`)
    });
};

// handle request response
app.handleReqRes = reqResHandler;

app.createServer();
