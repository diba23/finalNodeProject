const DatabaseManager = require("../../../core/database/databaseManager");

class PollUpdate {
  static async updateData(data) {
    const query = `update user set ${
      data.title !== undefined ? `title = ${data.title || ""}, ` : ""
    }${data.description !== undefined ? `description = ${data.description || ""}, ` : ""}${
      data.creator_name ? `creator_name = ${data.creator_name}, ` : ""
    }${
      data.creator_email ? `creator_email = ${data.creator_email}, ` : ""
    } where id=${data.id};`;
    console.log(query);
  }
}

module.exports = PollUpdate;
