const MovieService = require('../service/MovieService');

async function getAllMovie(req, res, next) {
		let movies = await MovieService.getAllMovies();
		res.status(200).json({
				message: 'Success',
				data: movies
		});
}

async function getMovieById(req, res, next) {
	let id = req.params.id;
	try {
			let movie = await MovieService.getMovieById(id);
			res.status(200).json({
					message: 'Success',
					data: movie
			})
	} catch (error) {
			res.status(404).json({
					error: error.message
			})
	}
}

async function searchMovieByTitle(req, res, next) {
		const title =  req.params.title;
		try {
				let movies = await MovieService.searchMovieByTitle(title);
				res.status(200).json({
						message: 'Success',
						data: movies
				});
		} catch (e) {
			res.status(500).json({
					error: 'Something went wrong'
			})
		}
}

async function searchMovieByYear(req, res, next) {
		const year =  req.params.year;
		try {
				let movies = await MovieService.searchMovieByYear(year);
				res.status(200).json({
						message: 'Success',
						data: movies
				});
		} catch (e) {
				res.status(500).json({
						error: 'Something went wrong'
				})
		}
}

async function saveMovie(req, res, next) {
		let body = req.body;
		try {
				let movie = await MovieService.saveMovie(body);
				res.status(201).json({
						message: 'Success',
						data: movie
				});
		} catch(e) {
				res.status(400).json({ error: e.message });
		}
}

async function updateMovie(req, res, next) {
		let id = req.params.id;
		try {
				let movie = await MovieService.updateMovie(id, req.body);
				res.status(200).json({
						message: 'Success',
						data: movie
				});
		} catch (error) {
				res.status(404).json({ error: error.message });
		}
}

async function deleteMovie(req, res, next) {
		const id = req.params.id;
		try {
				let movie = await MovieService.deleteMovie(id);
				res.status(200).json(movie);
		} catch (err) {
				res.status(404).json({ error: err.message });
		}
}

module.exports = { getAllMovie, saveMovie, getMovieById, updateMovie, deleteMovie, searchMovieByTitle, searchMovieByYear};