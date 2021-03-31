// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// model scaffolding
const handler = {};

// request handling
handler.reqResHandler = (req, res) => {
    // parsing url
    const parsedUrl = url.parse(req.url, true);  // true as 2nd param takes all query strings if passed with the url
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');  // replaces any slash at the beginning or after the path with empty string
    const method = req.method.toLowerCase();  // lowercased request method
    const queryStrings = parsedUrl.query;  // an object containing all the query strings
    const headers = req.headers; // an object containing all the headers
    const decoder = new StringDecoder('utf-8');
    let data = '';
    req.on('data', (buffer) => {
        data += decoder.write(buffer); // decodes the buffer and converts it into readable data
    });
    req.on('end', () => {
        console.log(data);
        data += decoder.end(); // stops the writing process
        // response handling
        res.end('request ended');
    });
};

module.exports = handler;