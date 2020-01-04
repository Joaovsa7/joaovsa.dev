const DataLoader = require('dataloader');
const userDataSource = require('./datasource');
const batchQuery = require('../helpers/batchQuery');

const loaders = () => ({
	getUserById: new DataLoader(batchQuery(userDataSource.getById)),
	getAll: new DataLoader(async id => id.map(userDataSource.getAll)),
});

module.exports = loaders;
