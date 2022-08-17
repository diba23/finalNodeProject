const DatabaseManager = require("../../../core/database/databaseManager");

class OptionCreate {
  static async createOption(title, insertId) {
    const query = `insert into options (option_name, polls_list_id) values ('${title}', ${insertId})`;
    await DatabaseManager.query(query);
  }
}

module.exports = OptionCreate;