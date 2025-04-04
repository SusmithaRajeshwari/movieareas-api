import express from 'express'
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.json({msg:'Hello World'})
})

app.listen(PORT,()=>{
    console.log(`App is listening in http://localhost:${PORT}`)
})
