const express = require('express')
const router = express.Router()


const {logon, hello} = require('../controllers/main.js')
const authMiddleware = require("../middleware/auth.js")

router.route('/logon').post(logon)
router.route('/hello').get(authMiddleware, hello)


module.exports = router