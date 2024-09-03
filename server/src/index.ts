import express, {Express, Request, Response}  from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/test', (req:Request, res:Response)=>{
    res.status(200).json({messge: "server is running"})
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})