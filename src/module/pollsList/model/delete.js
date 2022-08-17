const DatabaseManager = require("../../../core/database/databaseManager");

class PollDelete {
  static async deleteData(id) {
    const query = `delete from polls_list where id=${id}`;
    await DatabaseManager.query(query);
  }
}

module.exports = PollDelete;
