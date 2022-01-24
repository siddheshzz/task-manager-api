const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word Document'))
//         }
//         cb(undefined, true)
//             // cb(new Error('File must be an Image'))
//             // cb(undefined, true)
//             // cb(undefined,false)

//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })


// app.use((req, res, next) => {
//     res.status(503).send('We are scheduled for maintainance!!')
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('listening on port ' + port)
})


// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc' }, 'itsmylife', { expiresIn: '7 days' })
//     console.log(token)

//     console.log(jwt.verify(token, 'itsmylife'))

// }
// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() => {
//     const user = await User.findById('61ece357b88e355e60f56d62')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()