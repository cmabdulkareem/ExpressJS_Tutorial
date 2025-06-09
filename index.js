import express from 'express'
import adminRouter from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'

import './config/db.js'
const app = express()


app.use(express.urlencoded())
app.use(express.json())

app.use('/', userRoutes)
app.use('/admin/', adminRouter)

app.listen(3000, ()=> console.log('listening on port 3000'))