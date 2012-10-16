var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  var query = "ALTER TABLE `group` ADD notes TEXT DEFAULT NULL";
  db.all(query, function(err, results) {
    callback();
  });
};

exports.down = function(db, callback) {
  var query = "ALTER TABLE `group` DROP notes";
  db.all(query, function(err, results) {
    callback();
  });
};
