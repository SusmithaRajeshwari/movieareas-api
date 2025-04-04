import Movie from '../models/movies.model.js'
export const movieIndex =async (req,res)=>{
    try{
    const movies = await Movie.find()
    res.json(movies)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const movieDetail =async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id)

        if(movie==null){
            return res.status(404).json({message:"cannot find movie"})
        }else{
            res.json(movie)
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
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

export const movieUpdate=async(req,res)=>{
   try{
    const updatedMovie=await Movie.findOneAndUpdate({_id:req.params.id},{
        title:req.body.title,
        desc:req.body.desc
    },{
        new:true
    })
    res.status(200).json(updatedMovie)
   }catch(err){
    res.status(400).json({messgae:err.message})
   }
}

export const movieDelete =async(req,res)=>{
    const movieId=req.params.id

    try{
        await Movie.deleteOne({_id:movieId})
        res.json({message:"Movie Deleted"})
    }catch(err){
        res.status(400).json({message:err.message})
    }
    res.send("Deleting all movies")    
}