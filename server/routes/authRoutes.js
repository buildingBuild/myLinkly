import express from 'express'
import bcrypt from 'bcrypt'
import multer from 'multer'
const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        console.log("Here")
        const { name, password, emailAddress, userName } = req.body

        // validate if email exist and username exist in db 


        const salt = await bcrypt.genSalt()
        const finalPassword = await bcrypt.hash(password, salt)

        res.status(201).json({
            message: "Amazing welcome",
            name: name,
            password: hashedPassword,
            emailAddress: emailAddress,
            userName: userName
        })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

})

router.post('/api/login', async (req, res) => {
    try {

        await bcrypt.compare(req.body.password, dbPassword)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }


})


export default router