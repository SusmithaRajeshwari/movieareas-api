import Movie from '../models/movies.model.js'
export const movieIndex =(req,res)=>{
    res.send("Reading All Movies")
}

export const movieCreate =async (req,res)=>{
        
    const newMovie = new Movie({
        title:req.body.title,
        desc:req.body.desc
    })

    try{
        const movie = await newMovie.save()
        res.status(201).json(movie)
    }catch(err){
        return res.status(400).json({message:err.message})
    }

}

export const movieUpdate=(req,res)=>{
    res.send("Updating all movies")
}

export const movieDelete =(req,res)=>{
    res.send("Deleting all movies")    
}