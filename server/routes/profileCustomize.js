import express from 'express'
const router = express.Router()
// sending imgs to  aws s3
router.post('/edit-pfp', (req, res) => {




})

router.put('/edit-link', (req, res) => {




})

router.post('/add-link', (req, res) => {




})



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
export default router