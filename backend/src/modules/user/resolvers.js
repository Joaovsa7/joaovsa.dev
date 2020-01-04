const resolvers = {
	Query: {
		async users(_, args, { loaders }) {
			return loaders.user.getAll.load(1);
		},
		async user(_, { id }, { loaders, getFields }, info) {
			const fields = Object.keys(getFields(info));
			const userResult = await loaders.user.getUserById.load({ id, fields });
			return userResult;
		},
	},
	Mutation: {
		async createUser(_, { user }, { datasource }) {
			const userResponse = await datasource.user.createUser(user);
			if (userResponse.errors) {
				throw userResponse.errors;
			}
			return userResponse;
		},
	},
};

module.exports = resolvers;
