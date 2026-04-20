var express = require('express');
var router = express.Router();
var MovieController = require('../controller/MovieController');

router.get('/', MovieController.getAllMovie);
router.post('/', MovieController.saveMovie);
router.get('/:id', MovieController.getMovieById);
router.get('/title/:title', MovieController.searchMovieByTitle);
router.get('/year/:year', MovieController.searchMovieByYear);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;