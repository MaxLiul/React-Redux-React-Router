require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.js');

/* var MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb//localhost:27017/myapi', function (arr, database) {
if (err) {
return console.log(err);
}
db = database;
app.listen(3012,function () {
console.log(‘API app started’);
})
}) */
