const util = require("util");
var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  const connection = mysql.createConnection({
    host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "qr93kphy399nc3wm",
    port: 3306,
    password: "iqj1h94vk0fott0c",
    database: "burgers_db"
  })
// };

connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;
