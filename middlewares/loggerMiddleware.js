function customLogger(loggerName) {
		return function (req, res, next) {
				req.time = new Date();
				console.log('[custom logger] ', loggerName, ' url ', req.url);
				next();
		}
}
module.exports = customLogger;