const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'herois01',
    password: 'ds564',
    port: 7007,
});

module.exports = pool;