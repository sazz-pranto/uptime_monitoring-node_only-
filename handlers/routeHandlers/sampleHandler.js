// model scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    // takes status code and message (payload) as param
    callback(200, {
        message: "This is a sample url"
    });
};

module.exports = handler;