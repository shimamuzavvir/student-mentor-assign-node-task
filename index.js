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



app.get("/", (req, res) => {
    res.status(200)
      .send(`<div style="text-align: center; background-color:lightgray;  padding: 10px;"><h1>Assign the Mentors to the students</h1></div>
      <div>
      <h1  style="text-align: center;">For Mentor</h1>
      <h3>Base API:http://localhost:4000/api/mentor</h3>
      <ul>
      <li>
      <h3><mark>Post:</mark> Use the endpoint to <mark>/create-mentor</mark> to Create the Mentor</h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> Change the endpoint to <mark>/getallmentors</mark> to Get all Mentors</h3>
      </li>
  
      <li>
      <h3><mark>Put:</mark> Change the endpoint to <mark>/assign/:id</mark> to Assign the mentor to the students</h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> Change the endpoint to <mark>/mentor-student/:id</mark> to get the all students list with mentor-id</h3>
      </li>
  
      </ul> 
      </div>
      <hr></hr>
       
      <div>
      <h1  style="text-align: center;">For Student</h1>
      <h3>Base API:http://localhost:4000/api/student</h3>
      <ul>
      <li>
      <h3><mark>Post:</mark> Use the endpoint to <mark>/create-student</mark> to Create a Student</h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> Change the endpoint to <mark>/getallstudents</mark> to Get all the Students</h3>
      </li>
  
      <li>
      <h3><mark>Put:</mark> Change the endpoint to <mark>/assign/:id</mark> to Assign a students to the mentor </h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> Change the endpoint to <mark>/get-particular/:id</mark> to get particular Assigned Student Mentor</h3>
      </li>
  
      </ul> 
      </div>`);
  });




app.listen(port,()=>{
    console.log("App is running on the port -", port);
})