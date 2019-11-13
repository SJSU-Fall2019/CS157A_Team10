var jwt = require('jsonwebtoken')
const key = require('../key');

/**
 * User Authorization
 */
module.exports = function (req, res, next) {
    const token = req.headers.auth_token;
    // Missing JWT token
    if (!token) {
        return res.json(
            {
                success: false,
                message: "Access Denied"
            }
        )
    }
    try {
        const verifed = jwt.verify(token, key.key);
        return verifed._id;
    }
    // Invalid Token
    catch (err) {
        return res.json(
            {
                success: false,
                message: "Access Denied"
            }
        )
    }
}