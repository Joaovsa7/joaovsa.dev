const _merge = require('lodash/merge');
const { gql } = require('apollo-server-express');
const { userResolvers, userDatasource, userLoaders, userTypes } = require('../modules/user/index');

const root = gql`
	scalar DateTime
	scalar JSON

	type Query {
		_empty: String
	}

	type Mutation {
		_empty: String
	}
`;

const typeDefs = [root, userTypes];

const resolvers = _merge(userResolvers);

const loaders = {
	user: userLoaders(),
};

const datasource = {
	user: userDatasource,
};

module.exports = {
	typeDefs,
	resolvers,
	loaders,
	datasource,
};
