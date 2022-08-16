const UserReader = require('./model/read');
const bcrypt = require('bcrypt');
const AuthenticatinManager = require('../../core/auth');

class UserController {
  async checkLogIn(req, res, next){
    try{
      const userName = req.body.userName;
      const password = req.body.password;
      const selectRes = await UserReader.getUserByName(userName)
      const users = selectRes;
      if(users && users[0]) {
        const dbPass = users[0].password;
        const passwordEqual = await bcrypt.compare(password, dbPass);
        if(passwordEqual) {
          const payload = {
            id: users[0].id,
            email: users[0].email,
            userName: users[0].user_name,
            firstName: users[0].first_name,
            lastName: users[0].last_name,
          }
          const token = AuthenticatinManager.getJwtToken(payload) 
          res.json(token);
        } else {return res.status(403).json({msg: "password wrong!"})}
      } else {
        return res.status(403).json({msg: "username wrong!"});
      }
    } catch(err) {
      console.error(err);
    }
  }
}

module.exports = UserController;