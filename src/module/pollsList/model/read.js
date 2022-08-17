const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(id) {
    const query = `select * from polls_list where User_id = ${id};`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
  static async getOnePoll(id, specified) {
    const query = `select * from polls_list where User_id = ${id} and id = ${specified};`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
