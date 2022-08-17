const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantsReader {
  static async participantsCount (pollsListId) {
    const query = `select count(*) from participants where polls_list_id=${pollsListId};`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = ParticipantsReader