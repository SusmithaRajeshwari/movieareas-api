import express from 'express'

const router = express.Router()



//R- For Reading Movies
router.get('/',(req,res)=>{
    res.send("Reading All Movies")
})

//C- For Creating Movies
router.post('/',(req,res)=>{
    res.send("Creating all movies")
})

//U- For Updating Movie
router.put('/:id',(req,res)=>{
    res.send("Updating all movies")
})

//D - For Deleting Movie
router.delete('/:id',(req,res)=>{
    res.send("Deleting all movies")    
})

export default router