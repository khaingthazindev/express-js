var express = require('express');
const todos = require("../dummy/todos");
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
		res.send('Test');
});

router.get('/ab?cd', function(req, res, next) {
		res.send('ab?cd'); // ? is zero or 1 so /abcd /acd
});

router.get('/hello', function(req, res, next) {
		console.log('hey')
		next();
}, (req, res, next) => {
		console.log('hello');
		res.send('hello');
});

router.get('/download', function (req, res, next) {
		res.download('./public/hello.txt');
});

router.get('/admin', function (req, res, next) {
		res.redirect('/test/login');
});

router.get('/login', function (req, res, next) {
		res.json({
				messsage: 'Unauthorized'
		});
});

router.get('/sendFile/:name', function (req, res, next) {
		const options = {
				root: path.join(__dirname, '../', 'public'),
				dotfiles: 'deny',
				headers: {
						'x-timestamp': Date.now(),
						'x-sent': true
				}
		}
		
		const filename = req.params.name;
		res.sendFile(filename, options, function (err) {
				if (err) {
						next(err);
				} else {
						console.log(filename)
				}
		})
});

module.exports = router;