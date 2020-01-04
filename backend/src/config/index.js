const {
    DB_HOST = '35.198.43.80',
    DB_PORT = '3306',
    DB_USER = 'root',
    DB_PASSWORD = 'aviao123',
    DB_NAME = 'vsa_dev',
    REDIS_HOST = '127.0.0.1',
    REDIS_PORT = 6379
} = process.env;

module.exports = {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME  
};