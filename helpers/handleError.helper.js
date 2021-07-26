const Response = require('./response.helper');

// eslint-disable-next-line no-unused-vars
function handleError(err, req, res, next) {
  Response.error(res, {
    type: err.name,
    message: err.message,
  });
}

module.exports = handleError;
