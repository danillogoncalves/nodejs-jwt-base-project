const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = '';

const connection = () => {
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('jwt_example'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;
