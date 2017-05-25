var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017', {}).then(
  () => {
    console.log('Connection has been established successfully.');
  },
  err => {
    console.error('Unable to connect to the database:', err);
  }
);

mongoose.model('Document', {
  properties: ['title', 'data', 'tags'],

  indexes: [
    'title'
  ]
});

exports.Document = function (db) {
  return db.model('Document');
};

// sudo service mongod start
// Robomongo
