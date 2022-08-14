const DatabaseManager = require('../../../core/database/databaseManager')

class UserReader{
  static async getUserByName(userName){
   const query = `select * from User where user_name='${userName}';`
   const result = await DatabaseManager.query(query);
   return result[0];
  }
}

module.exports = UserReader;