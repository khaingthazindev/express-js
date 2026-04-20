const Movie = require('../models/Movie');
const Todo = require("../models/Todo");

async function getAllMovies() {
		return Movie.find();
}

async function getMovieById(movieId) {
		let movie = await Movie.findById(movieId);
		if (!movie) {
				throw new Error('Movie not found');
		}
		return movie;
}

async function searchMovieByTitle(movieTitle) {
		const movies = await Movie.find({
			title: {
					$regex: movieTitle
			}
		});
		return movies;
}

async function searchMovieByYear(year) {
		const movies = await Movie.find({
				year: year
		});
		return movies;
}

async function saveMovie(movie) {
		let newMovie = new Movie(movie);
		return newMovie.save();
}

async function updateMovie(id, movie) {
		let existingMovie = await Movie.findById(id);
		if (movie.title === undefined) {
				throw new Error('title field is required.');
		}
		if (existingMovie) {
				return Movie.findByIdAndUpdate(id, movie, {new: true, runValidators: true }); // {new: true} return updated item
		} else {
				throw new Error(`Movie ${id} not found`);
		}
}

async function deleteMovie(id) {
		let existingMovie = await Movie.findById(id);
		if (existingMovie) {
				return Movie.findByIdAndDelete(id);
		} else {
				throw new Error(`Movie ${id} not found`);
		}
}

module.exports = {
		getAllMovies,
		saveMovie,
		getMovieById,
		searchMovieByTitle,
		searchMovieByYear,
		updateMovie,
		deleteMovie,
};