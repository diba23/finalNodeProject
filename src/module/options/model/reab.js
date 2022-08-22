const DatabaseManager = require("../../../core/database/databaseManager");

class OptionsReader {
  static async getAllOptionsByPollsListId(pollsListId) {
    const query = `select option_name, id from options where polls_list_id=${pollsListId};`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
  static async getOptionsID(optionNAme, pollsListId) {
    const query = `select id from options where option_name='${optionNAme}' and polls_list_id=${pollsListId};`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = OptionsReader