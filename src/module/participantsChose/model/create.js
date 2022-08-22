const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantsChoseCreate {
  static async addParticipantChose (participantId, optionId) {
    const query = `insert into participants_chose (participants_id, option_id) values ('${participantId}', ${optionId}) ;`;
    await DatabaseManager.query(query);
  }
}

module.exports = ParticipantsChoseCreate;