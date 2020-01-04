const express = require('express');
const graphqlFields = require('graphql-fields');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers, loaders, datasource } = require('./schema');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: {
		loaders,
		datasource,
		getFields: graphqlFields,
	},
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000/graphql`));
