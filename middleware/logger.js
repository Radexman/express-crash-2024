const logger = (req, res, next) => {
	console.log(
		`Request method: ${req.method}, request protocol: ${req.protocol}://, host name: ${req.get('host')}, url: ${
			req.originalUrl
		}`
	);
	next();
};

export default logger;
