const DatabaseManager = require("../../../core/database/databaseManager");

class OptionCreate {
  static async createPoll(pollId, userId, link) {
    const query = `insert into options (${pollId} User_id, link) values (${pollId} ${userId}, '${link}')`;
    // await DatabaseManager.query(query);
  }
}

module.exports = OptionCreate;