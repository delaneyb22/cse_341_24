const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongo').MongoClient;

let database;

const initDb = (callback) => {
    if (_db){
        console.log('database is already initialized!');
        return callback(null,_db);
    }
    MongoClient.connect(process.env.MONGODB_URL).then(
        (client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        })

};