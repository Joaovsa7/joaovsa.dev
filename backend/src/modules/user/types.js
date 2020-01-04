const { gql } = require('apollo-server-express');

const typeDefs = gql`
	extend type Query {
		user(id: Int): User
		users: [User]
	}

	extend type Mutation {
		createUser(user: CreateUser): CreateUserResponse
	}

	type User {
		id: Int
		firstName: String
		lastName: String
		userName: String
		password: String
		email: String
		created_at: DateTime
		updated_at: DateTime
		deleted_at: DateTime
	}

	input CreateUser {
		firstName: String
		lastName: String
		userName: String
		password: String
		email: String
	}

	type CreateUserResponse {
		id: Int
		firstName: String
		lastName: String
		email: String
		token: String
	}
`;

module.exports = typeDefs;
