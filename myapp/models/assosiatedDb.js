const Sequelize = require('sequelize');

const config = {
  database: 'testuser',
  username: 'testuser',
  password: 'testuser',
  options: {
    host: 'localhost',
    port: 5432,
    timezone: 'GMT-0',
    dialect: 'postgres', //  'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    logging: false, // process.env.NODE_ENV === 'development' ||process.env.NODE_ENV === 'test',
    pool: {
      max: 10,
      min: 5,
      idle: 30000
    }
  }
};

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

sequelize
  .authenticate()
  .then(err => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
db.Job = sequelize.define('job', {
  possition: {
    type: Sequelize.STRING
  }
});
db.User.belongsTo(db.Job);

db.Job.sync({ force: true }).
then(() => {
  return db.Job.create({
    possition: 'Programmer1'
  });
}).
then(() => {
  return db.Job.create({
    possition: 'Programmer2'
  });
}).
then(() => {
  return db.Job.findOrCreate({ where: {
    possition: 'Programmer3 '
  } });
}).
then(() => {
  //  Table created;
  return db.User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
}).
then(() => {
  return db.User.findOrCreate({ where: {
    firstName: 'Alex',
    lastName: 'Pushkin'
  } });
}).
then(() => {
  return db.User.findOrCreate({ where: {
    firstName: 'Sidor',
    lastName: 'Ivanov'
  } });
});

module.exports = db;

 // Promise1 = new Promise;
// Promise1().then().then().then()
// Promise1().then( .then(.then(.then()))).
