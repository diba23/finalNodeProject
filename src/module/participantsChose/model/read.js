const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantsChoseReader {
  static async getAllChose(participantId) {
    const query = `SELECT option_name FROM ((participants INNER JOIN participants_chose ON  participants_chose.participants_id = participants.id && participants.id = ${participantId}) inner join options on participants_chose.option_id =  options.id);`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = ParticipantsChoseReader;
