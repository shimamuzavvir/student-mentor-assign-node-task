import express from 'express'
import { GetAllMentor, createMentor, getMentorAssigned, getStudentListMentor } from '../Controllers/Mentor.Controller.js'


const MentorRouter = express.Router()

MentorRouter.post('/create-mentor',createMentor)
MentorRouter.get('/getallmentor', GetAllMentor)
MentorRouter.put('/assign/:id', getMentorAssigned)
MentorRouter.get('/mentor-student/:id', getStudentListMentor)



export default MentorRouter