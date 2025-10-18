import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {




})


app.



    app.listen(3000, () => console.log("Hello"))