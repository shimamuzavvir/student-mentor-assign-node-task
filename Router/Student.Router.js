import express from 'express'
import { AssignMentor, GetAllStudents, createStudent, getStudentAssignedMentor } from '../Controllers/Student.Controller.js'

const StudentRouter = express.Router()

StudentRouter.post('/create-student', createStudent)  
StudentRouter.get('/getallstudents', GetAllStudents)
StudentRouter.put('/assign/:id', AssignMentor)
StudentRouter.get('/get-student/:id',getStudentAssignedMentor)



export default StudentRouter