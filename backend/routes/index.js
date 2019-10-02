const path = require('path');

//require mysql in node modules to use it
const mysql = require('mysql');

//module.exports exports this function so it can be required by another file (server.js)
//must pass in app because it contains the express application
module.exports = function(app, connection) {
  app.get('/', function(req, res) {
    connection.query('SELECT * FROM users', function(err, data) {
      (err)?res.send(err):res.json({users: data});
    });
  });
};
