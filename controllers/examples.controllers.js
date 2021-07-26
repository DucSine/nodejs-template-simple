const Response = require("../helpers/response.helper")

exports.helloWord = async (req, res, next) => {
    return Response.success(res, { message: 'helloword' })
}