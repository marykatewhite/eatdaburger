const util = require("util");
var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qr93kphy399nc3wm",
  port: 3306,
  password: "iqj1h94vk0fott0c",
  database: "yniajzs8gnnvpq27"
});

connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;
