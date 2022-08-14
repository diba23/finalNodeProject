const AuthenticatinManager = require("../auth");

class AuthMiddleware {
  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = req.headers.authorization;
      if (jwtToken) {
        const authorization = jwtToken.split(" ")[1];
        const validation = AuthenticatinManager.ValidateJwtToken(authorization);
        if (validation) {
          req.jwt_payload = validation;
          next();
        } else {
          res.status(403).json({ msg: "Not authorizationed!" });
        }
      } else {
        res.status(403).json({ msg: "Not authorizationed!" });
      }
    } catch (err) {
      res.status(401).end({ msg: "No username and/or password!" });
    }
  }
}

module.exports = AuthMiddleware;
