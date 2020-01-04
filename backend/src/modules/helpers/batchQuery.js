const batchQuery = method => async ([params]) => {
	const result = await method(params);
	const resultMap = {};
	result.forEach(res => (resultMap[res.id] = res));
	return [params].map(({ id }) => resultMap[id]);
};

module.exports = batchQuery;
