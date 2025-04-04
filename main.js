import express from 'express'
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.json({msg:'Hello World'})
})

//CRUD Functionality

//R- For Reading Movies
app.get('/movies',()=>{

})

//C- For Creating Movies
app.post('/movies',()=>{

})

//U- For Updating Movie
app.put('/movies/:id',()=>{

})

//D - For Deleting Movie
app.delete('/movies/:id',()=>{
    
})

app.listen(PORT,()=>{
    console.log(`App is listening in http://localhost:${PORT}`)
})
