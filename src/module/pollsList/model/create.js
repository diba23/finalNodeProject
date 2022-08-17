const DatabaseManager = require("../../../core/database/databaseManager");

class PollCreate {
  static async createPoll(key, value, userId, link) {
    const query = `insert into polls_list (${key}User_id, link) values (${value}${userId}, '${link}')`;
    await DatabaseManager.query(query);
    const insertId = await DatabaseManager.query('SELECT LAST_INSERT_ID();');
    return insertId[0][0]['LAST_INSERT_ID()'];
  }
}

module.exports = PollCreate;