const DatabaseManager = require("../../../core/database/databaseManager");

class OptionDelete {
  static async deleteAllOptions(pollId) {
    const query = `delete from options where polls_list_id=${pollId}`;
    await DatabaseManager.query(query);
  }
}

module.exports = OptionDelete;
