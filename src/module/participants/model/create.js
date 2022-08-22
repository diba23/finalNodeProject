const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantsCreate {
  static async addParticipant (name, pollId) {
    const query = `insert into participants (participant_name,  polls_list_id) values ('${name}', ${pollId}) ;`;
    await DatabaseManager.query(query);
    const insertId = await DatabaseManager.query('SELECT LAST_INSERT_ID();');
    return insertId[0][0]['LAST_INSERT_ID()'];
  }
}

module.exports = ParticipantsCreate;