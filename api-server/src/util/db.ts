import mysql2 from 'mysql2/promise';
import config from '../config/mysql';

const pool = mysql2.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
    connectionLimit: config.connectionLimit
});

export async function getConnection () {
    return await pool.getConnection();
}
