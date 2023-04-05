const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const userRoutes = Router()

userRoutes.post('/', new UsersController().create)


module.exports = userRoutes