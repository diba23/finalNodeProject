const DatabaseManager = require("../../../core/database/databaseManager");

class OptionCreate {
  static async createOption(title, insertId) {
    const query = `insert into options (option_name, polls_list_id) values ('${title}', ${insertId})`;
    await DatabaseManager.query(query);
    const newId = await DatabaseManager.query('SELECT LAST_INSERT_ID();');
    return newId[0][0]['LAST_INSERT_ID()'];
  }
}

module.exports = OptionCreate;