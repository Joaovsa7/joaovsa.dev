const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = require('../config/index');
const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        connectTimeout: 30000
    }
});

module.exports = db;