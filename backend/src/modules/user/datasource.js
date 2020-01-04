const db = require('../../services/database');

const userDataSource = {
	async getById({ id, fields }) {
		return db
			.connection()
			.select(fields)
			.from('users')
			.where('id', id);
	},

	async getAll() {
		return db
			.connection()
			.select('*')
			.limit(14)
			.from('users');
	},
	async createUser(data) {
		const { email, firstName, lastName, userName, password } = data;

		const user = {
			firstName,
			lastName,
			userName,
			email,
			password,
			created_at: new Date(),
			updated_at: new Date(),
			deleted_at: null,
		};

		try {
			const [id = null] = await db
				.connection()
				.insert(user)
				.table('users');

			return {
				id,
				...user,
			};
		} catch (err) {
			return { errors: err.sqlMessage };
		}
	},
};

module.exports = userDataSource;
