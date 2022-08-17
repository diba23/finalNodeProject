const DatabaseManager = require("../../../core/database/databaseManager");

class PollUpdate {
  static async updateData(data) {
    const query = `update polls_list set ${
      data.title !== undefined ? `title = '${data.title || ""}', ` : ""
    }${data.description !== undefined ? `description = '${data.description || ""}', ` : ""}${
      data.creator_name ? `creator_name = '${data.creator_name}', ` : ""
    }${
      data.creator_email ? `creator_email = '${data.creator_email}', ` : ""
    }id=${data.id} where id=${data.id};`;
    await DatabaseManager.query(query);
  }
}

module.exports = PollUpdate;
