import express from 'express'
import jwt from 'jsonwebtoken'
import authRoutes from './routes/authRoutes.js'
import profileEditsRoutes from './routes/profileCustomize.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/auth', authRoutes)
app.use('/api/profile-edit', profileEditsRoutes)




app.listen(PORT, () => console.log(`Running on port ${PORT}`))