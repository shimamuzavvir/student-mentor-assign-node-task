import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/Config.js'
import StudentRouter from './Router/Student.Router.js'
import MentorRouter from './Router/Mentor.Router.js'



dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port  = process.env.PORT

connectDB()

app.use('/api/mentor',MentorRouter)
app.use('/api/student',StudentRouter)


app.listen(port,()=>{
    console.log("App is running on the port -", port);
})