const { Pool } = require('pg');

const DB_CONFIG = {
    host: 'localhost',
    post: '5432',
    user: 'twmap',
    password: 'password',
    database: 'twmap'
}
const pool = new Pool(DB_CONFIG);

module.exports = {
    async query(text, params){
        const start = Date.now();
        const result = await pool.query(text, params)
        const duration = Date.now() - start;
        console.log('executed query', {text, duration, rows: result.rowCount});
        return result;
    }
}