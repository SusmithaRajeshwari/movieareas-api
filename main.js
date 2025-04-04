import express from 'express'
import movieRoutes from './routes/movies.routes.js'
import connectdb from './lib/db.js'
const app = express()
const PORT = 3000

//connect DB
connectdb();

app.get('/',(req,res)=>{
    res.json({msg:'Hello World'})
})

app.use("/movies",movieRoutes)

//CRUD Functionality
app.listen(PORT,()=>{
    console.log(`App is listening in http://localhost:${PORT}`)
})
