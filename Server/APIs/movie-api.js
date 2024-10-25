//create a route(mini express app)
const exp=require('express')
const movieApp=exp.Router()

//add express-async-handler to handle async errors
const expressAsyncHandler=require('express-async-handler')
const {getAllMovies,getMovieByName,addMovie,deleteMovie,updateTicketStatus}=require('../Controllers/movieController')
const verifyToken=require('../Middlewares/verifyToken')



movieApp.get('/all',expressAsyncHandler(getAllMovies))
 
 movieApp.get('/search/:moviename',expressAsyncHandler(getMovieByName))

 movieApp.post('/movie',verifyToken,expressAsyncHandler(addMovie))

movieApp.delete('/:moviename/delete',verifyToken,expressAsyncHandler(deleteMovie));

movieApp.post('/:moviename/add',verifyToken,expressAsyncHandler(updateTicketStatus));


module.exports=movieApp;