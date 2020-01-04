const { REDIS_HOST, REDIS_PORT } = require('../config/index');

const redis = require('redis');
const client = redis.createClient(REDIS_HOST, REDIS_PORT);

client.on('connect', () => console.log('Hey hey... Redis are connected :)'));
client.on('error', (err)  => console.log('Something went wrong ' + err));
