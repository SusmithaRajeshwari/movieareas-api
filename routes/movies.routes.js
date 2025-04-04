import express from 'express'
import { movieCreate,movieDetail, movieDelete, movieIndex, movieUpdate } from '../controllers/movies.controllers.js'

const router = express.Router()



//R- For Reading Movies
router.get('/',movieIndex)

router.get('/:id',movieDetail)

//C- For Creating Movies
router.post('/',movieCreate)

//U- For Updating Movie
router.put('/:id',movieUpdate)

//D - For Deleting Movie
router.delete('/:id',movieDelete)

export default router