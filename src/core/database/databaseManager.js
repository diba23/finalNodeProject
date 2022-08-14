const mysql = require('mysql2/promise');
const secreta = require('../../config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class DatabaseManager{
  constructor(){
    this.poolConnection = mysql.createPool(secreta.database)
  }

  async query(q) {
    return await this.poolConnection.query(q);
  }

  async haseAdminUser() {
    const hashedPass = await bcrypt.hash('admin1234', saltRounds)
    const admin = await this.poolConnection.query("select * from User where user_name = 'admin'");
    if(admin[0].length <= 0) {
      await this.poolConnection.query(`insert into User (email, user_name, password, first_name, last_name) values ('admin@gmail.com', 'admin', '${hashedPass}', 'admin', 'demo')`);
    }
  }
}

module.exports = new DatabaseManager();
