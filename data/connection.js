const MongoClient = require("mongodb").MongoClient;
const settings = {
    mongoConfig: {
        serverUrl: "mongodb://localhost:27017/",
        database: "geofencing_database"
    }
};
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
    if (!_connection) {
        _connection = await MongoClient.connect(mongoConfig.serverUrl, {useNewUrlParser: true});
        _db = await _connection.db(mongoConfig.database);
    }

    return _db;
};