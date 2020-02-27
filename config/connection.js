const util = require("util");
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Fr33dum!",
    database: "burgers_db"
  })
};

connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;
