const { Router } = require('express')
const router = Router()


//Controller
const {
   addOneUser,
   checkOneUser,
} = require('../controllers/auth')

// middleware
const isEmpty = require("../middleware/isEmpty")

/*Post One User*/
router.post('/signup', isEmpty, addOneUser)

/*Check One User*/
router.post('/signin', isEmpty, checkOneUser)

/*Check One User*/
router.post('/auth', (req, res, next) => {
   res.json({ id: req.user.id })
})

module.exports = router