// model scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    // status code and message (payload)
    callback(404, {
        message: "Your requested url was not found!"
    })
};

module.exports = handler;