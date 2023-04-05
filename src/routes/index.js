const { Router } = require('express')

const usersRouter = require('./user.routes')
const notesRouter = require('./notes.routes')

const routes = Router()
routes.use('/users', usersRouter)
routes.use('/movie_notes', notesRouter)

module.exports = routes