const jwt = require('jsonwebtoken');
class AuthenticatinManager{
  static getJwtToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET,{
      algorithm: 'HS256',
      expiresIn: process.env.JWT_EXPIRY_SECOND,
    })
    return token;
  }

  static ValidateJwtToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}

module.exports = AuthenticatinManager;