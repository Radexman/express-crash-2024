import colors from 'colors';

const logger = (req, res, next) => {
	const methodColors = {
		GET: 'green',
		POST: 'blue',
		PUT: 'yellow',
		DELETE: 'red',
	};

	const color = methodColors[req.method] || white;

	console.log(
		`Request method: ${req.method}, request protocol: ${req.protocol}://, host name: ${req.get('host')}, url: ${
			req.originalUrl
		}`[color]
	);
	next();
};

export default logger;
