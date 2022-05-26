const { Client } = require('pg');
const client = new Client({
    user: process.env.POSTGRESQL_DB_USER,
    host: process.env.POSTGRESQL_DB_HOST,
    database: process.env.POSTGRESQL_DB,
    password: process.env.POSTGRESQL_DB_PASSWORD,
    port: 5432,
});
client.connect()

module.exports = client;