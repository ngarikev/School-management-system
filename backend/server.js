const express = require('express')
const app = express()

//importing routers
const studentRoute = require('./routers/studentRoutes.js')
const teacherRoute = require('./routers/teacherRoutes.js')
const guardianRoute = require('./routers/guardianRoutes')
const classRoute = require('./routers/classRoutes.js')
const subjectRoute = require('./routers/subjectRoutes.js')
const attendanceRoute = require('./routers/attendanceRoutes.js')
const activityRoute = require('./routers/activityRoutes.js')
const examRoute = require('./routers/examRoutes.js')
const gradeRoute = require('./routers/gradeRoutes.js')
const yearTermRoute = require('./routers/yearTermRoutes.js')



const port = 3000

//middleware
app.use(express.json())


app.use('/students', studentRoute)  

app.use('/teachers', teacherRoute)

app.use('/guardians', guardianRoute )

app.use('/classes', classRoute)

app.use('/subjects', subjectRoute)

app.use('/attendance', attendanceRoute)

app.use('/activities', activityRoute)

app.use('/exams', examRoute)

app.use('/grades', gradeRoute)

app.use('/terms', yearTermRoute)

app.listen(port, ()=> {
  console.log(`Listening to port:${port}`)
})

